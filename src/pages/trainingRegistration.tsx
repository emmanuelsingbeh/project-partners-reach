"use client";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabaseClient';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CalendarIcon } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';

const educationOptions = [
  'Vocational School',
  'High School',
  'Some University Courses',
  'Associate Degree',
  'Bachelor Degree',
  'Master Degree',
  'Other'
];

export default function StudentRegistrationForm() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    parent_name: '',
    parent_contact: '',
    gender: '',
    education: '',
    other_education: '',
    dob: null
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const {
      full_name,
      email,
      password,
      parent_name,
      parent_contact,
      gender,
      education,
      other_education,
      dob
    } = formData;

    const education_level = education === 'Other' ? other_education : education;

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password
    });

    if (signUpError || !signUpData?.user) {
      toast({
        title: 'Signup Error',
        description: signUpError?.message || 'Failed to create user',
        variant: 'destructive'
      });
      setLoading(false);
      return;
    }

    const { error: insertError } = await supabase.from('students').insert({
      auth_id: signUpData.user.id,
      full_name,
      parent_name,
      parent_contact,
      gender,
      dob,
      grade: education_level,
      status: 'active',
      enrollment_date: new Date()
    });

    if (insertError) {
      toast({ title: 'Failed to Save', description: insertError.message, variant: 'destructive' });
    } else {
      toast({
        title: 'Success',
        description: 'Student registered. Check your email to confirm your account.'
      });
      setFormData({ full_name: '', email: '', password: '', parent_name: '', parent_contact: '', gender: '', education: '', other_education: '', dob: null });
    }

    setLoading(false);
  };

  return (
    <>
      <Navigation />
      <motion.div
        className="max-w-xl mx-auto py-10 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-primary">
              Training Registration
            </CardTitle>
            <p className="text-center text-muted-foreground text-sm mt-2">
              Begin your learning journey today. Fill out the form below.
            </p>
            <div className="flex justify-center mt-4">
              <Button variant="outline" onClick={() => navigate('/Training')}>
                Back to Trainings
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label>Password</Label>
                <Input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label>Full Name</Label>
                <Input
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label>Parent/Guardian Name</Label>
                <Input
                  value={formData.parent_name}
                  onChange={(e) => setFormData({ ...formData, parent_name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label>Parent Contact</Label>
                <Input
                  value={formData.parent_contact}
                  onChange={(e) => setFormData({ ...formData, parent_contact: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label>Gender</Label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <Label>Highest Level of Education</Label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                  required
                >
                  <option value="">Select Education</option>
                  {educationOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              {formData.education === 'Other' && (
                <div>
                  <Label>Specify Education</Label>
                  <Input
                    value={formData.other_education}
                    onChange={(e) => setFormData({ ...formData, other_education: e.target.value })}
                    required
                  />
                </div>
              )}
              <div className="flex flex-col space-y-2">
                <Label>Date of Birth</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !formData.dob && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.dob ? format(formData.dob, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.dob}
                      onSelect={(date) => setFormData({ ...formData, dob: date })}
                      initialFocus
                      captionLayout="dropdown"
                      fromYear={1950}
                      toYear={new Date().getFullYear()}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90">
                {loading ? 'Registering...' : 'Submit Registration'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
      <Footer />
    </>
  );
}
