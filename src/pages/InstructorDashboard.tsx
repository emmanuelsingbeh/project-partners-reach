import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, BookOpen, MessageSquare, Calendar } from "lucide-react";
import { useStudentData } from "@/hooks/useStudentData";
import { StudentCard } from "@/components/shared/StudentCard";
import { StudentProgress } from "@/components/shared/StudentProgress";
import { Student, Enrollment } from "@/types/users";

const setMetaTags = (title: string, description: string) => {
  document.title = title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", description);
  else {
    const m = document.createElement("meta");
    m.name = "description";
    m.content = description;
    document.head.appendChild(m);
  }
};

export default function InstructorDashboard() {
  const { students, loading, getCourseStats, updateStudentEnrollment } = useStudentData();
  const [selectedCourse, setSelectedCourse] = useState<string>("all");

  useEffect(() => {
    setMetaTags(
      "Instructor Dashboard | Course Management",
      "Instructor dashboard for managing assigned courses, tracking student progress, and providing feedback."
    );
  }, []);

  // Mock instructor data - in real app, this would come from user context
  const instructorCourses = [
    "Data Analysis Fundamentals",
    "Introduction to Data Analysis",
    "Research Methodology and Data Analysis"
  ];

  // Filter students based on instructor's assigned courses
  const myStudents = students.filter(student => 
    student.enrollments.some(enrollment => 
      instructorCourses.includes(enrollment.title)
    )
  );

  const myEnrollments = myStudents.flatMap(student => 
    student.enrollments
      .filter(enrollment => instructorCourses.includes(enrollment.title))
      .map(enrollment => ({ ...enrollment, studentName: student.name, studentId: student.id }))
  );

  const filteredEnrollments = selectedCourse === "all" 
    ? myEnrollments 
    : myEnrollments.filter(e => e.title === selectedCourse);

  // Calculate instructor-specific stats
  const instructorStats = {
    totalStudents: myStudents.length,
    activeStudents: myStudents.filter(s => s.enrollments.some(e => e.status !== "completed")).length,
    completedStudents: myStudents.filter(s => s.enrollments.every(e => e.status === "completed")).length,
    averageProgress: myEnrollments.reduce((sum, e) => sum + e.progress, 0) / Math.max(myEnrollments.length, 1)
  };

  const handleGradeAssignment = (studentId: string, enrollmentId: string, grade: number) => {
    updateStudentEnrollment(studentId, enrollmentId, { 
      grade, 
      status: "completed",
      progress: 100,
      completedAt: new Date().toISOString()
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading instructor dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pt-16 pb-10 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-2">
              Instructor Dashboard
            </h1>
            <p className="text-muted-foreground text-lg">
              Manage your courses, track student progress, and provide guidance.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Overview */}
          <div className="mb-8">
            <StudentProgress stats={instructorStats} title="My Students Overview" />
          </div>

          <Tabs defaultValue="students" className="w-full">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="students">My Students</TabsTrigger>
              <TabsTrigger value="courses">Course Content</TabsTrigger>
              <TabsTrigger value="grading">Grading</TabsTrigger>
              <TabsTrigger value="communication">Communication</TabsTrigger>
            </TabsList>

            {/* Students Tab */}
            <TabsContent value="students" className="mt-6 space-y-6">
              {/* Course Filter */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={selectedCourse === "all" ? "default" : "outline"}
                      onClick={() => setSelectedCourse("all")}
                      size="sm"
                    >
                      All Courses ({myEnrollments.length})
                    </Button>
                    {instructorCourses.map(course => {
                      const count = myEnrollments.filter(e => e.title === course).length;
                      return (
                        <Button
                          key={course}
                          variant={selectedCourse === course ? "default" : "outline"}
                          onClick={() => setSelectedCourse(course)}
                          size="sm"
                        >
                          {course} ({count})
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Student Enrollments */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEnrollments.map((enrollment, index) => (
                  <motion.div
                    key={`${enrollment.studentId}-${enrollment.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <StudentCard
                      enrollment={enrollment}
                      showStudentInfo={true}
                      studentName={enrollment.studentName}
                      isReadOnly={true}
                    />
                  </motion.div>
                ))}
              </div>

              {filteredEnrollments.length === 0 && (
                <Card className="border-dashed">
                  <CardContent className="p-6 text-center">
                    <GraduationCap className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      {selectedCourse === "all" 
                        ? "No students enrolled in your courses yet." 
                        : `No students enrolled in "${selectedCourse}" yet.`
                      }
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Course Content Tab */}
            <TabsContent value="courses" className="mt-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Course Content Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {instructorCourses.map(course => (
                      <Card key={course} className="border">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-primary">{course}</h4>
                              <p className="text-sm text-muted-foreground">
                                {myEnrollments.filter(e => e.title === course).length} enrolled students
                              </p>
                            </div>
                            <Button variant="outline" size="sm">
                              Manage Content
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Grading Tab */}
            <TabsContent value="grading" className="mt-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-primary">Student Grading</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {myEnrollments
                      .filter(e => e.status === "in_progress" && e.progress >= 90)
                      .map(enrollment => (
                        <Card key={`${enrollment.studentId}-${enrollment.id}`} className="border">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold text-primary">{enrollment.studentName}</h4>
                                <p className="text-sm text-muted-foreground">{enrollment.title}</p>
                                <Badge variant="outline">Progress: {enrollment.progress}%</Badge>
                              </div>
                              <Button 
                                onClick={() => handleGradeAssignment(enrollment.studentId!, enrollment.id, 85)}
                                size="sm"
                              >
                                Assign Grade
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    
                    {myEnrollments.filter(e => e.status === "in_progress" && e.progress >= 90).length === 0 && (
                      <p className="text-muted-foreground text-center py-8">
                        No assignments ready for grading.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Communication Tab */}
            <TabsContent value="communication" className="mt-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Student Communication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Communication tools and announcements will be available here.
                    Send messages to students, schedule office hours, and manage course announcements.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}