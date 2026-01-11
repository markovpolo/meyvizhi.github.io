// ===================================
// ACCESSIBILITY-FIRST JAVASCRIPT
// Features: TTS, Braille, Sign Language,
// Multi-language, Navigation, Keyboard Support
// ===================================

// ===================================
// TRANSLATIONS
// ===================================

const translations = {
    en: {
        name: "Meyvizhi",
        role: "PhD Researcher in Spatial Statistics & Health Inequalities",
        "home-title": "Welcome",
        "bio-1": "Hello! I'm <strong>Meyvizhi</strong> - a 1st-year PhD candidate in the School of Mathematics and Statistics at the University of Glasgow. I am jointly supervised by Dr. Craig Anderson, Dr. Vanessa McNealis, and Dr. Daniela Castro-Camilo.",
        "bio-2": "With a focus on disease risk mapping, I am working on spatial models to help answer important questions on health outcome inequalities. With previous experience in infectious disease modelling, I now work on chronic diseases risks.",
        "bio-3": "My academic background includes a Bachelors in Statistics and Mathematics, which allowed me to explore both theory and applications.",
        "bio-4": "Passionate about science outreach, I also help coordinate talks and workshops as a co-organizer of the R-Ladies Bangalore chapter. Caricature-ising technical research into digestible cartoons is another way I attempt to engage with science outreach.",
        "bio-5": "I am always open to hearing about cool science, books (A Man Called Ove is a good read) and food recommendations (Masala Dosas)!",
        "research-title": "Research Papers",
        "teaching-title": "Teaching",
        "academic-resources-title": "Academic Resources",
        "writing-resources-title": "Writing Resources",
        "design-resources-title": "Design Resources",
        "portfolio-title": "Design Portfolio",
        "pop-culture-title": "Pop Culture Corner",
        "foodie-title": "Foodie Corner",
        "collab-title": "Academic Collaborations",
        "cv-title": "Curriculum Vitae",
        "help-title": "Need Help?",
        "coming-soon": "Exciting research coming soon! Check back for updates on spatial statistics and health inequality studies.",
        "teaching-intro": "Information about courses, tutorials, and teaching materials will be available here.",
        "academic-resources-intro": "Curated academic resources, research tools, and scholarly materials coming soon.",
        "writing-resources-intro": "Helpful guides for academic writing, research communication, and storytelling.",
        "design-resources-intro": "Design tools, visualization guides, and creative resources for researchers.",
        "portfolio-intro": "Science communication cartoons, infographics, and visual storytelling projects.",
        "pop-culture-intro": "Book recommendations, cultural insights, and things I'm currently enjoying!",
        "foodie-intro": "Food recommendations, favorite spots, and culinary adventures!",
        "collab-intro": "Interested in collaborating? Let's work together on spatial statistics, health equity research, or science communication!",
        "help-intro": "This website is designed to be as accessible as possible. If you're experiencing any difficulties, here are some resources:",
        home: "Home",
        research: "Research Papers",
        teaching: "Teaching",
        academic: "Academic Resources",
        writing: "Writing Resources",
        "design-res": "Design Resources",
        portfolio: "Design Portfolio",
        pop: "Pop Culture",
        foodie: "Foodie Corner",
        collab: "Academic Collabs",
        cv: "Fancy Schmancy CV",
        help: "Need Help?"
    },
    ta: {
        name: "மேய்விழி",
        role: "இடஞ்சார் புள்ளியியல் மற்றும் சுகாதார சமத்துவமின்மை குறித்த முனைவர் பட்ட ஆய்வாளர்",
        "home-title": "வரவேற்கிறோம்",
        home: "முகப்பு",
        research: "ஆராய்ச்சிக் கட்டுரைகள்",
        teaching: "கற்பித்தல்",
        help: "உதவி தேவையா?"
    },
    hi: {
        name: "मेयविझी",
        role: "स्थानिक सांख्यिकी और स्वास्थ्य असमानताओं में पीएचडी शोधकर्ता",
        "home-title": "स्वागत है",
        home: "होम",
        research: "शोध पत्र",
        teaching: "शिक्षण",
        help: "मदद चाहिए?"
    },
    kn: {
        name: "ಮೇಯ್ವಿಝಿ",
        role: "ಪ್ರಾದೇಶಿক ಅಂಕಿಅಂಶಗಳು ಮತ್ತು ಆರೋಗ್ಯ ಅಸಮಾನತೆಗಳಲ್ಲಿ ಪಿಎಚ್‌ಡಿ ಸಂಶೋಧಕ",
        "home-title": "ಸ್ವಾಗತ",
        home: "ಮುಖಪುಟ",
        research: "ಸಂಶೋಧನಾ ಪತ್ರಿಕೆಗಳು",
        help: "ಸಹಾಯ ಬೇಕೇ?"
    },
    es: {
        name: "Meyvizhi",
        role: "Investigadora de Doctorado en Estadística Espacial y Desigualdades en Salud",
        "home-title": "Bienvenida",
        home: "Inicio",
        research: "Artículos de Investigación",
        help: "¿Necesitas Ayuda?"
    },
    fr: {
        name: "Meyvizhi",
        role: "Chercheuse Doctorale en Statistiques Spatiales et Inégalités de Santé",
        "home-title": "Bienvenue",
        home: "Accueil",
        research: "Articles de Recherche",
        help: "Besoin d'Aide?"
    }
};

// ===================================
// STATE MANAGEMENT
// ===================================

let currentLanguage = 'en';
let isReadAloudActive = false;
let textSizeLevel = 0; // -1, 0, 1
let speechSynthesis = window.speechSynthesis;
let currentUtterance = null;

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeAccessibilityFeatures();
    initializeKeyboardNavigation();
    initializeMobileMenu();
    loadUserPreferences();
    announcePageLoad();
});

// ===================================
// NAVIGATION
// ===================================

function initializeNavigation() {
    // Handle hash navigation
    const hash = window.location.hash;
    if (hash) {
        showSection(hash.substring(1));
    } else {
        showSection('home');
    }
    
    // Add click listeners to nav links
    document.querySelectorAll('nav a, a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const sectionId = href.substring(1);
                showSection(sectionId);
                window.history.pushState(null, null, href);
                
                // Update active state
                updateActiveNavLink(href);
                
                // Close mobile menu if open
                closeMobileMenu();
                
                // Announce to screen readers
                announceToScreenReader(`Navigating to ${this.textContent}`);
            }
        });
    });
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const hash = window.location.hash;
        if (hash) {
            showSection(hash.substring(1));
            updateActiveNavLink(hash);
        } else {
            showSection('home');
            updateActiveNavLink('#home');
        }
    });
    
    // Set initial active state
    updateActiveNavLink(window.location.hash || '#home');
}

function updateActiveNavLink(hash) {
    // Remove active class from all links
    document.querySelectorAll('.sidebar-nav-list a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current link
    const activeLink = document.querySelector(`.sidebar-nav-list a[href="${hash}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Focus on the section heading for screen readers
        const heading = targetSection.querySelector('h2');
        if (heading) {
            heading.setAttribute('tabindex', '-1');
            heading.focus();
            setTimeout(() => heading.removeAttribute('tabindex'), 1000);
        }
    }
}

// ===================================
// ACCESSIBILITY FEATURES
// ===================================

function initializeAccessibilityFeatures() {
    // High Contrast Toggle
    document.getElementById('high-contrast-toggle').addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
        this.classList.toggle('active');
        const isActive = document.body.classList.contains('high-contrast');
        announceToScreenReader(isActive ? 'High contrast mode enabled' : 'High contrast mode disabled');
        savePreference('highContrast', isActive);
    });
    
    // Dyslexia Font Toggle
    document.getElementById('dyslexia-toggle').addEventListener('click', function() {
        document.body.classList.toggle('dyslexia-font');
        this.classList.toggle('active');
        const isActive = document.body.classList.contains('dyslexia-font');
        announceToScreenReader(isActive ? 'Dyslexia-friendly font enabled' : 'Standard font enabled');
        savePreference('dyslexiaFont', isActive);
    });
    
    // Text Size Increase
    document.getElementById('text-size-increase').addEventListener('click', function() {
        if (textSizeLevel < 1) {
            textSizeLevel++;
            updateTextSize();
            announceToScreenReader('Text size increased');
        }
    });
    
    // Text Size Decrease
    document.getElementById('text-size-decrease').addEventListener('click', function() {
        if (textSizeLevel > -1) {
            textSizeLevel--;
            updateTextSize();
            announceToScreenReader('Text size decreased');
        }
    });
    
    // Read Aloud Toggle
    document.getElementById('read-aloud-toggle').addEventListener('click', function() {
        isReadAloudActive = !isReadAloudActive;
        this.classList.toggle('active');
        
        if (isReadAloudActive) {
            announceToScreenReader('Text-to-speech enabled. Hover over text to hear it read aloud.');
            enableReadAloud();
        } else {
            announceToScreenReader('Text-to-speech disabled');
            disableReadAloud();
            stopSpeaking();
        }
    });
    
    // Sign Language Toggle
    document.getElementById('sign-language-toggle').addEventListener('click', function() {
        const interpreter = document.getElementById('sign-language-interpreter');
        interpreter.classList.toggle('active');
        this.classList.toggle('active');
        const isActive = interpreter.classList.contains('active');
        announceToScreenReader(isActive ? 'Sign language interpreter shown' : 'Sign language interpreter hidden');
    });
    
    // Close Sign Interpreter
    document.getElementById('close-sign-interpreter').addEventListener('click', function() {
        const interpreter = document.getElementById('sign-language-interpreter');
        const toggleBtn = document.getElementById('sign-language-toggle');
        interpreter.classList.remove('active');
        toggleBtn.classList.remove('active');
        announceToScreenReader('Sign language interpreter closed');
    });
    
    // Braille Mode Toggle
    document.getElementById('braille-mode-toggle').addEventListener('click', function() {
        const brailleDisplay = document.getElementById('braille-display');
        brailleDisplay.classList.toggle('active');
        this.classList.toggle('active');
        const isActive = brailleDisplay.classList.contains('active');
        
        if (isActive) {
            announceToScreenReader('Braille display mode enabled. Hover over text to see braille representation.');
            enableBrailleMode();
        } else {
            announceToScreenReader('Braille display mode disabled');
            disableBrailleMode();
        }
    });
    
    // Language Selector
    document.getElementById('language-select').addEventListener('change', function() {
        currentLanguage = this.value;
        updateLanguage();
        announceToScreenReader(`Language changed to ${this.options[this.selectedIndex].text}`);
        savePreference('language', currentLanguage);
    });
}

// ===================================
// MOBILE MENU
// ===================================

function initializeMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar-nav');
    
    if (!menuToggle || !sidebar) return;
    
    menuToggle.addEventListener('click', function() {
        const isOpen = sidebar.classList.contains('mobile-open');
        
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        const isClickInsideSidebar = sidebar.contains(e.target);
        const isClickOnToggle = menuToggle.contains(e.target);
        
        if (!isClickInsideSidebar && !isClickOnToggle && sidebar.classList.contains('mobile-open')) {
            closeMobileMenu();
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar.classList.contains('mobile-open')) {
            closeMobileMenu();
        }
    });
}

function openMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar-nav');
    
    sidebar.classList.add('mobile-open');
    menuToggle.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    announceToScreenReader('Menu opened');
}

function closeMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar-nav');
    
    sidebar.classList.remove('mobile-open');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
}

// ===================================
// TEXT SIZE MANAGEMENT
// ===================================

function updateTextSize() {
    document.body.classList.remove('large-text', 'larger-text');
    
    if (textSizeLevel === 1) {
        document.body.classList.add('large-text');
    } else if (textSizeLevel === 2) {
        document.body.classList.add('larger-text');
    }
    
    savePreference('textSize', textSizeLevel);
}

// ===================================
// TEXT-TO-SPEECH
// ===================================

function enableReadAloud() {
    document.querySelectorAll('p, h1, h2, h3, h4, li, a').forEach(element => {
        element.addEventListener('mouseenter', speakElement);
    });
}

function disableReadAloud() {
    document.querySelectorAll('p, h1, h2, h3, h4, li, a').forEach(element => {
        element.removeEventListener('mouseenter', speakElement);
    });
}

function speakElement(e) {
    if (!isReadAloudActive) return;
    
    const text = e.target.textContent.trim();
    if (text) {
        stopSpeaking();
        currentUtterance = new SpeechSynthesisUtterance(text);
        currentUtterance.rate = 0.9; // Slightly slower for better comprehension
        currentUtterance.pitch = 1;
        currentUtterance.volume = 1;
        
        // Try to use a language-specific voice
        const voices = speechSynthesis.getVoices();
        const langVoice = voices.find(voice => voice.lang.startsWith(currentLanguage));
        if (langVoice) {
            currentUtterance.voice = langVoice;
        }
        
        speechSynthesis.speak(currentUtterance);
    }
}

function stopSpeaking() {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
}

// ===================================
// BRAILLE MODE
// ===================================

const brailleMap = {
    'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑', 'f': '⠋', 'g': '⠛', 'h': '⠓',
    'i': '⠊', 'j': '⠚', 'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'o': '⠕', 'p': '⠏',
    'q': '⠟', 'r': '⠗', 's': '⠎', 't': '⠞', 'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭',
    'y': '⠽', 'z': '⠵', ' ': '⠀', '.': '⠲', ',': '⠂', '!': '⠖', '?': '⠦', '-': '⠤'
};

function textToBraille(text) {
    return text.toLowerCase().split('').map(char => brailleMap[char] || char).join('');
}

function enableBrailleMode() {
    document.querySelectorAll('p, h1, h2, h3, h4, li, a').forEach(element => {
        element.addEventListener('mouseenter', showBraille);
    });
}

function disableBrailleMode() {
    document.querySelectorAll('p, h1, h2, h3, h4, li, a').forEach(element => {
        element.removeEventListener('mouseenter', showBraille);
    });
}

function showBraille(e) {
    const text = e.target.textContent.trim().substring(0, 100); // Limit length
    const brailleText = textToBraille(text);
    const brailleDisplay = document.querySelector('.braille-text');
    brailleDisplay.textContent = brailleText;
}

// ===================================
// LANGUAGE SWITCHING
// ===================================

function updateLanguage() {
    const lang = translations[currentLanguage] || translations['en'];
    
    // Update all elements with data-lang attributes
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (lang[key]) {
            element.innerHTML = lang[key];
        }
    });
    
    // Update navigation
    document.querySelectorAll('[data-nav]').forEach(element => {
        const key = element.getAttribute('data-nav');
        if (lang[key]) {
            element.textContent = lang[key];
        }
    });
    
    // Update document language attribute
    document.documentElement.setAttribute('lang', currentLanguage);
}

// ===================================
// KEYBOARD NAVIGATION
// ===================================

function initializeKeyboardNavigation() {
    // Escape key to close modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close sign language interpreter
            const interpreter = document.getElementById('sign-language-interpreter');
            if (interpreter.classList.contains('active')) {
                interpreter.classList.remove('active');
                document.getElementById('sign-language-toggle').classList.remove('active');
                announceToScreenReader('Sign language interpreter closed');
            }
            
            // Stop speech
            if (isReadAloudActive) {
                stopSpeaking();
            }
        }
    });
    
    // Tab trap for accessibility toolbar
    const toolbar = document.querySelector('.accessibility-toolbar');
    const focusableElements = toolbar.querySelectorAll('button, select');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    toolbar.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// ===================================
// SCREEN READER ANNOUNCEMENTS
// ===================================

function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.classList.add('sr-only');
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

function announcePageLoad() {
    setTimeout(() => {
        announceToScreenReader('Welcome to Meyvizhi\'s accessible academic portfolio. Use the accessibility toolbar at the top to customize your experience.');
    }, 1000);
}

// Add screen reader only class to CSS
const style = document.createElement('style');
style.textContent = `
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
`;
document.head.appendChild(style);

// ===================================
// USER PREFERENCES (LocalStorage)
// ===================================

function savePreference(key, value) {
    try {
        localStorage.setItem(`accessibility_${key}`, JSON.stringify(value));
    } catch (e) {
        console.log('LocalStorage not available');
    }
}

function loadUserPreferences() {
    try {
        // Load high contrast
        const highContrast = JSON.parse(localStorage.getItem('accessibility_highContrast'));
        if (highContrast) {
            document.body.classList.add('high-contrast');
            document.getElementById('high-contrast-toggle').classList.add('active');
        }
        
        // Load dyslexia font
        const dyslexiaFont = JSON.parse(localStorage.getItem('accessibility_dyslexiaFont'));
        if (dyslexiaFont) {
            document.body.classList.add('dyslexia-font');
            document.getElementById('dyslexia-toggle').classList.add('active');
        }
        
        // Load text size
        const textSize = JSON.parse(localStorage.getItem('accessibility_textSize'));
        if (textSize !== null) {
            textSizeLevel = textSize;
            updateTextSize();
        }
        
        // Load language
        const language = JSON.parse(localStorage.getItem('accessibility_language'));
        if (language) {
            currentLanguage = language;
            document.getElementById('language-select').value = language;
            updateLanguage();
        }
    } catch (e) {
        console.log('Could not load preferences');
    }
}

// ===================================
// PERFORMANCE OPTIMIZATIONS
// ===================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===================================
// ANALYTICS (Privacy-respecting)
// ===================================

// Track accessibility feature usage (anonymously)
function trackAccessibilityUsage(feature) {
    // This is a placeholder - implement privacy-respecting analytics if needed
    console.log(`Accessibility feature used: ${feature}`);
}

// ===================================
// SERVICE WORKER (for offline support)
// ===================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you have a service worker file
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}

// ===================================
// EXPORT FOR TESTING
// ===================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showSection,
        updateLanguage,
        textToBraille,
        announceToScreenReader
    };
}
