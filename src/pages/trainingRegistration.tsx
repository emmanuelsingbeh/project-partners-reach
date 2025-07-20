import { useState } from 'react';
import { supabase } from '../integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function TrainingRegistration() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    age: '',
    grade: '',
    parentName: '',
    parentContact: '',
    gender: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (signUpError || !signUpData.user) {
      setError(signUpError?.message || 'Signup failed');
      return;
    }

    const { error: studentError } = await supabase.from('students').insert({
      auth_id: signUpData.user.id,
      full_name: form.fullName,
      email: form.email,
      age: Number(form.age),
      grade: form.grade,
      parent_name: form.parentName,
      parent_contact: form.parentContact,
      gender: form.gender,
      status: 'pending',
    });

    if (studentError) {
      setError('Failed to save student record');
      return;
    }

    setSuccess('Registration successful! Please check your email to verify your account.');
    setForm({
      fullName: '',
      email: '',
      password: '',
      age: '',
      grade: '',
      parentName: '',
      parentContact: '',
      gender: '',
    });

    setTimeout(() => {
      navigate('/student-portal');
    }, 3000);
  };

  return (
    <>
      <Navigation />
      <div className="max-w-2xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md animate-fade-in">
        <h1 className="text-2xl font-bold mb-4">Training Registration</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="number" name="age" placeholder="Age" value={form.age} onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="text" name="grade" placeholder="Grade" value={form.grade} onChange={handleChange} className="w-full p-2 border rounded" />
          <select name="gender" value={form.gender} onChange={handleChange} className="w-full p-2 border rounded" required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input type="text" name="parentName" placeholder="Parent/Guardian Name" value={form.parentName} onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="text" name="parentContact" placeholder="Parent Contact Info" value={form.parentContact} onChange={handleChange} className="w-full p-2 border rounded" />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Register
          </button>
          {error && <p className="text-red-600">{error}</p>}
          {success && <p className="text-green-600">{success}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
}
