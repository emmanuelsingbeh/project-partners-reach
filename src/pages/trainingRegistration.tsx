import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabaseClient';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

const educationOptions = [
  'Vocational School',
  'High School',
  'Some University Courses',
  'Associate Degree',
  'Bachelor Degree',
  'Master Degree',
  'Other'
];

export default function StudentRegistrationForm({ onBack }) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    full_name: '',
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

    const { full_name, parent_name, parent_contact, gender, education, other_education, dob } = formData;
    const education_level = education === 'Other' ? other_education : education;

    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      toast({ title: 'Error', description: 'Authentication required.', variant: 'destructive' });
      return;
    }

    const { error } = await supabase.from('students').insert({
      auth_id: user.id,
      full_name,
      parent_name,
      parent_contact,
      gender,
      age: dob,
      grade: education_level,
      status: 'active',
      enrollment_date: new Date()
    });

    if (error) {
      toast({ title: 'Failed to Save', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Student registered successfully.' });
      setFormData({ full_name: '', parent_name: '', parent_contact: '', gender: '', education: '', other_education: '', dob: null });
    }

    setLoading(false);
  };

  return (
    <motion.div
      className="max-w-xl mx-auto py-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-primary">
            Training Registration
          </CardTitle>
          <p className="text-center text-muted-foreground text-sm mt-2">
            Your journey to knowledge starts here! Fill out the form accurately.
          </p>
          <div className="flex justify-center mt-4">
            <Button variant="outline" onClick={onBack}>Back to Trainings</Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <div>
              <Label>Date of Birth</Label>
              <Calendar
                mode="single"
                selected={formData.dob}
                onSelect={(date) => setFormData({ ...formData, dob: date })}
              />
              {formData.dob && (
                <p className="text-sm mt-1 text-muted-foreground">
                  Selected: {format(formData.dob, 'PPP')}
                </p>
              )}
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90">
              {loading ? 'Registering...' : 'Submit Registration'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
