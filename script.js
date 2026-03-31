const allQuestions = [
    { question: "HTML चा अर्थ काय आहे?", options: ["हायपर टेक्स्ट मार्कअप लँग्वेज", "हाय टेक मॉडर्न लँग्वेज", "होम टूल मार्कअप लँग्वेज", "हायपरलिंक अँड टेक्स्ट मार्कअप लँग्वेज"], answer: "हायपर टेक्स्ट मार्कअप लँग्वेज" },
    { question: "कोणती प्रोग्रामिंग लँग्वेज 'सर्व लँग्वेजची आई' म्हणून ओळखली जाते?", options: ["C", "असेम्ब्ली", "फोर्ट्रान", "कोबोल"], answer: "C" },
    { question: "CSS ची प्राथमिक कार्ये काय आहे?", options: ["वेब पेजेसचे स्टायलिंग", "इंटरएक्टिव्हिटी जोडणे", "डेटाबेस मॅनेजमेंट", "सर्व्हर-साइड स्क्रिप्टिंग"], answer: "वेब पेजेसचे स्टायलिंग" },
    { question: "JavaScript कोणत्या कंपनीने विकसित केले?", options: ["मायक्रोसॉफ्ट", "नेटस्केप", "गूगल", "अॅपल"], answer: "नेटस्केप" },
    { question: "API चा अर्थ काय आहे?", options: ["अॅप्लिकेशन प्रोग्रामिंग इंटरफेस", "अॅडव्हान्स्ड प्रोग्राम इंटिग्रेशन", "ऑटोमेटेड प्रोसेस इंटरएक्शन", "अॅप्लिकेशन प्रोसेस इंटरफेस"], answer: "अॅप्लिकेशन प्रोग्रामिंग इंटरफेस" },
    { question: "कोणता HTTP स्टेटस कोड 'नॉट फाउंड' दर्शवतो?", options: ["200", "404", "500", "301"], answer: "404" },
    { question: "Git चा मुख्य उद्देश काय आहे?", options: ["व्हर्जन कंट्रोल", "टेक्स्ट एडिटिंग", "वेब ब्राउझिंग", "डेटाबेस क्वेरींग"], answer: "व्हर्जन कंट्रोल" },
    { question: "यापैकी कोणते प्रोग्रामिंग पॅराडाइम नाही?", options: ["ऑब्जेक्ट-ओरिएंटेड", "फंक्शनल", "प्रोसिज्युरल", "अल्गोरिदमिक"], answer: "अल्गोरिदमिक" },
    { question: "SQL चा अर्थ काय आहे?", options: ["स्ट्रक्चर्ड क्वेरी लँग्वेज", "सिंपल क्वेरी लँग्वेज", "स्टँडर्ड क्वेरी लॉजिक", "सिस्टम क्वेरी लँग्वेज"], answer: "स्ट्रक्चर्ड क्वेरी लँग्वेज" },
    { question: "सुरक्षित वेब ब्राउझिंगसाठी कोणते प्रोटोकॉल वापरले जाते?", options: ["HTTP", "HTTPS", "FTP", "SMTP"], answer: "HTTPS" },
    { question: "क्लाउड कॉम्प्युटिंगचा मुख्य फायदा काय आहे?", options: ["स्केलेबिलिटी", "फक्त लोकल स्टोरेज", "फिक्स्ड रिसोर्सेस", "इंटरनेटची गरज नाही"], answer: "स्केलेबिलिटी" },
    { question: "कोणती डेटा स्ट्रक्चर LIFO तत्त्वाचे पालन करते?", options: ["क्यू", "स्टॅक", "अॅरे", "लिंक्ड लिस्ट"], answer: "स्टॅक" },
    { question: "IDE चा अर्थ काय आहे?", options: ["इंटिग्रेटेड डेव्हलपमेंट एन्व्हायर्नमेंट", "इंटरएक्टिव्ह डिझाइन एडिटर", "इंटरनेट डेटा एक्स्चेंज", "इंटर्नल डेटाबेस इंजिन"], answer: "इंटिग्रेटेड डेव्हलपमेंट एन्व्हायर्नमेंट" },
    { question: "यापैकी कोणते NoSQL डेटाबेस आहे?", options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"], answer: "MongoDB" },
    { question: "फायरवॉलचा उद्देश काय आहे?", options: ["नेटवर्क सिक्युरिटी", "डेटा एनक्रिप्शन", "फाइल कॉम्प्रेशन", "मेमरी मॅनेजमेंट"], answer: "नेटवर्क सिक्युरिटी" },
    { question: "बहुतेक प्रोग्रामिंग लँग्वेजमध्ये सॉर्टिंगसाठी कोणता अल्गोरिदम वापरला जातो?", options: ["बबल सॉर्ट", "क्विक सॉर्ट", "मर्ज सॉर्ट", "सर्व वरील"], answer: "सर्व वरील" },
    { question: "DNS चा अर्थ काय आहे?", options: ["डोमेन नेम सिस्टम", "डायनॅमिक नेटवर्क सर्व्हिस", "डेटा नेटवर्क सर्व्हर", "डिजिटल नेम सर्व्हिस"], answer: "डोमेन नेम सिस्टम" },
    { question: "वेब डेव्हलपमेंटसाठी प्रामुख्याने कोणती प्रोग्रामिंग लँग्वेज वापरली जाते?", options: ["पायथन", "JavaScript", "C++", "जावा"], answer: "JavaScript" },
    { question: "डेसीमल 10 चे बायनरी रिप्रेझेंटेशन काय आहे?", options: ["1010", "1001", "1100", "1110"], answer: "1010" },
    { question: "यापैकी कोणते वेब ब्राउझर नाही?", options: ["क्रोम", "फायरफॉक्स", "सफारी", "फोटोशॉप"], answer: "फोटोशॉप" },
    { question: "OOP चा अर्थ काय आहे?", options: ["ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग", "ऑनलाइन ऑपरेटिंग प्लॅटफॉर्म", "ओपन ऑब्जेक्ट प्रोटोकॉल", "ऑप्टिमाइज्ड आउटपुट प्रोसेस"], answer: "ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग" },
    { question: "GitHub कोणत्या कंपनीच्या मालकीचे आहे?", options: ["गूगल", "मायक्रोसॉफ्ट", "अॅमेझॉन", "अॅपल"], answer: "मायक्रोसॉफ्ट" },
    { question: "VPN चा उद्देश काय आहे?", options: ["सिक्युरिटीसाठी व्हर्च्युअल प्रायव्हेट नेटवर्क", "व्हिडिओ प्रोसेसिंग नोड", "व्हर्च्युअल प्रोग्रामिंग नेटवर्क", "व्हिज्युअल प्रोग्रामिंग नोड"], answer: "सिक्युरिटीसाठी व्हर्च्युअल प्रायव्हेट नेटवर्क" },
    { question: "यापैकी कोणते फ्रंटएंड फ्रेमवर्क आहे?", options: ["रिएक्ट", "डjango", "फ्लास्क", "एक्सप्रेस"], answer: "रिएक्ट" },
    { question: "CPU चा अर्थ काय आहे?", options: ["सेंट्रल प्रोसेसिंग युनिट", "कंप्यूटर प्रोसेसिंग युनिट", "सेंट्रल प्रोग्राम युनिट", "कंप्यूटर प्रोग्राम युनिट"], answer: "सेंट्रल प्रोसेसिंग युनिट" },
    { question: "ईमेल ट्रान्समिशनसाठी कोणते प्रोटोकॉल वापरले जाते?", options: ["HTTP", "FTP", "SMTP", "TCP"], answer: "SMTP" },
    { question: "ऑपरेटिंग सिस्टमचा मुख्य उद्देश काय आहे?", options: ["हार्डवेअर आणि सॉफ्टवेअर रिसोर्सेस मॅनेज करणे", "डॉक्युमेंट्स तयार करणे", "इंटरनेट ब्राउझ करणे", "गेम्स प्ले करणे"], answer: "हार्डवेअर आणि सॉफ्टवेअर रिसोर्सेस मॅनेज करणे" },
    { question: "यापैकी कोणते व्हर्जन कंट्रोल सिस्टम आहे?", options: ["Git", "डॉकर", "कुबर्नेट्स", "जेनकिंस"], answer: "Git" },
    { question: "RAM चा अर्थ काय आहे?", options: ["रँडम अॅक्सेस मेमरी", "रीड अँड मॉडिफाय", "रॅपिड अॅप्लिकेशन मॉड्यूल", "रिमोट अॅक्सेस मॉड्यूल"], answer: "रँडम अॅक्सेस मेमरी" },
    { question: "डेटा सायन्समध्ये कोणती प्रोग्रामिंग लँग्वेज प्रसिद्ध आहे?", options: ["जावा", "पायथन", "C#", "रुबी"], answer: "पायथन" },
    { question: "कंपायलरचा उद्देश काय आहे?", options: ["हाय-लेव्हल कोडला मशीन कोडमध्ये रूपांतरित करणे", "कोड लाइन बाय लाइन एक्झिक्यूट करणे", "प्रोग्राम्स डीबग करणे", "डेटाबेसेस मॅनेज करणे"], answer: "हाय-लेव्हल कोडला मशीन कोडमध्ये रूपांतरित करणे" },
    { question: "यापैकी कोणते डेटाबेस मॅनेजमेंट सिस्टम नाही?", options: ["MySQL", "MongoDB", "PostgreSQL", "अपाचे"], answer: "अपाचे" },
    { question: "URL चा अर्थ काय आहे?", options: ["युनिफॉर्म रिसोर्स लोकेटर", "युनिव्हर्सल रिसोर्स लिंक", "युनिफाइड रिसोर्स लोकेटर", "युनिफॉर्म रिसोर्स लिंक"], answer: "युनिफॉर्म रिसोर्स लोकेटर" },
    { question: "Windows ऑपरेटिंग सिस्टम कोणत्या कंपनीने विकसित केले?", options: ["अॅपल", "गूगल", "मायक्रोसॉफ्ट", "लिनक्स"], answer: "मायक्रोसॉफ्ट" },
    { question: "एनक्रिप्शनचा उद्देश काय आहे?", options: ["डेटा ट्रान्समिशन सुरक्षित करणे", "प्रोसेसिंग वेगवान करणे", "फायली कॉम्प्रेस करणे", "टेक्स्ट फॉरमॅट करणे"], answer: "डेटा ट्रान्समिशन सुरक्षित करणे" },
    { question: "यापैकी कोणते बॅकएंड फ्रेमवर्क आहे?", options: ["अँग्युलर", "Vue.js", "Node.js", "रिएक्ट"], answer: "Node.js" },
    { question: "IP अॅड्रेसमध्ये IP चा अर्थ काय आहे?", options: ["इंटरनेट प्रोटोकॉल", "इंटर्नल प्रोटोकॉल", "इंटरनेट प्रोव्हायडर", "इंटर्नल प्रोव्हायडर"], answer: "इंटरनेट प्रोटोकॉल" },
    { question: "सॉर्टेड अॅरेमध्ये सर्चिंगसाठी कोणता अल्गोरिदम वापरला जातो?", options: ["लिनियर सर्च", "बायनरी सर्च", "बबल सॉर्ट", "क्विक सॉर्ट"], answer: "बायनरी सर्च" },
    { question: "कंप्यूटरचा मुख्य घटक जो इन्स्ट्रक्शन्स एक्झिक्यूट करतो तो कोणता आहे?", options: ["हार्ड ड्राइव्ह", "CPU", "RAM", "मॉनिटर"], answer: "CPU" },
    { question: "यापैकी कोणती मार्कअप लँग्वेज आहे?", options: ["पायथन", "HTML", "जावा", "C++"], answer: "HTML" },
    { question: "SaaS चा अर्थ काय आहे?", options: ["सॉफ्टवेअर अस अ सर्व्हिस", "सिस्टम अस अ सर्व्हिस", "सिक्युरिटी अस अ सर्व्हिस", "स्टोरेज अस अ सर्व्हिस"], answer: "सॉफ्टवेअर अस अ सर्व्हिस" }
];

// Function to get random questions
function getRandomQuestions(num) {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

// Select 15 random questions for the quiz
let questions = getRandomQuestions(15);

// State variables
let currentIdx = 0;
let score = 0;
let timer;
let timeLeft = 10;
let userAnswers = [];

// DOM Elements
const screens = document.querySelectorAll('.screen');
const nextBtn = document.getElementById('next-btn');
const optionsContainer = document.getElementById('options-container');

// Sound Effects (Optional - placeholders)
const correctSound = new Audio('https://actions.google.com/sounds/v1/cartoon/clink.ogg');
const wrongSound = new Audio('https://actions.google.com/sounds/v1/cartoon/boing.ogg');

// --- Initialization ---
function showScreen(id) {
    screens.forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// --- Quiz Logic ---
function startQuiz() {
    questions = getRandomQuestions(15); // Regenerate questions each time
    currentIdx = 0;
    score = 0;
    userAnswers = [];
    showScreen('quiz-screen');
    loadQuestion();
}

function loadQuestion() {
    resetState();
    const q = questions[currentIdx];
    document.getElementById('question-text').innerText = q.question;
    document.getElementById('current-q').innerText = currentIdx + 1;
    document.getElementById('bar-fill').style.width = `${((currentIdx + 1) / questions.length) * 100}%`;

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.classList.add('option-btn');
        btn.onclick = () => selectOption(btn, opt);
        optionsContainer.appendChild(btn);
    });

    startTimer();
}

function resetState() {
    clearInterval(timer);
    timeLeft = 10;
    document.getElementById('time-left').innerText = timeLeft;
    nextBtn.disabled = true;
    optionsContainer.innerHTML = '';
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time-left').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleNext(); // Auto move if time runs out
        }
    }, 1000);
}

function selectOption(btn, choice) {
    // UI highlight
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    
    // Store answer
    userAnswers[currentIdx] = choice;
    nextBtn.disabled = false;
}

function handleNext() {
    const currentQ = questions[currentIdx];
    const userChoice = userAnswers[currentIdx];

    if (userChoice === currentQ.answer) {
        score++;
        correctSound.play();
    } else {
        wrongSound.play();
    }

    currentIdx++;
    if (currentIdx < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    showScreen('result-screen');
    document.getElementById('final-score').innerText = score;
    document.getElementById('stat-c').innerText = score;
    document.getElementById('stat-w').innerText = questions.length - score;

    let msg = "";
    if (score <= 7) msg = "सुधारणा आवश्यक 😅";
    else if (score <= 12) msg = "चांगले काम 👍";
    else msg = "उत्कृष्ट 🔥";
    document.getElementById('score-message').innerText = msg;
}

function showReview() {
    showScreen('review-screen');
    const list = document.getElementById('review-list');
    list.innerHTML = '';

    questions.forEach((q, i) => {
        const div = document.createElement('div');
        div.className = 'review-item';
        const isCorrect = userAnswers[i] === q.answer;
        div.innerHTML = `
            <p><strong>प्र${i+1}: ${q.question}</strong></p>
            <p class="${isCorrect ? 'text-correct' : 'text-wrong'}">तुमचे उत्तर: ${userAnswers[i] || 'वेळ संपली'}</p>
            <p class="text-correct">बरोबर उत्तर: ${q.answer}</p>
        `;
        list.appendChild(div);
    });
}

// Event Listeners
document.getElementById('start-btn').onclick = startQuiz;
document.getElementById('next-btn').onclick = handleNext;
document.getElementById('restart-btn').onclick = startQuiz;
document.getElementById('review-btn').onclick = showReview;
document.getElementById('back-to-result').onclick = () => showScreen('result-screen');

// Example of how to render options (minimalist style)
function displayOptions(options) {
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option-item';
        btn.innerText = opt;
        btn.onclick = () => selectOption(btn);
        container.appendChild(btn);
    });
}