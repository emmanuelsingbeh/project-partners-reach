import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BookOpen, Download, User, LogIn } from 'lucide-react';

const StudentPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically validate against the backend
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16 flex items-center justify-center min-h-screen">
          <Card className="w-full max-w-md border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-primary text-center mb-6">Student Login</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={credentials.email}
                  onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                  required
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  required
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-primary mb-8">Student Dashboard</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <BookOpen className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">My Courses</h3>
                  <p className="text-muted-foreground mb-4">View enrolled courses and progress</p>
                  <Button variant="outline">View Courses</Button>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <Download className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">Certificates</h3>
                  <p className="text-muted-foreground mb-4">Download completed certificates</p>
                  <Button variant="outline">Download</Button>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <User className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">Profile</h3>
                  <p className="text-muted-foreground mb-4">Update your information</p>
                  <Button variant="outline">Edit Profile</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StudentPortal;