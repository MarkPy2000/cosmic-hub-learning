// script.js
function initialize() {
    const lectureForm = document.getElementById('lectureForm');
    const lectureList = document.getElementById('lectureList');
    const tagFilters = document.getElementById('tagFilters');
    const languageSelector = document.getElementById('languageSelector');

    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }

    if (lectureForm) {
        lectureForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Form submitted');

            const title = this.title.value;
            const description = this.description.value;
            const speaker = this.speaker.value;
            const videoLink = this.videoLink.value;
            const normalLink = this.normalLink.value;
            const tag = this.tag.value;
            const image = this.image.files[0];

            if (title && description && speaker && tag && image) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const imageUrl = e.target.result;
                    const newLecture = { 
                        id: Date.now(), 
                        title, 
                        description, 
                        speaker, 
                        videoLink, 
                        normalLink, 
                        imageUrl, 
                        tag 
                    };
                    saveLecture(newLecture);
                    displayLectures();
                    lectureForm.reset();
                };
                reader.readAsDataURL(image);
            } else {
                alert('Please fill out all required fields (title, description, speaker, tag, and image).');
            }
        });
    } else {
        console.error('Lecture form not found');
    }

    if (tagFilters) {
        tagFilters.addEventListener('click', function(event) {
            if (event.target.classList.contains('tag-filter')) {
                const tag = event.target.dataset.tag;
                displayLectures(tag);
            }
        });
    }

    if (lectureList) {
        lectureList.addEventListener('click', function(event) {
            if (event.target.classList.contains('delete-button')) {
                const lectureId = parseInt(event.target.dataset.id);
                deleteLecture(lectureId);
                displayLectures();
            }
        });
    }

    displayLectures();

    // Set initial language
    const initialLang = languageSelector ? languageSelector.value : 'en';
    changeLanguage(initialLang);
}

function saveLecture(lecture) {
    let lectures = JSON.parse(localStorage.getItem('lectures')) || [];
    lectures.push(lecture);
    localStorage.setItem('lectures', JSON.stringify(lectures));
}

function deleteLecture(lectureId) {
    let lectures = JSON.parse(localStorage.getItem('lectures')) || [];
    lectures = lectures.filter(lecture => lecture.id !== lectureId);
    localStorage.setItem('lectures', JSON.stringify(lectures));
}
function displayLectures(filterTag = 'all') {
    let lectures = JSON.parse(localStorage.getItem('lectures')) || [];
    const lectureList = document.getElementById('lectureList');

    if (lectureList) {
        lectureList.innerHTML = '';

        lectures.forEach(function(lecture) {
            if (filterTag === 'all' || lecture.tag === filterTag) {
                const lectureItem = document.createElement('div');
                lectureItem.classList.add('lecture-item');
                lectureItem.innerHTML = `
                    <h3>${lecture.title}</h3>
                    <p>${lecture.description}</p>
                    <p>Speaker: ${lecture.speaker}</p>
                    <p>Tag: ${lecture.tag}</p>
                    <img src="${lecture.imageUrl}" alt="${lecture.title}" style="max-width: 200px;">
                    ${lecture.videoLink ? `<a href="${lecture.videoLink}" class="button" target="_blank">Watch Video</a>` : ''}
                    ${lecture.normalLink ? `<a href="${lecture.normalLink}" class="button" target="_blank">Visit Link</a>` : ''}
                    <button class="delete-button" data-id="${lecture.id}">Delete Lecture</button>
                `;
                lectureList.appendChild(lectureItem);
            }
        });
    } else {
        console.error('Lecture list container not found');
    }
}

document.addEventListener('DOMContentLoaded', initialize);
