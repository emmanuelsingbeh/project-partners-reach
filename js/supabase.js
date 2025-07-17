// Supabase configuration
const SUPABASE_URL = 'https://icdmncnwwfvrbnecapgs.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljZG1uY253d2Z2cmJuZWNhcGdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MjIwNDIsImV4cCI6MjA2NzQ5ODA0Mn0.KUqG1ONMxfmaNfJBGZA5BpY3YcqlnierJU7QnULw7RA';

// Initialize Supabase client
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Authentication functions
const auth = {
    async signUp(email, password, fullName) {
        try {
            const { data, error } = await supabaseClient.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName
                    }
                }
            });
            
            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    },

    async signIn(email, password) {
        try {
            const { data, error } = await supabaseClient.auth.signInWithPassword({
                email,
                password
            });
            
            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    },

    async signOut() {
        try {
            const { error } = await supabaseClient.auth.signOut();
            if (error) throw error;
            return { error: null };
        } catch (error) {
            return { error };
        }
    },

    async getUser() {
        try {
            const { data: { user }, error } = await supabaseClient.auth.getUser();
            if (error) throw error;
            return { user, error: null };
        } catch (error) {
            return { user: null, error };
        }
    },

    onAuthStateChange(callback) {
        return supabaseClient.auth.onAuthStateChange(callback);
    }
};

// Database functions
const db = {
    async getCourses() {
        try {
            const { data, error } = await supabaseClient
                .from('courses')
                .select('*')
                .eq('status', 'Active')
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    },

    async enrollInCourse(courseId) {
        try {
            const { data, error } = await supabaseClient
                .from('enrollments')
                .insert([
                    {
                        course_id: courseId,
                        user_id: (await supabaseClient.auth.getUser()).data.user.id
                    }
                ]);
            
            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    },

    async getEnrollments(userId) {
        try {
            const { data, error } = await supabaseClient
                .from('enrollments')
                .select(`
                    *,
                    courses (
                        id,
                        title,
                        description,
                        instructor_name,
                        duration
                    )
                `)
                .eq('user_id', userId);
            
            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    },

    async getProfile(userId) {
        try {
            const { data, error } = await supabaseClient
                .from('profiles')
                .select('*')
                .eq('user_id', userId)
                .single();
            
            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    },

    async updateProfile(userId, updates) {
        try {
            const { data, error } = await supabaseClient
                .from('profiles')
                .update(updates)
                .eq('user_id', userId);
            
            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    },

    async createContactMessage(name, email, phone, subject, message) {
        try {
            const { data, error } = await supabaseClient
                .from('contact_messages')
                .insert([
                    {
                        name,
                        email,
                        phone,
                        subject,
                        message
                    }
                ]);
            
            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    },

    async getBlogPosts() {
        try {
            const { data, error } = await supabaseClient
                .from('blog_posts')
                .select('*')
                .eq('published', true)
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    },

    async getAssignments(courseId) {
        try {
            const { data, error } = await supabaseClient
                .from('assignments')
                .select('*')
                .eq('course_id', courseId)
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    },

    async submitAssignment(assignmentId, content, fileUrl) {
        try {
            const { data, error } = await supabaseClient
                .from('submissions')
                .insert([
                    {
                        assignment_id: assignmentId,
                        user_id: (await supabaseClient.auth.getUser()).data.user.id,
                        content,
                        file_url: fileUrl
                    }
                ]);
            
            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    },

    async getCertificates(userId) {
        try {
            const { data, error } = await supabaseClient
                .from('certificates')
                .select(`
                    *,
                    courses (
                        title
                    )
                `)
                .eq('user_id', userId);
            
            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    }
};

// Admin functions
const admin = {
    async getAllUsers() {
        try {
            const { data, error } = await supabaseClient
                .from('profiles')
                .select('*')
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    },

    async getAllEnrollments() {
        try {
            const { data, error } = await supabaseClient
                .from('enrollments')
                .select(`
                    *,
                    courses (
                        title
                    ),
                    profiles (
                        full_name,
                        email,
                        student_id
                    )
                `)
                .order('enrollment_date', { ascending: false });
            
            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    },

    async getAllContactMessages() {
        try {
            const { data, error } = await supabaseClient
                .from('contact_messages')
                .select('*')
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    },

    async createCourse(courseData) {
        try {
            const { data, error } = await supabaseClient
                .from('courses')
                .insert([courseData]);
            
            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    },

    async updateCourse(courseId, updates) {
        try {
            const { data, error } = await supabaseClient
                .from('courses')
                .update(updates)
                .eq('id', courseId);
            
            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    }
};

// Utility functions
function showMessage(elementId, message, type = 'success') {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
        element.className = `mt-4 p-3 rounded-md ${type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`;
        element.classList.remove('hidden');
        
        setTimeout(() => {
            element.classList.add('hidden');
        }, 5000);
    }
}

function showLoading(elementId, show = true) {
    const element = document.getElementById(elementId);
    if (element) {
        if (show) {
            element.innerHTML = '<div class="spinner"></div>Loading...';
            element.disabled = true;
        } else {
            element.innerHTML = element.dataset.originalText || 'Submit';
            element.disabled = false;
        }
    }
}

// Export for use in other files
window.auth = auth;
window.db = db;
window.admin = admin;
window.showMessage = showMessage;
window.showLoading = showLoading;