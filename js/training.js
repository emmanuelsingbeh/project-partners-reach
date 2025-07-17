// Training page functionality
let selectedCourseId = null;

document.addEventListener('DOMContentLoaded', function() {
    loadCourses();
    initEnrollmentModal();
});

async function loadCourses() {
    const coursesContainer = document.getElementById('coursesContainer');
    const coursesLoading = document.getElementById('coursesLoading');
    const coursesError = document.getElementById('coursesError');
    
    try {
        const { data: courses, error } = await db.getCourses();
        
        if (error) throw error;
        
        coursesLoading.classList.add('hidden');
        
        if (courses && courses.length > 0) {
            coursesContainer.innerHTML = courses.map(course => createCourseCard(course)).join('');
        } else {
            coursesContainer.innerHTML = '<div class="col-span-full text-center py-12"><p class="text-muted">No courses available at the moment.</p></div>';
        }
    } catch (error) {
        console.error('Error loading courses:', error);
        coursesLoading.classList.add('hidden');
        coursesError.classList.remove('hidden');
    }
}

function createCourseCard(course) {
    const price = course.price ? `$${course.price}` : 'Free';
    const level = course.level || 'All Levels';
    const duration = course.duration || 'Self-paced';
    const instructor = course.instructor_name || 'TBA';
    
    return `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow card-hover">
            <div class="h-48 bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <div class="text-white text-center">
                    <svg class="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                    <h3 class="text-sm font-semibold">${course.title}</h3>
                </div>
            </div>
            
            <div class="p-6">
                <div class="mb-4">
                    <h3 class="text-xl font-bold text-primary mb-2">${course.title}</h3>
                    <p class="text-muted text-sm">${truncateText(course.description || 'Course description coming soon...', 100)}</p>
                </div>
                
                <div class="space-y-2 mb-4">
                    <div class="flex items-center text-sm text-muted">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        <span>Instructor: ${instructor}</span>
                    </div>
                    
                    <div class="flex items-center text-sm text-muted">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>Duration: ${duration}</span>
                    </div>
                    
                    <div class="flex items-center text-sm text-muted">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                        <span>Level: ${level}</span>
                    </div>
                </div>
                
                <div class="flex items-center justify-between">
                    <div class="text-2xl font-bold text-accent">${price}</div>
                    <button onclick="enrollInCourse('${course.id}', '${course.title}')" 
                            class="bg-primary text-white px-6 py-2 rounded-md hover:bg-accent transition-colors">
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    `;
}

function enrollInCourse(courseId, courseTitle) {
    // Check if user is logged in
    if (!window.currentUser) {
        // Show login modal
        const loginModal = document.getElementById('loginModal');
        if (loginModal) {
            loginModal.classList.remove('hidden');
        }
        showMessage('authMessage', 'Please log in to enroll in courses.', 'error');
        return;
    }
    
    selectedCourseId = courseId;
    const enrollmentModal = document.getElementById('enrollmentModal');
    const enrollmentContent = document.getElementById('enrollmentContent');
    
    enrollmentContent.innerHTML = `
        <h3 class="text-lg font-semibold text-primary mb-2">${courseTitle}</h3>
        <p class="text-muted mb-4">Are you sure you want to enroll in this course?</p>
        <div class="flex space-x-4">
            <button id="confirmEnrollment" class="flex-1 bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition-colors">Confirm Enrollment</button>
            <button id="cancelEnrollment" class="flex-1 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition-colors">Cancel</button>
        </div>
    `;
    
    if (enrollmentModal) {
        enrollmentModal.classList.remove('hidden');
    }
}

function initEnrollmentModal() {
    const enrollmentModal = document.getElementById('enrollmentModal');
    const closeEnrollmentModal = document.getElementById('closeEnrollmentModal');
    
    if (closeEnrollmentModal) {
        closeEnrollmentModal.addEventListener('click', () => {
            if (enrollmentModal) enrollmentModal.classList.add('hidden');
        });
    }
    
    if (enrollmentModal) {
        enrollmentModal.addEventListener('click', (e) => {
            if (e.target === enrollmentModal) {
                enrollmentModal.classList.add('hidden');
            }
        });
        
        // Event delegation for dynamically created buttons
        enrollmentModal.addEventListener('click', async (e) => {
            if (e.target.id === 'confirmEnrollment') {
                await handleEnrollment();
            } else if (e.target.id === 'cancelEnrollment') {
                enrollmentModal.classList.add('hidden');
            }
        });
    }
}

async function handleEnrollment() {
    if (!selectedCourseId) return;
    
    const confirmBtn = document.getElementById('confirmEnrollment');
    if (confirmBtn) {
        confirmBtn.innerHTML = '<div class="spinner mr-2"></div>Enrolling...';
        confirmBtn.disabled = true;
    }
    
    try {
        const { error } = await db.enrollInCourse(selectedCourseId);
        
        if (error) {
            if (error.message.includes('duplicate key')) {
                throw new Error('You are already enrolled in this course');
            }
            throw error;
        }
        
        showMessage('enrollmentMessage', 'Successfully enrolled in the course! Check your student portal to access course materials.', 'success');
        
        setTimeout(() => {
            const enrollmentModal = document.getElementById('enrollmentModal');
            if (enrollmentModal) enrollmentModal.classList.add('hidden');
        }, 2000);
        
    } catch (error) {
        showMessage('enrollmentMessage', error.message, 'error');
    } finally {
        if (confirmBtn) {
            confirmBtn.innerHTML = 'Confirm Enrollment';
            confirmBtn.disabled = false;
        }
    }
}