import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Users, Settings, Download, Filter } from "lucide-react";
import { useStudentData } from "@/hooks/useStudentData";
import { StudentCard } from "@/components/shared/StudentCard";
import { StudentProgress } from "@/components/shared/StudentProgress";
import { Student } from "@/types/users";

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

export default function AdminStudentView() {
  const { students, loading, getCourseStats } = useStudentData();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  useEffect(() => {
    setMetaTags(
      "Admin Dashboard | Student Management",
      "Comprehensive admin dashboard for managing students, tracking progress, and overseeing course enrollments."
    );
  }, []);

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = getCourseStats();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading admin dashboard...</p>
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
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground text-lg">
              Manage students, track progress, and oversee learning outcomes.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Overview */}
          <div className="mb-8">
            <StudentProgress stats={stats} title="System Overview" />
          </div>

          <Tabs defaultValue="students" className="w-full">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="students">All Students</TabsTrigger>
              <TabsTrigger value="courses">Course Management</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Students Tab */}
            <TabsContent value="students" className="mt-6 space-y-6">
              {/* Search and Filters */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search students by name or email..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Button variant="outline">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Student List */}
              <div className="grid gap-6">
                {filteredStudents.map((student, index) => (
                  <motion.div
                    key={student.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <Users className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold text-primary">{student.name}</p>
                              <p className="text-sm text-muted-foreground">{student.email}</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Badge variant="outline">
                              {student.enrollments.length} Course{student.enrollments.length !== 1 ? 's' : ''}
                            </Badge>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => setSelectedStudent(selectedStudent?.id === student.id ? null : student)}
                            >
                              {selectedStudent?.id === student.id ? 'Hide' : 'View'} Details
                            </Button>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      
                      {selectedStudent?.id === student.id && (
                        <CardContent className="border-t">
                          <div className="pt-6">
                            <h4 className="font-semibold text-primary mb-4">Enrolled Courses</h4>
                            {student.enrollments.length === 0 ? (
                              <p className="text-muted-foreground">No enrollments yet.</p>
                            ) : (
                              <div className="grid sm:grid-cols-2 gap-4">
                                {student.enrollments.map((enrollment) => (
                                  <StudentCard
                                    key={enrollment.id}
                                    enrollment={enrollment}
                                    isReadOnly={true}
                                    className="h-full"
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Course Management Tab */}
            <TabsContent value="courses" className="mt-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-primary">Course Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Course management features will be implemented here.
                    This will include creating courses, assigning instructors, and managing curriculum.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="mt-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-primary">Learning Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Detailed analytics and reporting will be available here.
                    Track completion rates, student performance, and course effectiveness.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="mt-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    System Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Administrative settings and system configuration options.
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