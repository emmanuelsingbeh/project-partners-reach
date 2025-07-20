import { useEffect, useState } from 'react';
import { supabase } from '../integrations/supabase/client';
import type { Database } from '../types';
import { useUser } from '@supabase/auth-helpers-react';

type EnrollmentWithProgram = Database['public']['Tables']['enrollments']['Row'] & {
  school_programs: Pick<Database['public']['Tables']['school_programs']['Row'], 'name' | 'description'>;
};

export default function StudentPortal() {
  const user = useUser();
  const [enrollments, setEnrollments] = useState<EnrollmentWithProgram[]>([]);
  const [loading, setLoading] = useState(true);
  const [studentName, setStudentName] = useState('');

  useEffect(() => {
    const fetchStudentData = async () => {
      if (!user) return;

      const { data: student, error: studentError } = await supabase
        .from('students')
        .select('*')
        .eq('auth_id', user.id)
        .single();

      if (studentError || !student) {
        console.error('Error fetching student:', studentError);
        return;
      }

      setStudentName(student.full_name || 'Student');

      const { data: enrolled, error: enrollError } = await supabase
        .from('enrollments')
        .select('*, school_programs:program_id(name, description)')
        .eq('student_id', student.id)
        .eq('approved', true);

      if (enrollError) {
        console.error('Error fetching enrollments:', enrollError);
      } else {
        setEnrollments(enrolled as EnrollmentWithProgram[]);
      }

      setLoading(false);
    };

    fetchStudentData();
  }, [user]);

  if (loading) return <p className="p-4 text-center">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {studentName}</h1>
      <h2 className="text-xl font-semibold mb-2">Your Enrolled Programs</h2>

      {enrollments.length === 0 ? (
        <p>You have no approved enrollments yet.</p>
      ) : (
        <ul className="space-y-3">
          {enrollments.map((enrollment) => (
            <li key={enrollment.id} className="p-4 border rounded-xl shadow-sm bg-white">
              <h3 className="text-lg font-bold">{enrollment.school_programs.name}</h3>
              <p className="text-gray-600">{enrollment.school_programs.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
