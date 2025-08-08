import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Play, Trophy, CheckCircle2, Clock, ArrowRight, User } from "lucide-react";

// Types for mock data compatible with future backend wiring
type Enrollment = {
  id: string;
  title: string;
  description: string;
  progress: number; // 0-100
  status: "enrolled" | "in_progress" | "completed";
  startDate: string; // ISO
};

const setMetaTags = (title: string, description: string, canonicalPath = "/student-dashboard") => {
  document.title = title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", description);
  else {
    const m = document.createElement("meta");
    m.name = "description";
    m.content = description;
    document.head.appendChild(m);
  }
  const linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  const href = `${window.location.origin}${canonicalPath}`;
  if (linkCanonical) linkCanonical.href = href;
  else {
    const l = document.createElement("link");
    l.rel = "canonical";
    l.href = href;
    document.head.appendChild(l);
  }
};

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [student, setStudent] = useState<{ name: string; email: string } | null>(null);

  // Read from localStorage (mock) – will be swapped to Supabase later
  useEffect(() => {
    setMetaTags(
      "Student Dashboard | Learn with Us",
      "Student dashboard for your enrolled courses: continue learning, track progress, and access certificates.",
    );

    const s = localStorage.getItem("studentUser");
    const e = localStorage.getItem("mock_enrollments");

    if (s) setStudent(JSON.parse(s));

    if (e) {
      setEnrollments(JSON.parse(e));
    } else {
      // Fallback sample to avoid empty UI
      const sample: Enrollment[] = [
        {
          id: "sample-1",
          title: "Introduction to Data Analysis",
          description: "Start exploring core concepts and tools for data insights.",
          progress: 20,
          status: "in_progress",
          startDate: new Date().toISOString(),
        },
      ];
      setEnrollments(sample);
      localStorage.setItem("mock_enrollments", JSON.stringify(sample));
    }
  }, []);

  const stats = useMemo(() => {
    const total = enrollments.length;
    const completed = enrollments.filter((e) => e.status === "completed").length;
    const inProgress = enrollments.filter((e) => e.status !== "completed").length;
    return { total, completed, inProgress };
  }, [enrollments]);

  const featured = enrollments[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pt-16 pb-10 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-2">
              {student ? `Welcome back, ${student.name.split(" ")[0]}!` : "Welcome to your Dashboard"}
            </h1>
            <p className="text-muted-foreground text-lg">
              Continue your learning journey. Track progress and pick up where you left off.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              { label: "Courses Enrolled", value: stats.total, icon: BookOpen },
              { label: "In Progress", value: stats.inProgress, icon: Clock },
              { label: "Completed", value: stats.completed, icon: Trophy },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{s.label}</p>
                      <p className="text-2xl font-bold text-primary">{s.value}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <s.icon className="h-5 w-5 text-accent" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </header>

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="courses" className="w-full">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="courses">My Courses</TabsTrigger>
              <TabsTrigger value="continue">Continue</TabsTrigger>
              <TabsTrigger value="certs">Certificates</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            {/* Courses Tab */}
            <TabsContent value="courses" className="mt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrollments.map((course, idx) => (
                  <motion.div key={course.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * idx }} className="hover-scale">
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-primary text-lg flex items-center justify-between">
                          <span>{course.title}</span>
                          {course.status === "completed" ? (
                            <Badge className="bg-accent text-white">Completed</Badge>
                          ) : (
                            <Badge variant="outline">Enrolled</Badge>
                          )}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">{course.description}</p>
                        <div>
                          <div className="flex items-center justify-between mb-2 text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="text-primary font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} />
                        </div>
                        <div className="flex gap-2">
                          <Button className="bg-primary hover:bg-primary/90">
                            <Play className="h-4 w-4 mr-2" />
                            {course.progress > 0 ? "Continue" : "Start"}
                          </Button>
                          {course.status !== "completed" && (
                            <Button variant="outline" onClick={() => {
                              // Mock complete for demo
                              const updated = enrollments.map((e) =>
                                e.id === course.id ? { ...e, status: "completed" as const, progress: 100 } : e
                              );
                              setEnrollments(updated);
                              localStorage.setItem("mock_enrollments", JSON.stringify(updated));
                            }}>
                              <CheckCircle2 className="h-4 w-4 mr-2" /> Mark Complete
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {enrollments.length === 0 && (
                <Card className="mt-6 border-dashed">
                  <CardContent className="p-6 text-center">
                    <p className="text-muted-foreground mb-4">No courses yet. Explore available programs to get started.</p>
                    <Button className="bg-accent hover:bg-accent/90 text-white" onClick={() => navigate("/training")}>Browse Programs</Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Continue Tab */}
            <TabsContent value="continue" className="mt-6">
              {featured ? (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                  <Card className="border-0 shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-primary">Continue Learning</CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-6 items-center">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">{featured.title}</h3>
                        <p className="text-muted-foreground mb-4">{featured.description}</p>
                        <Progress value={featured.progress} />
                      </div>
                      <div className="flex md:justify-end">
                        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                          <Play className="h-5 w-5 mr-2" /> Resume Course
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <Card className="border-dashed">
                  <CardContent className="p-6 text-center">
                    <p className="text-muted-foreground">No active course. Enroll to begin learning.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Certificates Tab */}
            <TabsContent value="certs" className="mt-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-primary">Certificates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {enrollments.filter(e => e.status === "completed").length === 0 ? (
                    <p className="text-muted-foreground">Complete a course to unlock your certificate.</p>
                  ) : (
                    enrollments.filter(e => e.status === "completed").map((e) => (
                      <div key={e.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/40">
                        <div className="flex items-center gap-3">
                          <Trophy className="h-5 w-5 text-accent" />
                          <div>
                            <p className="font-medium text-primary">{e.title}</p>
                            <p className="text-sm text-muted-foreground">Completed • Certificate available</p>
                          </div>
                        </div>
                        <Button variant="outline">
                          Download
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    ))
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="mt-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-primary">Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/40">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{student?.name ?? "Student"}</p>
                      <p className="text-sm text-muted-foreground">{student?.email ?? "email@example.com"}</p>
                    </div>
                  </div>
                  <Button variant="outline" onClick={() => navigate("/training")}>Explore More Courses</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
