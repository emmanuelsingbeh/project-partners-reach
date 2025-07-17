// Global state
let currentUser = null;
let currentSlide = 0;
const totalSlides = 3;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize hero slider
    initHeroSlider();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize authentication
    initAuth();
    
    // Initialize modals
    initModals();
    
    // Check authentication state
    checkAuthState();
}

// Hero slider functionality
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (slides.length === 0) return;
    
    // Set first slide as active
    slides[0].style.opacity = '1';
    if (dots[0]) dots[0].classList.add('bg-opacity-100');
    
    // Auto-advance slides
    setInterval(() => {
        nextSlide();
    }, 5000);
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
}

function goToSlide(slideIndex) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dot');
    
    // Hide all slides
    slides.forEach(slide => {
        slide.style.opacity = '0';
    });
    
    // Remove active state from all dots
    dots.forEach(dot => {
        dot.classList.remove('bg-opacity-100');
        dot.classList.add('bg-opacity-50');
    });
    
    // Show current slide
    if (slides[slideIndex]) {
        slides[slideIndex].style.opacity = '1';
    }
    
    // Activate current dot
    if (dots[slideIndex]) {
        dots[slideIndex].classList.add('bg-opacity-100');
        dots[slideIndex].classList.remove('bg-opacity-50');
    }
    
    currentSlide = slideIndex;
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Authentication functionality
function initAuth() {
    // Set up auth state listener
    auth.onAuthStateChange((event, session) => {
        currentUser = session?.user || null;
        updateAuthUI();
    });
    
    // Login modal functionality
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');
    const authForm = document.getElementById('authForm');
    const toggleAuth = document.getElementById('toggleAuth');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            if (loginModal) loginModal.classList.remove('hidden');
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            if (loginModal) loginModal.classList.add('hidden');
        });
    }
    
    if (loginModal) {
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.classList.add('hidden');
            }
        });
    }
    
    if (authForm) {
        authForm.addEventListener('submit', handleAuth);
    }
    
    if (toggleAuth) {
        toggleAuth.addEventListener('click', toggleAuthMode);
    }
    
    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    // User menu toggle
    const userMenuBtn = document.getElementById('userMenuBtn');
    const userDropdown = document.getElementById('userDropdown');
    
    if (userMenuBtn && userDropdown) {
        userMenuBtn.addEventListener('click', () => {
            userDropdown.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!userMenuBtn.contains(e.target) && !userDropdown.contains(e.target)) {
                userDropdown.classList.add('hidden');
            }
        });
    }
}

function initModals() {
    // Close modals when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-backdrop')) {
            e.target.classList.add('hidden');
        }
    });
}

async function checkAuthState() {
    const { user } = await auth.getUser();
    currentUser = user;
    updateAuthUI();
}

function updateAuthUI() {
    const loginBtn = document.getElementById('loginBtn');
    const userMenu = document.getElementById('userMenu');
    const userName = document.getElementById('userName');
    const adminLink = document.getElementById('adminLink');
    
    if (currentUser) {
        // User is logged in
        if (loginBtn) loginBtn.classList.add('hidden');
        if (userMenu) userMenu.classList.remove('hidden');
        if (userName) userName.textContent = currentUser.email;
        
        // Check if user is admin (simplified check)
        if (currentUser.email && currentUser.email.includes('admin')) {
            if (adminLink) adminLink.classList.remove('hidden');
        }
    } else {
        // User is not logged in
        if (loginBtn) loginBtn.classList.remove('hidden');
        if (userMenu) userMenu.classList.add('hidden');
        if (adminLink) adminLink.classList.add('hidden');
    }
}

let isSignUp = false;

function toggleAuthMode() {
    isSignUp = !isSignUp;
    
    const modalTitle = document.getElementById('modalTitle');
    const submitBtn = document.getElementById('submitBtn');
    const toggleText = document.getElementById('toggleText');
    const toggleAuth = document.getElementById('toggleAuth');
    const signupFields = document.getElementById('signupFields');
    
    if (isSignUp) {
        if (modalTitle) modalTitle.textContent = 'Sign Up';
        if (submitBtn) submitBtn.textContent = 'Sign Up';
        if (toggleText) toggleText.textContent = 'Already have an account?';
        if (toggleAuth) toggleAuth.textContent = 'Login';
        if (signupFields) signupFields.classList.remove('hidden');
    } else {
        if (modalTitle) modalTitle.textContent = 'Login';
        if (submitBtn) submitBtn.textContent = 'Login';
        if (toggleText) toggleText.textContent = "Don't have an account?";
        if (toggleAuth) toggleAuth.textContent = 'Sign up';
        if (signupFields) signupFields.classList.add('hidden');
    }
}

async function handleAuth(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const fullName = document.getElementById('fullName')?.value || '';
    
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.dataset.originalText = submitBtn.textContent;
        showLoading('submitBtn');
    }
    
    try {
        let result;
        
        if (isSignUp) {
            result = await auth.signUp(email, password, fullName);
            if (result.error) throw result.error;
            showMessage('authMessage', 'Account created successfully! Please check your email for verification.');
        } else {
            result = await auth.signIn(email, password);
            if (result.error) throw result.error;
            showMessage('authMessage', 'Logged in successfully!');
            
            // Close modal after successful login
            setTimeout(() => {
                const loginModal = document.getElementById('loginModal');
                if (loginModal) loginModal.classList.add('hidden');
            }, 1000);
        }
    } catch (error) {
        showMessage('authMessage', error.message, 'error');
    } finally {
        showLoading('submitBtn', false);
    }
}

async function handleLogout() {
    try {
        await auth.signOut();
        showMessage('authMessage', 'Logged out successfully!');
        
        // Redirect to home page
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Logout error:', error);
    }
}

// Utility functions for other pages
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function truncateText(text, maxLength = 150) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// Export functions for use in other pages
window.formatDate = formatDate;
window.truncateText = truncateText;
window.currentUser = currentUser;
window.updateAuthUI = updateAuthUI;