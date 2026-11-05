/* =====================================================
   QUIZNOVA - ONLINE QUIZ APPLICATION

   STUDENT: FELIX PETER
   MATRIC NUMBER: 2025/HND/SWD/010
   COURSE: SWD 417

   TECHNOLOGIES:
   HTML, CSS, JAVASCRIPT, LOCAL STORAGE
===================================================== */

"use strict";


/* =====================================================
   1. STORAGE CONFIGURATION
===================================================== */

const STORAGE_KEYS = {
    history: "quiznova_history",
    theme: "quiznova_theme"
};


/* =====================================================
   2. QUIZ SETTINGS
===================================================== */

const QUIZ_SETTINGS = {
    duration: 10 * 60,
    passMark: 50,
    questionsPerQuiz: 10
};


/* =====================================================
   3. QUIZ QUESTION DATABASE

   Each category contains 10 questions.

   answer:
   0 = A
   1 = B
   2 = C
   3 = D
===================================================== */

const quizDatabase = {

    /* ================================================
       COMPUTER SCIENCE
    ================================================ */

    computer: {

        title: "Computer Science",

        icon: "💻",

        questions: [

            {
                question: "What does CPU stand for?",
                options: [
                    "Central Processing Unit",
                    "Computer Processing Utility",
                    "Central Program Unit",
                    "Computer Power Unit"
                ],
                answer: 0,
                explanation:
                    "CPU means Central Processing Unit. It processes instructions and performs calculations."
            },

            {
                question: "Which of these is an input device?",
                options: [
                    "Monitor",
                    "Printer",
                    "Keyboard",
                    "Speaker"
                ],
                answer: 2,
                explanation:
                    "A keyboard is an input device used to enter data into a computer."
            },

            {
                question: "What does HTML stand for?",
                options: [
                    "HyperText Markup Language",
                    "HighText Machine Language",
                    "Hyper Transfer Markup Link",
                    "Home Tool Markup Language"
                ],
                answer: 0,
                explanation:
                    "HTML stands for HyperText Markup Language and is used to structure web pages."
            },

            {
                question: "Which programming language is commonly used to add interactivity to websites?",
                options: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "SQL"
                ],
                answer: 2,
                explanation:
                    "JavaScript is commonly used to make websites interactive."
            },

            {
                question: "Which of the following is an operating system?",
                options: [
                    "Microsoft Word",
                    "Windows",
                    "Google Chrome",
                    "Adobe Photoshop"
                ],
                answer: 1,
                explanation:
                    "Windows is an operating system that manages computer hardware and software."
            },

            {
                question: "What does RAM stand for?",
                options: [
                    "Read Access Memory",
                    "Random Access Memory",
                    "Rapid Application Memory",
                    "Remote Access Machine"
                ],
                answer: 1,
                explanation:
                    "RAM means Random Access Memory. It temporarily stores data used by running programs."
            },

            {
                question: "Which HTML element is used to create a hyperlink?",
                options: [
                    "<link>",
                    "<href>",
                    "<a>",
                    "<url>"
                ],
                answer: 2,
                explanation:
                    "The HTML anchor element, <a>, is used to create hyperlinks."
            },

            {
                question: "What is the main purpose of CSS?",
                options: [
                    "To store database records",
                    "To style web pages",
                    "To create operating systems",
                    "To compile Java programs"
                ],
                answer: 1,
                explanation:
                    "CSS is used to control the appearance and layout of web pages."
            },

            {
                question: "Which of these is a database management system?",
                options: [
                    "MySQL",
                    "HTML",
                    "CSS",
                    "Bootstrap"
                ],
                answer: 0,
                explanation:
                    "MySQL is a relational database management system."
            },

            {
                question: "What does URL stand for?",
                options: [
                    "Universal Resource Link",
                    "Uniform Resource Locator",
                    "Unified Reference Location",
                    "User Resource Language"
                ],
                answer: 1,
                explanation:
                    "URL stands for Uniform Resource Locator. It identifies the location of a resource."
            }

        ]

    },


    /* ================================================
       MATHEMATICS
    ================================================ */

    mathematics: {

        title: "Mathematics",

        icon: "🧮",

        questions: [

            {
                question: "What is 15 + 27?",
                options: [
                    "40",
                    "42",
                    "43",
                    "45"
                ],
                answer: 1,
                explanation:
                    "15 + 27 = 42."
            },

            {
                question: "What is 12 × 8?",
                options: [
                    "86",
                    "92",
                    "96",
                    "108"
                ],
                answer: 2,
                explanation:
                    "12 multiplied by 8 equals 96."
            },

            {
                question: "What is the square root of 144?",
                options: [
                    "10",
                    "11",
                    "12",
                    "14"
                ],
                answer: 2,
                explanation:
                    "12 × 12 = 144, so the square root of 144 is 12."
            },

            {
                question: "What is 25% of 200?",
                options: [
                    "25",
                    "40",
                    "50",
                    "75"
                ],
                answer: 2,
                explanation:
                    "25% of 200 = 0.25 × 200 = 50."
            },

            {
                question: "Solve: 3x + 5 = 20.",
                options: [
                    "3",
                    "4",
                    "5",
                    "6"
                ],
                answer: 2,
                explanation:
                    "3x = 15, therefore x = 5."
            },

            {
                question: "What is 7 squared?",
                options: [
                    "14",
                    "21",
                    "42",
                    "49"
                ],
                answer: 3,
                explanation:
                    "7 squared means 7 × 7 = 49."
            },

            {
                question: "What is 100 ÷ 4?",
                options: [
                    "20",
                    "25",
                    "30",
                    "40"
                ],
                answer: 1,
                explanation:
                    "100 divided by 4 equals 25."
            },

            {
                question: "What is the perimeter of a square with sides of 6 cm?",
                options: [
                    "12 cm",
                    "18 cm",
                    "24 cm",
                    "36 cm"
                ],
                answer: 2,
                explanation:
                    "Perimeter = 4 × 6 = 24 cm."
            },

            {
                question: "What is 0.5 expressed as a percentage?",
                options: [
                    "5%",
                    "25%",
                    "50%",
                    "500%"
                ],
                answer: 2,
                explanation:
                    "0.5 × 100 = 50%."
            },

            {
                question: "What is the value of 2³?",
                options: [
                    "6",
                    "8",
                    "9",
                    "12"
                ],
                answer: 1,
                explanation:
                    "2³ = 2 × 2 × 2 = 8."
            }

        ]

    },


    /* ================================================
       GENERAL KNOWLEDGE
    ================================================ */

    general: {

        title: "General Knowledge",

        icon: "🌍",

        questions: [

            {
                question: "What is the capital of Nigeria?",
                options: [
                    "Lagos",
                    "Kano",
                    "Abuja",
                    "Ibadan"
                ],
                answer: 2,
                explanation:
                    "Abuja is the capital city of Nigeria."
            },

            {
                question: "How many continents are commonly recognized in the seven-continent model?",
                options: [
                    "Five",
                    "Six",
                    "Seven",
                    "Eight"
                ],
                answer: 2,
                explanation:
                    "The seven-continent model recognizes Africa, Antarctica, Asia, Europe, North America, South America, and Australia."
            },

            {
                question: "Which planet is known as the Red Planet?",
                options: [
                    "Venus",
                    "Mars",
                    "Jupiter",
                    "Mercury"
                ],
                answer: 1,
                explanation:
                    "Mars is called the Red Planet because of its reddish appearance."
            },

            {
                question: "Which ocean is the largest?",
                options: [
                    "Atlantic Ocean",
                    "Indian Ocean",
                    "Arctic Ocean",
                    "Pacific Ocean"
                ],
                answer: 3,
                explanation:
                    "The Pacific Ocean is the largest ocean on Earth."
            },

            {
                question: "What is the official currency of Nigeria?",
                options: [
                    "Dollar",
                    "Naira",
                    "Cedi",
                    "Pound"
                ],
                answer: 1,
                explanation:
                    "The Nigerian Naira is the official currency of Nigeria."
            },

            {
                question: "Which country is famous for the Eiffel Tower?",
                options: [
                    "Germany",
                    "Italy",
                    "France",
                    "Spain"
                ],
                answer: 2,
                explanation:
                    "The Eiffel Tower is located in Paris, France."
            },

            {
                question: "How many days are in a leap year?",
                options: [
                    "364",
                    "365",
                    "366",
                    "367"
                ],
                answer: 2,
                explanation:
                    "A leap year contains 366 days."
            },

            {
                question: "Which animal is the largest living land animal?",
                options: [
                    "Giraffe",
                    "African elephant",
                    "Hippopotamus",
                    "Rhinoceros"
                ],
                answer: 1,
                explanation:
                    "The African elephant is the largest living land animal."
            },

            {
                question: "What is the largest planet in our solar system?",
                options: [
                    "Earth",
                    "Saturn",
                    "Jupiter",
                    "Neptune"
                ],
                answer: 2,
                explanation:
                    "Jupiter is the largest planet in the solar system."
            },

            {
                question: "Which organization is commonly abbreviated as WHO?",
                options: [
                    "World Health Organization",
                    "World Human Office",
                    "World Housing Organization",
                    "Worldwide Health Office"
                ],
                answer: 0,
                explanation:
                    "WHO stands for World Health Organization."
            }

        ]

    },


    /* ================================================
       ENGLISH LANGUAGE
    ================================================ */

    english: {

        title: "English Language",

        icon: "📖",

        questions: [

            {
                question: "Which word is a synonym of 'happy'?",
                options: [
                    "Angry",
                    "Joyful",
                    "Sad",
                    "Tired"
                ],
                answer: 1,
                explanation:
                    "Joyful means feeling or expressing happiness."
            },

            {
                question: "Which sentence is grammatically correct?",
                options: [
                    "She go to school.",
                    "She going to school.",
                    "She goes to school.",
                    "She gone to school."
                ],
                answer: 2,
                explanation:
                    "'She goes to school' uses the correct present-tense verb form."
            },

            {
                question: "What is the opposite of 'ancient'?",
                options: [
                    "Old",
                    "Historic",
                    "Modern",
                    "Traditional"
                ],
                answer: 2,
                explanation:
                    "Modern is an antonym of ancient."
            },

            {
                question: "Which of these words is a noun?",
                options: [
                    "Quickly",
                    "Beautiful",
                    "Happiness",
                    "Run"
                ],
                answer: 2,
                explanation:
                    "Happiness is an abstract noun."
            },

            {
                question: "What is the plural of 'child'?",
                options: [
                    "Childs",
                    "Children",
                    "Childes",
                    "Childrens"
                ],
                answer: 1,
                explanation:
                    "Children is the irregular plural form of child."
            },

            {
                question: "Which word is correctly spelled?",
                options: [
                    "Recieve",
                    "Receive",
                    "Receeve",
                    "Receve"
                ],
                answer: 1,
                explanation:
                    "Receive is the correct spelling."
            },

            {
                question: "Which punctuation mark ends a direct question?",
                options: [
                    "Comma",
                    "Full stop",
                    "Question mark",
                    "Colon"
                ],
                answer: 2,
                explanation:
                    "A question mark is used at the end of a direct question."
            },

            {
                question: "Which word is an adjective in 'The tall boy smiled'?",
                options: [
                    "The",
                    "Tall",
                    "Boy",
                    "Smiled"
                ],
                answer: 1,
                explanation:
                    "Tall is an adjective because it describes the boy."
            },

            {
                question: "What is the past tense of 'write'?",
                options: [
                    "Writed",
                    "Writing",
                    "Wrote",
                    "Written"
                ],
                answer: 2,
                explanation:
                    "Wrote is the simple past tense of write."
            },

            {
                question: "Choose the correct article: 'She bought ___ umbrella.'",
                options: [
                    "a",
                    "an",
                    "the",
                    "no article"
                ],
                answer: 1,
                explanation:
                    "An is used before the vowel sound at the beginning of umbrella."
            }

        ]

    },


    /* ================================================
       SCIENCE
    ================================================ */

    science: {

        title: "Science",

        icon: "🔬",

        questions: [

            {
                question: "What is the chemical formula for water?",
                options: [
                    "CO2",
                    "H2O",
                    "O2",
                    "NaCl"
                ],
                answer: 1,
                explanation:
                    "Water has the chemical formula H2O."
            },

            {
                question: "Which organ pumps blood around the human body?",
                options: [
                    "Liver",
                    "Lungs",
                    "Heart",
                    "Kidney"
                ],
                answer: 2,
                explanation:
                    "The heart pumps blood through the circulatory system."
            },

            {
                question: "Which gas do plants absorb during photosynthesis?",
                options: [
                    "Oxygen",
                    "Nitrogen",
                    "Carbon dioxide",
                    "Hydrogen"
                ],
                answer: 2,
                explanation:
                    "Plants absorb carbon dioxide during photosynthesis."
            },

            {
                question: "What is the SI unit of force?",
                options: [
                    "Joule",
                    "Newton",
                    "Watt",
                    "Pascal"
                ],
                answer: 1,
                explanation:
                    "Force is measured in newtons."
            },

            {
                question: "Which part of the human body controls most voluntary movements?",
                options: [
                    "Brain",
                    "Stomach",
                    "Liver",
                    "Kidney"
                ],
                answer: 0,
                explanation:
                    "The brain coordinates and controls voluntary movements."
            },

            {
                question: "At standard atmospheric pressure, what is the boiling point of pure water?",
                options: [
                    "50°C",
                    "75°C",
                    "100°C",
                    "120°C"
                ],
                answer: 2,
                explanation:
                    "Pure water boils at approximately 100°C at standard atmospheric pressure."
            },

            {
                question: "Which planet is closest to the Sun?",
                options: [
                    "Earth",
                    "Venus",
                    "Mars",
                    "Mercury"
                ],
                answer: 3,
                explanation:
                    "Mercury is the closest planet to the Sun."
            },

            {
                question: "What is the main source of energy for Earth's climate system?",
                options: [
                    "Moon",
                    "Sun",
                    "Wind",
                    "Ocean"
                ],
                answer: 1,
                explanation:
                    "The Sun supplies most of the energy that drives Earth's climate system."
            },

            {
                question: "Which blood cells help fight infections?",
                options: [
                    "Red blood cells",
                    "White blood cells",
                    "Platelets",
                    "Plasma"
                ],
                answer: 1,
                explanation:
                    "White blood cells are important components of the immune system."
            },

            {
                question: "Which process changes liquid water into water vapour?",
                options: [
                    "Condensation",
                    "Freezing",
                    "Evaporation",
                    "Melting"
                ],
                answer: 2,
                explanation:
                    "Evaporation is the process through which liquid water changes into water vapour."
            }

        ]

    }

};


/* =====================================================
   4. APPLICATION STATE
===================================================== */

let quizHistory = readStorage(
    STORAGE_KEYS.history,
    []
);

if (!Array.isArray(quizHistory)) {
    quizHistory = [];
}

let selectedCategory = null;

let activeQuestions = [];

let currentQuestionIndex = 0;

let userAnswers = [];

let timeRemaining = QUIZ_SETTINGS.duration;

let quizTimerInterval = null;

let quizEndTime = null;

let quizStarted = false;

let quizSubmitted = false;

let latestResult = null;

let toastTimeout = null;


/* =====================================================
   5. DOM HELPERS
===================================================== */

function getElement(id) {
    return document.getElementById(id);
}


function setText(id, value) {

    const element = getElement(id);

    if (element) {
        element.textContent = value;
    }

}


/* =====================================================
   6. LOCAL STORAGE HELPERS
===================================================== */

function readStorage(key, fallback) {

    try {

        const saved = localStorage.getItem(key);

        if (saved === null) {
            return fallback;
        }

        return JSON.parse(saved);

    } catch (error) {

        console.error(
            "Unable to read local storage:",
            error
        );

        return fallback;

    }

}


function saveStorage(key, value) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

        return true;

    } catch (error) {

        console.error(
            "Unable to save local storage:",
            error
        );

        showToast(
            "Unable to save data in this browser.",
            "error"
        );

        return false;

    }

}


/* =====================================================
   7. TOAST NOTIFICATION
===================================================== */

function showToast(message, type = "info") {

    const toast = getElement("toast");

    if (!toast) {
        return;
    }

    clearTimeout(toastTimeout);

    toast.textContent = message;

    toast.className = `toast show ${type}`;

    toastTimeout = setTimeout(() => {

        toast.className = "toast";

    }, 3500);

}


/* =====================================================
   8. MOBILE SIDEBAR
===================================================== */

function openSidebar() {

    const sidebar = getElement("sidebar");

    const overlay = getElement("sidebarOverlay");

    const menuToggle = getElement("menuToggle");

    sidebar.classList.add("open");

    overlay.hidden = false;

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

}


function closeSidebar() {

    const sidebar = getElement("sidebar");

    const overlay = getElement("sidebarOverlay");

    const menuToggle = getElement("menuToggle");

    sidebar.classList.remove("open");

    overlay.hidden = true;

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

}


/* =====================================================
   9. PAGE NAVIGATION
===================================================== */

const pageTitles = {

    dashboard: "Dashboard",

    categories: "Quiz Categories",

    instructions: "Quiz Instructions",

    quiz: "Quiz in Progress",

    results: "Quiz Results",

    review: "Answer Review",

    history: "Quiz History",

    leaderboard: "Leaderboard"

};


function switchView(viewName) {

    const section = getElement(
        `${viewName}Section`
    );

    if (!section) {
        return;
    }

    document.querySelectorAll(
        ".view-section"
    ).forEach(view => {

        view.hidden = true;

    });

    section.hidden = false;

    setText(
        "pageTitle",
        pageTitles[viewName] || "QuizNova"
    );

    document.querySelectorAll(
        ".menu-item"
    ).forEach(button => {

        const isActive =
            button.dataset.view === viewName;

        button.classList.toggle(
            "active",
            isActive
        );

    });

    closeSidebar();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (viewName === "dashboard") {
        renderDashboard();
    }

    if (viewName === "history") {
        renderHistory();
    }

    if (viewName === "leaderboard") {
        renderLeaderboard();
    }

}


/* =====================================================
   10. SAFE NAVIGATION

   Prevent leaving an active quiz accidentally.
===================================================== */

function navigateTo(viewName) {

    if (
        quizStarted &&
        !quizSubmitted &&
        viewName !== "quiz"
    ) {

        const leave = confirm(
            "A quiz is currently in progress.\n\n" +
            "Leaving will cancel this attempt.\n\n" +
            "Do you want to leave?"
        );

        if (!leave) {
            return;
        }

        stopQuizTimer();

        quizStarted = false;

        quizSubmitted = true;

    }

    switchView(viewName);

}


/* =====================================================
   11. THEME MANAGEMENT
===================================================== */

function applyTheme(theme) {

    const isDark = theme === "dark";

    document.body.classList.toggle(
        "dark-mode",
        isDark
    );

    const themeButton = getElement(
        "themeToggle"
    );

    themeButton.textContent = isDark
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";

    saveStorage(
        STORAGE_KEYS.theme,
        theme
    );

}


function toggleTheme() {

    const isDark = document.body.classList.contains(
        "dark-mode"
    );

    applyTheme(
        isDark ? "light" : "dark"
    );

}


/* =====================================================
   12. FORMAT HELPERS
===================================================== */

function formatDate(dateString) {

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
        return "Unknown Date";
    }

    return date.toLocaleDateString(
        "en-NG",
        {
            year: "numeric",
            month: "short",
            day: "numeric"
        }
    );

}


function formatTime(seconds) {

    const safeSeconds = Math.max(
        0,
        Math.floor(seconds)
    );

    const minutes = Math.floor(
        safeSeconds / 60
    );

    const remainingSeconds =
        safeSeconds % 60;

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(remainingSeconds).padStart(2, "0")
    );

}


function formatPercentage(value) {

    return `${Math.round(value)}%`;

}


/* =====================================================
   13. CREATE TABLE ELEMENTS
===================================================== */

function createCell(text) {

    const cell = document.createElement("td");

    cell.textContent = text;

    return cell;

}


function createStatusBadge(passed) {

    const badge = document.createElement("span");

    badge.className = passed
        ? "result-badge passed"
        : "result-badge failed";

    badge.textContent = passed
        ? "Passed"
        : "Failed";

    return badge;

}


function createEmptyTableRow(
    columnCount,
    message
) {

    const row = document.createElement("tr");

    const cell = document.createElement("td");

    cell.colSpan = columnCount;

    cell.textContent = message;

    cell.style.textAlign = "center";

    cell.style.padding = "30px";

    row.appendChild(cell);

    return row;

}


/* =====================================================
   14. DASHBOARD STATISTICS
===================================================== */

function renderDashboard() {

    const totalAttempts = quizHistory.length;

    const passedAttempts = quizHistory.filter(
        result => result.percentage >=
            QUIZ_SETTINGS.passMark
    ).length;

    const totalPercentage = quizHistory.reduce(
        (sum, result) => {

            return sum + Number(
                result.percentage || 0
            );

        },
        0
    );

    const averageScore = totalAttempts > 0
        ? totalPercentage / totalAttempts
        : 0;

    const bestScore = totalAttempts > 0
        ? Math.max(
            ...quizHistory.map(
                result => Number(
                    result.percentage || 0
                )
            )
        )
        : 0;

    setText(
        "totalAttempts",
        totalAttempts
    );

    setText(
        "averageScore",
        formatPercentage(averageScore)
    );

    setText(
        "bestScore",
        formatPercentage(bestScore)
    );

    setText(
        "quizzesPassed",
        passedAttempts
    );

    renderRecentResults();

}


/* =====================================================
   15. RECENT RESULTS
===================================================== */

function renderRecentResults() {

    const tbody = getElement(
        "recentResultsBody"
    );

    tbody.replaceChildren();

    const recentResults = [
        ...quizHistory
    ].sort((a, b) => {

        return new Date(b.date) -
            new Date(a.date);

    }).slice(0, 5);

    if (recentResults.length === 0) {

        tbody.appendChild(
            createEmptyTableRow(
                5,
                "No quiz attempts yet. Start a quiz!"
            )
        );

        return;

    }

    recentResults.forEach(result => {

        const row = document.createElement("tr");

        row.appendChild(
            createCell(result.categoryTitle)
        );

        row.appendChild(
            createCell(
                `${result.correct}/${result.total}`
            )
        );

        row.appendChild(
            createCell(
                formatPercentage(
                    result.percentage
                )
            )
        );

        const statusCell = document.createElement(
            "td"
        );

        statusCell.appendChild(
            createStatusBadge(
                result.percentage >=
                    QUIZ_SETTINGS.passMark
            )
        );

        row.appendChild(statusCell);

        row.appendChild(
            createCell(
                formatDate(result.date)
            )
        );

        tbody.appendChild(row);

    });

}


/* =====================================================
   16. SELECT QUIZ CATEGORY
===================================================== */

function selectCategory(categoryKey) {

    const category = quizDatabase[
        categoryKey
    ];

    if (!category) {

        showToast(
            "Quiz category not found.",
            "error"
        );

        return;

    }

    selectedCategory = categoryKey;

    setText(
        "instructionTitle",
        `${category.icon} ${category.title} Quiz`
    );

    setText(
        "instructionQuestions",
        category.questions.length
    );

    setText(
        "instructionTime",
        QUIZ_SETTINGS.duration / 60
    );

    switchView("instructions");

}


/* =====================================================
   17. START QUIZ
===================================================== */

function startQuiz() {

    if (!selectedCategory) {

        showToast(
            "Please select a quiz category.",
            "error"
        );

        return;

    }

    const category = quizDatabase[
        selectedCategory
    ];

    activeQuestions = category.questions.map(
        question => ({
            ...question,
            options: [...question.options]
        })
    );

    currentQuestionIndex = 0;

    userAnswers = new Array(
        activeQuestions.length
    ).fill(null);

    timeRemaining = QUIZ_SETTINGS.duration;

    quizStarted = true;

    quizSubmitted = false;

    latestResult = null;

    setText(
        "activeQuizTitle",
        `${category.icon} ${category.title} Quiz`
    );

    switchView("quiz");

    renderQuestion();

    startQuizTimer();

    showToast(
        "Quiz started. Good luck!",
        "success"
    );

}


/* =====================================================
   18. RENDER CURRENT QUESTION
===================================================== */

function renderQuestion() {

    if (
        !quizStarted ||
        quizSubmitted ||
        activeQuestions.length === 0
    ) {
        return;
    }

    const question = activeQuestions[
        currentQuestionIndex
    ];

    const total = activeQuestions.length;

    setText(
        "questionCounter",
        `Question ${currentQuestionIndex + 1} of ${total}`
    );

    const progress = (
        (currentQuestionIndex + 1) / total
    ) * 100;

    setText(
        "quizProgressText",
        formatPercentage(progress)
    );

    getElement(
        "quizProgressBar"
    ).style.width = `${progress}%`;

    setText(
        "questionText",
        question.question
    );

    renderOptions(question);

    renderQuestionNumbers();

    updateNavigationButtons();

}


/* =====================================================
   19. RENDER ANSWER OPTIONS
===================================================== */

function renderOptions(question) {

    const container = getElement(
        "optionsContainer"
    );

    container.replaceChildren();

    const letters = ["A", "B", "C", "D"];

    question.options.forEach(
        (optionText, optionIndex) => {

            const button = document.createElement(
                "button"
            );

            button.type = "button";

            button.className = "option-btn";

            const isSelected =
                userAnswers[currentQuestionIndex] ===
                optionIndex;

            if (isSelected) {

                button.classList.add(
                    "selected"
                );

            }

            button.setAttribute(
                "aria-pressed",
                String(isSelected)
            );

            const letter = document.createElement(
                "span"
            );

            letter.className = "option-letter";

            letter.textContent = letters[
                optionIndex
            ];

            const text = document.createElement(
                "span"
            );

            text.textContent = optionText;

            button.append(
                letter,
                text
            );

            button.addEventListener(
                "click",
                () => selectAnswer(optionIndex)
            );

            container.appendChild(button);

        }
    );

}


/* =====================================================
   20. SELECT ANSWER
===================================================== */

function selectAnswer(optionIndex) {

    if (
        !quizStarted ||
        quizSubmitted
    ) {
        return;
    }

    userAnswers[currentQuestionIndex] =
        optionIndex;

    renderQuestion();

}


/* =====================================================
   21. QUESTION NUMBER NAVIGATION
===================================================== */

function renderQuestionNumbers() {

    const container = getElement(
        "questionNumbers"
    );

    container.replaceChildren();

    activeQuestions.forEach(
        (question, index) => {

            const button = document.createElement(
                "button"
            );

            button.type = "button";

            button.className =
                "question-number-btn";

            button.textContent = index + 1;

            if (index === currentQuestionIndex) {

                button.classList.add(
                    "active"
                );

            } else if (
                userAnswers[index] !== null
            ) {

                button.classList.add(
                    "answered"
                );

            }

            button.setAttribute(
                "aria-label",
                `Go to question ${index + 1}`
            );

            button.addEventListener(
                "click",
                () => {

                    currentQuestionIndex = index;

                    renderQuestion();

                }
            );

            container.appendChild(button);

        }
    );

}


/* =====================================================
   22. UPDATE NAVIGATION BUTTONS
===================================================== */

function updateNavigationButtons() {

    const previousButton = getElement(
        "previousQuestion"
    );

    const nextButton = getElement(
        "nextQuestion"
    );

    previousButton.disabled =
        currentQuestionIndex === 0;

    nextButton.disabled =
        currentQuestionIndex ===
        activeQuestions.length - 1;

}


/* =====================================================
   23. PREVIOUS QUESTION
===================================================== */

function previousQuestion() {

    if (currentQuestionIndex > 0) {

        currentQuestionIndex--;

        renderQuestion();

    }

}


/* =====================================================
   24. NEXT QUESTION
===================================================== */

function nextQuestion() {

    if (
        currentQuestionIndex <
        activeQuestions.length - 1
    ) {

        currentQuestionIndex++;

        renderQuestion();

    }

}


/* =====================================================
   25. QUIZ TIMER
===================================================== */

function startQuizTimer() {

    stopQuizTimer();

    quizEndTime = Date.now() +
        QUIZ_SETTINGS.duration * 1000;

    updateQuizTimer();

    quizTimerInterval = setInterval(
        updateQuizTimer,
        250
    );

}


function updateQuizTimer() {

    if (
        !quizStarted ||
        quizSubmitted
    ) {
        return;
    }

    timeRemaining = Math.max(
        0,
        Math.ceil(
            (quizEndTime - Date.now()) / 1000
        )
    );

    setText(
        "quizTimer",
        formatTime(timeRemaining)
    );

    const timerBox = document.querySelector(
        ".timer-box"
    );

    timerBox.classList.remove(
        "warning",
        "danger"
    );

    if (timeRemaining <= 30) {

        timerBox.classList.add(
            "danger"
        );

    } else if (timeRemaining <= 60) {

        timerBox.classList.add(
            "warning"
        );

    }

    if (timeRemaining <= 0) {

        submitQuiz(true);

    }

}


function stopQuizTimer() {

    if (quizTimerInterval !== null) {

        clearInterval(quizTimerInterval);

        quizTimerInterval = null;

    }

}


/* =====================================================
   26. REQUEST QUIZ SUBMISSION
===================================================== */

function requestQuizSubmission() {

    if (
        !quizStarted ||
        quizSubmitted
    ) {
        return;
    }

    const unanswered = userAnswers.filter(
        answer => answer === null
    ).length;

    let message =
        "Are you sure you want to submit your quiz?";

    if (unanswered > 0) {

        message =
            `You have ${unanswered} unanswered ` +
            `question(s).\n\n` +
            "Unanswered questions will be marked incorrect.\n\n" +
            "Do you want to submit?";

    }

    if (!confirm(message)) {
        return;
    }

    submitQuiz(false);

}


/* =====================================================
   27. SUBMIT AND SCORE QUIZ
===================================================== */

function submitQuiz(isAutomatic = false) {

    if (
        !quizStarted ||
        quizSubmitted
    ) {
        return;
    }

    quizSubmitted = true;

    quizStarted = false;

    stopQuizTimer();

    const total = activeQuestions.length;

    let correct = 0;

    activeQuestions.forEach(
        (question, index) => {

            if (
                userAnswers[index] ===
                question.answer
            ) {

                correct++;

            }

        }
    );

    const incorrect = total - correct;

    const percentage = total > 0
        ? (correct / total) * 100
        : 0;

    const passed =
        percentage >= QUIZ_SETTINGS.passMark;

    const category = quizDatabase[
        selectedCategory
    ];

    const result = {

        id: (
            typeof crypto !== "undefined" &&
            typeof crypto.randomUUID === "function"
        )
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.random().toString(36).slice(2)}`,

        category: selectedCategory,

        categoryTitle: category.title,

        correct,

        incorrect,

        total,

        percentage,

        passed,

        date: new Date().toISOString(),

        automatic: isAutomatic,

        answers: [...userAnswers]

    };

    latestResult = result;

    quizHistory.unshift(result);

    saveStorage(
        STORAGE_KEYS.history,
        quizHistory
    );

    renderResults(result);

    switchView("results");

    showToast(
        isAutomatic
            ? "Time is up! Your quiz was submitted."
            : "Quiz submitted successfully!",
        isAutomatic ? "info" : "success"
    );

}


/* =====================================================
   28. RENDER QUIZ RESULTS
===================================================== */

function renderResults(result) {

    const passed = result.passed;

    setText(
        "resultsIcon",
        passed ? "🏆" : "📚"
    );

    setText(
        "resultsHeading",
        passed
            ? "Congratulations!"
            : "Keep Practising!"
    );

    setText(
        "resultsMessage",
        passed
            ? "Excellent effort! You passed the quiz."
            : "You can improve by reviewing your answers."
    );

    setText(
        "resultPercentage",
        formatPercentage(
            result.percentage
        )
    );

    setText(
        "correctAnswers",
        result.correct
    );

    setText(
        "incorrectAnswers",
        result.incorrect
    );

    setText(
        "totalQuestionsResult",
        result.total
    );

    const status = getElement(
        "resultStatus"
    );

    status.className = passed
        ? "result-status passed"
        : "result-status failed";

    status.textContent = passed
        ? "✓ PASSED"
        : "✕ FAILED";

    const scoreCircle = document.querySelector(
        ".score-circle"
    );

    scoreCircle.style.background =
        `conic-gradient(
            ${passed ? "#16A34A" : "#DC2626"}
            0% ${result.percentage}%,
            var(--primary-light)
            ${result.percentage}% 100%
        )`;

}


/* =====================================================
   29. REVIEW QUIZ ANSWERS
===================================================== */

function renderAnswerReview() {

    if (!latestResult) {

        showToast(
            "No quiz result available for review.",
            "error"
        );

        return;

    }

    const container = getElement(
        "answerReviewContainer"
    );

    container.replaceChildren();

    activeQuestions.forEach(
        (question, index) => {

            const selectedAnswer =
                latestResult.answers[index];

            const card = document.createElement(
                "div"
            );

            card.className = "review-card";

            const heading = document.createElement(
                "h3"
            );

            heading.textContent =
                `${index + 1}. ${question.question}`;

            card.appendChild(heading);

            question.options.forEach(
                (option, optionIndex) => {

                    const answer = document.createElement(
                        "div"
                    );

                    answer.className = "review-answer";

                    const isCorrect =
                        optionIndex === question.answer;

                    const isSelected =
                        optionIndex === selectedAnswer;

                    if (isCorrect) {

                        answer.classList.add(
                            "correct"
                        );

                    } else if (isSelected) {

                        answer.classList.add(
                            "incorrect"
                        );

                    }

                    const letter = String.fromCharCode(
                        65 + optionIndex
                    );

                    let label =
                        `${letter}. ${option}`;

                    if (isCorrect) {

                        label += " ✓ Correct Answer";

                    } else if (isSelected) {

                        label += " ✕ Your Answer";

                    }

                    answer.textContent = label;

                    card.appendChild(answer);

                }
            );

            if (selectedAnswer === null) {

                const unanswered = document.createElement(
                    "p"
                );

                unanswered.className =
                    "review-answer incorrect";

                unanswered.textContent =
                    "You did not answer this question.";

                card.appendChild(unanswered);

            }

            const explanation = document.createElement(
                "div"
            );

            explanation.className =
                "review-explanation";

            explanation.textContent =
                `Explanation: ${question.explanation}`;

            card.appendChild(explanation);

            container.appendChild(card);

        }
    );

    switchView("review");

}


/* =====================================================
   30. QUIZ HISTORY
===================================================== */

function renderHistory() {

    const tbody = getElement(
        "historyTableBody"
    );

    const emptyState = getElement(
        "historyEmpty"
    );

    tbody.replaceChildren();

    if (quizHistory.length === 0) {

        emptyState.hidden = false;

        return;

    }

    emptyState.hidden = true;

    const sortedHistory = [
        ...quizHistory
    ].sort((a, b) => {

        return new Date(b.date) -
            new Date(a.date);

    });

    sortedHistory.forEach(result => {

        const row = document.createElement("tr");

        row.appendChild(
            createCell(result.categoryTitle)
        );

        row.appendChild(
            createCell(
                `${result.correct}/${result.total}`
            )
        );

        row.appendChild(
            createCell(
                formatPercentage(
                    result.percentage
                )
            )
        );

        const statusCell = document.createElement(
            "td"
        );

        statusCell.appendChild(
            createStatusBadge(
                result.percentage >=
                    QUIZ_SETTINGS.passMark
            )
        );

        row.appendChild(statusCell);

        row.appendChild(
            createCell(
                formatDate(result.date)
            )
        );

        const actionCell = document.createElement(
            "td"
        );

        const deleteButton = document.createElement(
            "button"
        );

        deleteButton.type = "button";

        deleteButton.className =
            "btn btn-danger";

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener(
            "click",
            () => deleteHistoryItem(result.id)
        );

        actionCell.appendChild(deleteButton);

        row.appendChild(actionCell);

        tbody.appendChild(row);

    });

}


/* =====================================================
   31. DELETE HISTORY ITEM
===================================================== */

function deleteHistoryItem(id) {

    const confirmed = confirm(
        "Are you sure you want to delete this quiz result?"
    );

    if (!confirmed) {
        return;
    }

    quizHistory = quizHistory.filter(
        result => result.id !== id
    );

    saveStorage(
        STORAGE_KEYS.history,
        quizHistory
    );

    renderHistory();

    showToast(
        "Quiz result deleted.",
        "success"
    );

}


/* =====================================================
   32. CLEAR ALL HISTORY
===================================================== */

function clearQuizHistory() {

    if (quizHistory.length === 0) {

        showToast(
            "There is no quiz history to clear.",
            "info"
        );

        return;

    }

    const confirmed = confirm(
        "This will permanently delete all saved quiz results.\n\n" +
        "Do you want to continue?"
    );

    if (!confirmed) {
        return;
    }

    quizHistory = [];

    saveStorage(
        STORAGE_KEYS.history,
        quizHistory
    );

    renderHistory();

    showToast(
        "Quiz history cleared successfully.",
        "success"
    );

}


/* =====================================================
   33. LEADERBOARD
===================================================== */

function renderLeaderboard() {

    const tbody = getElement(
        "leaderboardTableBody"
    );

    const emptyState = getElement(
        "leaderboardEmpty"
    );

    tbody.replaceChildren();

    if (quizHistory.length === 0) {

        emptyState.hidden = false;

        return;

    }

    emptyState.hidden = true;

    const rankedResults = [
        ...quizHistory
    ].sort((a, b) => {

        if (b.percentage !== a.percentage) {

            return b.percentage -
                a.percentage;

        }

        return new Date(b.date) -
            new Date(a.date);

    }).slice(0, 10);

    rankedResults.forEach(
        (result, index) => {

            const row = document.createElement(
                "tr"
            );

            const rankCell = document.createElement(
                "td"
            );

            const badge = document.createElement(
                "span"
            );

            badge.className = "rank-badge";

            if (index === 0) {

                badge.classList.add("gold");

            } else if (index === 1) {

                badge.classList.add("silver");

            } else if (index === 2) {

                badge.classList.add("bronze");

            }

            badge.textContent = index + 1;

            rankCell.appendChild(badge);

            row.appendChild(rankCell);

            row.appendChild(
                createCell(
                    result.categoryTitle
                )
            );

            row.appendChild(
                createCell(
                    `${result.correct}/${result.total}`
                )
            );

            row.appendChild(
                createCell(
                    formatPercentage(
                        result.percentage
                    )
                )
            );

            row.appendChild(
                createCell(
                    formatDate(result.date)
                )
            );

            tbody.appendChild(row);

        }
    );

}


/* =====================================================
   34. EVENT LISTENERS
===================================================== */

function initializeEventListeners() {

    /* MOBILE MENU */

    getElement(
        "menuToggle"
    ).addEventListener(
        "click",
        () => {

            const sidebar = getElement(
                "sidebar"
            );

            if (sidebar.classList.contains("open")) {

                closeSidebar();

            } else {

                openSidebar();

            }

        }
    );


    getElement(
        "sidebarOverlay"
    ).addEventListener(
        "click",
        closeSidebar
    );


    /* SIDEBAR NAVIGATION */

    document.querySelectorAll(
        ".menu-item"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                navigateTo(
                    button.dataset.view
                );

            }
        );

    });


    /* QUICK NAVIGATION BUTTONS */

    document.querySelectorAll(
        "[data-open]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                navigateTo(
                    button.dataset.open
                );

            }
        );

    });


    /* CATEGORY BUTTONS */

    document.querySelectorAll(
        "[data-category]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                selectCategory(
                    button.dataset.category
                );

            }
        );

    });


    /* THEME TOGGLE */

    getElement(
        "themeToggle"
    ).addEventListener(
        "click",
        toggleTheme
    );


    /* BEGIN QUIZ */

    getElement(
        "beginQuizBtn"
    ).addEventListener(
        "click",
        startQuiz
    );


    /* QUESTION NAVIGATION */

    getElement(
        "previousQuestion"
    ).addEventListener(
        "click",
        previousQuestion
    );


    getElement(
        "nextQuestion"
    ).addEventListener(
        "click",
        nextQuestion
    );


    /* SUBMIT QUIZ */

    getElement(
        "submitQuizBtn"
    ).addEventListener(
        "click",
        requestQuizSubmission
    );


    /* REVIEW ANSWERS */

    getElement(
        "reviewAnswersBtn"
    ).addEventListener(
        "click",
        renderAnswerReview
    );


    /* BACK TO RESULTS */

    getElement(
        "backToResultsBtn"
    ).addEventListener(
        "click",
        () => {

            switchView("results");

        }
    );


    /* CLEAR HISTORY */

    getElement(
        "clearHistoryBtn"
    ).addEventListener(
        "click",
        clearQuizHistory
    );


    /* CLOSE SIDEBAR WITH ESCAPE */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeSidebar();

            }

        }
    );

}


/* =====================================================
   35. PREVENT ACCIDENTAL PAGE REFRESH
===================================================== */

window.addEventListener(
    "beforeunload",
    event => {

        if (
            quizStarted &&
            !quizSubmitted
        ) {

            event.preventDefault();

            event.returnValue = "";

        }

    }
);


/* =====================================================
   36. INITIALIZE APPLICATION
===================================================== */

function initializeApp() {

    const savedTheme = readStorage(
        STORAGE_KEYS.theme,
        "light"
    );

    applyTheme(
        savedTheme === "dark"
            ? "dark"
            : "light"
    );

    initializeEventListeners();

    renderDashboard();

    switchView("dashboard");

    console.log(
        "QuizNova initialized successfully."
    );

}


/* =====================================================
   37. START APPLICATION
===================================================== */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initializeApp
    );

} else {

    initializeApp();

}