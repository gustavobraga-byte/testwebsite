// Navigation scroll effect
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const languageSelect = document.getElementById('language-select');

// Scroll effect for navbar
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Language switching - redirects to appropriate language file
function changeLanguage(lang) {
    // Map language codes to file names
    const langMap = {
        'en': 'index.html',
        'fr': 'index-fr.html',
        'pt': 'index-pt.html'
    };
    
    const targetFile = langMap[lang] || 'index.html';
    
    // If we're already on the correct page, do nothing
    if (window.location.pathname.endsWith(targetFile)) {
        return;
    }
    
    // Redirect to the language-specific page
    window.location.href = targetFile;
    
    // Save preference
    localStorage.setItem('preferred-language', lang);
}

// Initialize language on page load
function initLanguage() {
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    
    // If language select exists, set its value and add event listener
    if (languageSelect) {
        languageSelect.value = savedLang;
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
}

// Load dynamic menu from localStorage
function loadMenu() {
    const menus = JSON.parse(localStorage.getItem('cafe-mrm-menus') || getDefaultMenu());
    const navMenu = document.getElementById('nav-menu');
    const footerLinks = document.getElementById('footer-links');
    
    // Clear existing
    navMenu.innerHTML = '';
    if (footerLinks) footerLinks.innerHTML = '';
    
    // Sort by order
    menus.sort(function(a, b) { return a.order - b.order; });
    
    menus.forEach(function(item) {
        // Add to navigation
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.link}" class="nav-link">${item.name}</a>`;
        navMenu.appendChild(li);
        
        // Add to footer
        if (footerLinks) {
            const liFooter = document.createElement('li');
            liFooter.innerHTML = `<a href="${item.link}">${item.name}</a>`;
            footerLinks.appendChild(liFooter);
        }
    });
    
    // Re-attach event listeners
    attachNavListeners();
}

function getDefaultMenu() {
    return [
        { name: 'Home', link: '#home', order: 1 },
        { name: 'About', link: '#about', order: 2 },
        { name: 'Team', link: '#team', order: 3 },
        { name: 'Research', link: '#research', order: 4 },
        { name: 'Videos', link: '#videos', order: 5 },
        { name: 'News', link: '#news', order: 6 },
        { name: 'Partnerships', link: '#partnerships', order: 7 },
        { name: 'Results', link: '#results', order: 8 },
        { name: 'Contact', link: '#contact', order: 9 }
    ];
}

function attachNavListeners() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
}

// Load dynamic sections from localStorage
function loadSections() {
    const sections = JSON.parse(localStorage.getItem('cafe-mrm-sections') || getDefaultSections());
    const container = document.getElementById('sections-container');
    
    // Clear existing
    container.innerHTML = '';
    
    sections.forEach(function(section, index) {
        if (section.type === 'main') {
            const sectionDiv = document.createElement('section');
            sectionDiv.id = section.id;
            sectionDiv.className = 'section ' + (index % 2 === 0 ? '' : 'section-alt');
            
            const innerHTML = `
                <div class="container">
                    <h2 class="section-title">${section.name}</h2>
                    <div class="section-content">
                        ${section.content}
                    </div>
                </div>
            `;
            
            sectionDiv.innerHTML = innerHTML;
            container.appendChild(sectionDiv);
        }
    });
}

function getDefaultSections() {
    return [
        { 
            name: 'Hero Section', 
            content: getHeroContent(), 
            type: 'main', 
            id: 'home',
            editable: true 
        },
        { 
            name: 'About the Project', 
            content: getAboutContent(), 
            type: 'main', 
            id: 'about',
            editable: true 
        },
        // Add more default sections as needed...
    ];
}

function getHeroContent() {
    return `
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="hero-logos">
                <img src="images/Logos_instituicoes.png" alt="Partner Institutions" class="hero-logo">
            </div>
            <h1 class="hero-title">Café MRM</h1>
            <p class="hero-subtitle">Specialty Coffee, Sustainability & Innovation</p>
            <p class="hero-description">A Franco-Brazilian Scientific Collaboration</p>
            <a href="#about" class="hero-cta">Discover Our Project</a>
        </div>
        <div class="hero-flags">
            <span class="flag">🇫🇷</span>
            <span class="flag-separator">&</span>
            <span class="flag">🇧🇷</span>
        </div>
    `;
}

function getAboutContent() {
    return `
        <div class="about-grid">
            <div class="about-text">
                <p class="about-intro">The Café MRM project represents a long-term partnership between French and Brazilian research institutions, focusing on specialty coffee, sustainability, and innovation.</p>
                <p>Born from a meeting at IGLS 2023 in Garmisch, Germany, between Aziz Galvão (UFV) and Anne Rollet (AMU)...</p>
            </div>
        </div>
    `;
}

// Check if admin is logged in
function checkAdmin() {
    if (localStorage.getItem('cafe-mrm-admin-logged-in') === 'true') {
        // Show admin buttons
        const videoBtn = document.getElementById('video-admin-btn');
        const newsBtn = document.getElementById('news-admin-btn');
        if (videoBtn) videoBtn.style.display = 'block';
        if (newsBtn) newsBtn.style.display = 'block';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
    
    // Load dynamic content
    loadMenu();
    loadSections();
    
    // Check admin status
    checkAdmin();
    
    // Load saved news and videos from localStorage
    loadNews();
    loadVideos();
    
    // Initialize language
    initLanguage();
});

// News functions
function showNewsForm() {
    if (localStorage.getItem('cafe-mrm-admin-logged-in') !== 'true') {
        alert('Only admin can post news!');
        return;
    }
    document.getElementById('news-modal').classList.add('active');
}

function closeNewsForm() {
    document.getElementById('news-modal').classList.remove('active');
}

// Video functions
function showVideoForm() {
    if (localStorage.getItem('cafe-mrm-admin-logged-in') !== 'true') {
        alert('Only admin can add videos!');
        return;
    }
    document.getElementById('video-modal').classList.add('active');
}

function closeVideoForm() {
    document.getElementById('video-modal').classList.remove('active');
}

// Handle news form submission
document.getElementById('news-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (localStorage.getItem('cafe-mrm-admin-logged-in') !== 'true') {
        alert('Only admin can post news!');
        return;
    }
    
    const title = document.getElementById('news-title').value;
    const date = document.getElementById('news-date').value;
    const content = document.getElementById('news-content').value;
    
    const newsItem = {
        title: title,
        date: formatDate(date),
        content: content,
        fulldate: date
    };
    
    saveNews(newsItem);
    addNewsToPage(newsItem);
    
    document.getElementById('news-form').reset();
    closeNewsForm();
});

// Handle video form submission
document.getElementById('video-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (localStorage.getItem('cafe-mrm-admin-logged-in') !== 'true') {
        alert('Only admin can add videos!');
        return;
    }
    
    const title = document.getElementById('video-title').value;
    const url = document.getElementById('video-url').value;
    const desc = document.getElementById('video-desc').value;
    
    const videoItem = {
        title: title,
        url: url,
        desc: desc
    };
    
    saveVideo(videoItem);
    addVideoToPage(videoItem);
    
    document.getElementById('video-form').reset();
    closeVideoForm();
});

// Save functions
function saveNews(item) {
    let news = JSON.parse(localStorage.getItem('cafe-mrm-news') || '[]');
    news.unshift(item);
    localStorage.setItem('cafe-mrm-news', JSON.stringify(news));
}

function saveVideo(item) {
    let videos = JSON.parse(localStorage.getItem('cafe-mrm-videos') || '[]');
    videos.unshift(item);
    localStorage.setItem('cafe-mrm-videos', JSON.stringify(videos));
}

// Load functions
function loadNews() {
    const news = JSON.parse(localStorage.getItem('cafe-mrm-news') || '[]');
    news.forEach(function(item) {
        addNewsToPage(item);
    });
}

function loadVideos() {
    const videos = JSON.parse(localStorage.getItem('cafe-mrm-videos') || '[]');
    videos.forEach(function(item) {
        addVideoToPage(item);
    });
}

// Add to page functions
function addNewsToPage(newsItem) {
    const container = document.getElementById('news-container');
    if (!container) return;
    
    const newsCard = document.createElement('div');
    newsCard.className = 'news-card';
    newsCard.innerHTML = `
        <div class="news-date">${newsItem.date}</div>
        <h3 class="news-title">${newsItem.title}</h3>
        <p class="news-excerpt">${newsItem.content.substring(0, 150)}...</p>
        <a href="#" class="news-link">Read More →</a>
    `;
    container.insertBefore(newsCard, container.firstChild);
}

function addVideoToPage(videoItem) {
    const container = document.getElementById('videos-container');
    if (!container) return;
    
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';
    videoCard.innerHTML = `
        <div class="video-placeholder" onclick="window.open('${videoItem.url}', '_blank')">
            <div class="play-button">▶</div>
            <p>Watch Video</p>
        </div>
        <div class="video-info">
            <h4>${videoItem.title}</h4>
            <p>${videoItem.desc}</p>
        </div>
    `;
    container.appendChild(videoCard);
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Close modals when clicking outside
window.addEventListener('click', function(e) {
    const newsModal = document.getElementById('news-modal');
    const videoModal = document.getElementById('video-modal');
    
    if (e.target === newsModal) {
        closeNewsForm();
    }
    if (e.target === videoModal) {
        closeVideoForm();
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.theme-card, .team-card, .result-card, .partner-category, .stat-card, .timeline-item, .news-card, .video-card').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Active navigation link highlighting
window.addEventListener('scroll', function() {
    let current = '';
    document.querySelectorAll('section').forEach(function(section) {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});
