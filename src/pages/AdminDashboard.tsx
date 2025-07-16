import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, BookOpen, FileText, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-primary mb-8">Admin Dashboard</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary">Students</h3>
                  <p className="text-2xl font-bold text-muted-foreground">150</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary">Courses</h3>
                  <p className="text-2xl font-bold text-muted-foreground">12</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary">Assignments</h3>
                  <p className="text-2xl font-bold text-muted-foreground">45</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Settings className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary">Settings</h3>
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

export default AdminDashboard;