export type UserRole = "student" | "instructor" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Student extends User {
  role: "student";
  gender?: string;
  enrollments: Enrollment[];
}

export interface Instructor extends User {
  role: "instructor";
  specialization?: string;
  assignedCourses: string[];
}

export interface Admin extends User {
  role: "admin";
  permissions: string[];
}

export interface Enrollment {
  id: string;
  title: string;
  description: string;
  progress: number; // 0-100
  status: "enrolled" | "in_progress" | "completed";
  startDate: string; // ISO
  instructorId?: string;
  grade?: number;
  completedAt?: string;
}

export interface CourseStats {
  totalStudents: number;
  activeStudents: number;
  completedStudents: number;
  averageProgress: number;
}