import { useState, useEffect } from "react";
import { Student, Enrollment, CourseStats } from "@/types/users";

// Mock data management - will be replaced with Supabase calls later
export const useStudentData = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load mock student data
    const loadStudentData = () => {
      setLoading(true);
      
      // Create mock students with enrollments
      const mockStudents: Student[] = [
        {
          id: "student-1",
          name: "John Doe",
          email: "john@example.com",
          role: "student",
          gender: "Male",
          enrollments: JSON.parse(localStorage.getItem("mock_enrollments") || "[]")
        },
        {
          id: "student-2", 
          name: "Jane Smith",
          email: "jane@example.com",
          role: "student",
          gender: "Female",
          enrollments: [
            {
              id: "enroll-2",
              title: "Data Analysis Fundamentals",
              description: "Learn core data analysis concepts and tools.",
              progress: 75,
              status: "in_progress",
              startDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
              instructorId: "instructor-1"
            }
          ]
        },
        {
          id: "student-3",
          name: "Michael Johnson", 
          email: "michael@example.com",
          role: "student",
          gender: "Male",
          enrollments: [
            {
              id: "enroll-3",
              title: "Project Management Basics",
              description: "Introduction to project management methodologies.",
              progress: 100,
              status: "completed",
              startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
              completedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
              grade: 92
            }
          ]
        }
      ];

      // Get current student data from localStorage and merge
      const currentStudent = localStorage.getItem("studentUser");
      if (currentStudent) {
        const parsed = JSON.parse(currentStudent);
        mockStudents[0] = {
          ...mockStudents[0],
          name: parsed.name,
          email: parsed.email,
          gender: parsed.gender
        };
      }

      setStudents(mockStudents);
      setLoading(false);
    };

    loadStudentData();
  }, []);

  const getStudentById = (id: string): Student | undefined => {
    return students.find(s => s.id === id);
  };

  const getStudentByEmail = (email: string): Student | undefined => {
    return students.find(s => s.email === email);
  };

  const getCurrentStudent = (): Student | undefined => {
    const currentUser = localStorage.getItem("studentUser");
    if (!currentUser) return undefined;
    
    const parsed = JSON.parse(currentUser);
    return students.find(s => s.email === parsed.email);
  };

  const updateStudentEnrollment = (studentId: string, enrollmentId: string, updates: Partial<Enrollment>) => {
    setStudents(prev => prev.map(student => {
      if (student.id === studentId) {
        return {
          ...student,
          enrollments: student.enrollments.map(enrollment => 
            enrollment.id === enrollmentId 
              ? { ...enrollment, ...updates }
              : enrollment
          )
        };
      }
      return student;
    }));
  };

  const getCourseStats = (): CourseStats => {
    const allEnrollments = students.flatMap(s => s.enrollments);
    return {
      totalStudents: students.length,
      activeStudents: students.filter(s => s.enrollments.some(e => e.status !== "completed")).length,
      completedStudents: students.filter(s => s.enrollments.every(e => e.status === "completed")).length,
      averageProgress: allEnrollments.reduce((sum, e) => sum + e.progress, 0) / Math.max(allEnrollments.length, 1)
    };
  };

  return {
    students,
    loading,
    getStudentById,
    getStudentByEmail,
    getCurrentStudent,
    updateStudentEnrollment,
    getCourseStats
  };
};