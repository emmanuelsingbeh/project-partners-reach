// src/pages/studentLogin.tsx

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function StudentLogin() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Frontend-only mode: create a mock session
    const name = formData.email.split('@')[0] || 'Student';
    localStorage.setItem('studentUser', JSON.stringify({ name, email: formData.email }));

    setTimeout(() => {
      setLoading(false);
      navigate('/student-dashboard');
    }, 200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="max-w-md w-full p-6">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-6 text-center">Student Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 border rounded" />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} required className="w-full p-2 border rounded" />
            <Button disabled={loading} type="submit" className="w-full">{loading ? 'Logging in...' : 'Login'}</Button>
          </form>
          {message && <p className="text-center text-sm mt-4 text-red-500">{message}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
