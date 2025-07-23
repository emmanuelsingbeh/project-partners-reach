import { useState } from 'react';
import { supabase } from '../integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Student = {
  auth_id: string;
  email: string;
  full_name: string;
  gender: string;
  dob: string; // YYYY-MM-DD string format
  grade?: string;
  parent_name?: string;
  parent_contact?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
};

export default function StudentSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    grade: '',
    parent_name: '',
    parent_contact: '',
    gender: '',
    dob: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { email, password, ...profile } = formData;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error || !data.user) {
      setLoading(false);
      return setMessage(`Signup failed: ${error?.message}`);
    }

    const user = data.user;

    const student: Student = {
      auth_id: user.id,
      email: email,
      full_name: profile.full_name,
      grade: profile.grade,
      parent_name: profile.parent_name,
      parent_contact: profile.parent_contact,
      gender: profile.gender,
      dob: profile.dob,
    };

    const { error: insertError } = await supabase
      .from('students')
      .insert([student]);

    if (insertError) {
      setMessage(`Failed to save student record: ${insertError.message}`);
    } else {
      setMessage('Signup successful! Please check your email to confirm your account.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="max-w-md w-full p-6">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-6 text-center">Student Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="full_name" type="text" placeholder="Full Name" onChange={handleChange} required className="w-full p-2 border rounded" />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 border rounded" />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} required className="w-full p-2 border rounded" />
            <select name="gender" onChange={handleChange} required className="w-full p-2 border rounded">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input name="dob" type="date" onChange={handleChange} required className="w-full p-2 border rounded" />
            <input name="grade" type="text" placeholder="Grade" onChange={handleChange} className="w-full p-2 border rounded" />
            <input name="parent_name" type="text" placeholder="Parent's Name" onChange={handleChange} className="w-full p-2 border rounded" />
            <input name="parent_contact" type="text" placeholder="Parent's Contact" onChange={handleChange} className="w-full p-2 border rounded" />
            <Button disabled={loading} type="submit" className="w-full">{loading ? 'Signing up...' : 'Sign Up'}</Button>
          </form>
          {message && <p className="text-center text-sm mt-4 text-red-500">{message}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
