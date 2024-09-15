// script.js

const translations = {
    en: {
        title: "Interactive Website",
        welcome: "Welcome to our Cosmic Learning Hub!",
        explore: "Explore the universe of knowledge with our interstellar lectures.",
        click: "Click",
        python: "Python",
        pythonDesc: "to explore a cosmic map of Python programming.",
        java: "Java",
        javaDesc: "to embark on a journey through the Java galaxy.",
        c: "C",
        cDesc: "to dive into the foundational universe of C programming.",
        cpp: "C++",
        cppDesc: "to explore the advanced dimension of the C universe.",
        goToLectures: "Go to Lectures",
        exploreRoadmap: "Explore Developer Roadmap",
        eBook: "A good E-Book for education.",
        credit: "Credit",
        
        // New translations for Python page
        pythonTitle: "Python for Beginners - Interactive Website",
        pythonHeader: "Python for Beginners",
        home: "Home",
        lectures: "Lectures",
        roadmap: "Roadmap",
        welcomePython: "Welcome to the Python Universe!",
        pythonDescription: "Python is a clear and powerful object-oriented programming language, comparable to Perl, Ruby, Scheme, or Java.",
        pythonFeatures: "Some of Python's notable features:",
        feature1: "Uses an elegant syntax, making the programs you write easier to read.",
        feature2: "Is an easy-to-use language that makes it simple to get your program working.",
        feature3: "Comes with a large standard library that supports many common programming tasks.",
        feature4: "Is ideal for prototype development and other ad-hoc programming tasks.",
        feature5: "Works on all major operating systems.",
        gettingStarted: "Getting Started",
        newToProgramming: "Are you new to programming? If you're brand new to programming, you might want to start with these beginner's resources:",
        nonProgrammersGuide: "The Non-Programmer's Guide to Python",
        programmersGuide: "The Programmer's Guide to Python",
        installingPython: "Installing Python",
        installInstructions: "Depending on your operating system, you might already have Python installed. If not, you can download it from the official Python website:",
        downloadPython: "Download Python",
        learningPython: "Learning Python",
        learningResources: "Here are some great resources to start learning Python:",
        pythonTutorial: "The Python Tutorial",
        onlineTutorials: "Online Python Tutorials",
        pythonBooks: "Python Books for Beginners",
        pythonBasics: "Python Basics",
        basicExamples: "Start learning Python with these basic examples:",
        helloWorld: "1. Hello World",
        variablesDataTypes: "2. Variables and Data Types",
        variablesExplanation: "Python automatically detects the type of variable you're working with.",
        conditionalStatements: "3. Conditional Statements",
        conditionalExplanation: "Use `if`, `elif`, and `else` to control the flow of your program.",
        loops: "4. Loops",
        loopsExplanation: "Loops allow you to repeat tasks. Python has two types of loops: `for` and `while`.",
        functions: "5. Functions",
        functionsExplanation: "Functions allow you to write reusable blocks of code.",
        pythonCommunities: "Python Communities",
        communitiesExplanation: "Join these communities to get help and connect with other Python enthusiasts:",
        pythonOrgCommunity: "Python.org Community",
        stackOverflow: "Stack Overflow Python Questions",
        redditLearnPython: "r/learnpython on Reddit"
    },
    th: {
        title: "เว็บไซต์โต้ตอบ",
        welcome: "ยินดีต้อนรับสู่ศูนย์การเรียนรู้จักรวาลของเรา!",
        explore: "สำรวจจักรวาลแห่งความรู้ด้วยการบรรยายระหว่างดวงดาวของเรา",
        click: "คลิก",
        pythonDesc: "เพื่อสำรวจแผนที่จักรวาลของการเขียนโปรแกรมไพธอน",
        javaDesc: "เพื่อออกเดินทางผ่านกาแล็กซีจาวา",
        cDesc: "เพื่อดำดิ่งสู่จักรวาลพื้นฐานของการเขียนโปรแกรมภาษาซี",
        cppDesc: "เพื่อสำรวจมิติขั้นสูงของจักรวาลภาษาซี",
        goToLectures: "มาบันทึกสิ่งที่คุณเรียนรู้กัน!",
        exploreRoadmap: "สำรวจเส้นทางนักพัฒนาซอฟต์แวร์",
        eBook: "หนังสืออิเล็กทรอนิกส์ที่ดีสำหรับการศึกษา",
        credit: "ที่มาของข้อมูล",
        
        // New translations for Python page
        pythonTitle: "Python สำหรับผู้เริ่มต้น",
        pythonHeader: "Python สำหรับผู้เริ่มต้น",
        welcomePython: "ยินดีต้อนรับสู่จักรวาลไพทอน!",
        pythonDescription: "ไพทอนเป็นภาษาโปรแกรมเชิงวัตถุที่ชัดเจนและทรงพลัง เทียบได้กับ Perl, Ruby, Scheme หรือ Java",
        pythonFeatures: "คุณสมบัติเด่นบางประการของไพทอน:",
        feature1: "ใช้ไวยากรณ์ที่สวยงาม ทำให้โปรแกรมที่คุณเขียนอ่านง่ายขึ้น",
        feature2: "เป็นภาษาที่ใช้งานง่าย ทำให้การทำงานของโปรแกรมของคุณเป็นเรื่องง่าย",
        feature3: "มาพร้อมกับไลบรารีมาตรฐานขนาดใหญ่ที่รองรับงานโปรแกรมทั่วไปหลายอย่าง",
        feature4: "เหมาะสำหรับการพัฒนาต้นแบบและงานโปรแกรมเฉพาะกิจอื่นๆ",
        feature5: "ทำงานบนระบบปฏิบัติการหลักทั้งหมด",
        gettingStarted: "เริ่มต้นใช้งาน",
        newToProgramming: "คุณเป็นมือใหม่ในการเขียนโปรแกรมหรือไม่? หากคุณเพิ่งเริ่มต้นเขียนโปรแกรม คุณอาจต้องการเริ่มต้นด้วยทรัพยากรสำหรับผู้เริ่มต้นเหล่านี้:",
        nonProgrammersGuide: "คู่มือไพทอนสำหรับผู้ที่ไม่ใช่โปรแกรมเมอร์",
        programmersGuide: "คู่มือไพทอนสำหรับโปรแกรมเมอร์",
        installingPython: "การติดตั้งไพทอน",
        installInstructions: "ขึ้นอยู่กับระบบปฏิบัติการของคุณ คุณอาจมีไพทอนติดตั้งอยู่แล้ว หากไม่มี คุณสามารถดาวน์โหลดได้จากเว็บไซต์อย่างเป็นทางการของไพทอน:",
        downloadPython: "ดาวน์โหลดไพทอน",
        learningPython: "การเรียนรู้ไพทอน",
        learningResources: "นี่คือทรัพยากรที่ยอดเยี่ยมสำหรับการเริ่มต้นเรียนรู้ไพทอน:",
        pythonTutorial: "บทเรียนไพทอน",
        onlineTutorials: "บทเรียนออนไลน์ไพทอน",
        pythonBooks: "หนังสือไพทอนสำหรับผู้เริ่มต้น",
        pythonBasics: "พื้นฐานไพทอน",
        basicExamples: "เริ่มเรียนรู้ไพทอนด้วยตัวอย่างพื้นฐานเหล่านี้:",
        helloWorld: "1. สวัสดีชาวโลก",
        variablesDataTypes: "2. ตัวแปรและประเภทข้อมูล",
        variablesExplanation: "ไพทอนตรวจจับประเภทของตัวแปรที่คุณใช้งานโดยอัตโนมัติ",
        conditionalStatements: "3. คำสั่งเงื่อนไข",
        conditionalExplanation: "ใช้ `if`, `elif`, และ `else` เพื่อควบคุมการทำงานของโปรแกรมของคุณ",
        loops: "4. ลูป",
        loopsExplanation: "ลูปช่วยให้คุณทำงานซ้ำๆ ได้ ไพทอนมีลูปสองประเภท: `for` และ `while`",
        functions: "5. ฟังก์ชัน",
        functionsExplanation: "ฟังก์ชันช่วยให้คุณเขียนบล็อกโค้ดที่นำกลับมาใช้ใหม่ได้",
        pythonCommunities: "ชุมชนไพทอน",
        communitiesExplanation: "เข้าร่วมชุมชนเหล่านี้เพื่อรับความช่วยเหลือและเชื่อมต่อกับผู้ที่ชื่นชอบไพทอนคนอื่นๆ:",
        pythonOrgCommunity: "ชุมชน Python.org",
        stackOverflow: "คำถามเกี่ยวกับไพทอนบน Stack Overflow",
        redditLearnPython: "r/learnpython บน Reddit"
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update language for attributes like placeholder and title
    document.querySelectorAll('[data-translate-attr]').forEach(element => {
        const data = element.getAttribute('data-translate-attr').split(',');
        data.forEach(item => {
            const [attr, key] = item.split(':');
            if (translations[lang] && translations[lang][key]) {
                element.setAttribute(attr, translations[lang][key]);
            }
        });
    });
}

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