import { useState, useEffect } from 'react';
import { User, BookOpen, Download, LogOut, Eye, EyeOff } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

interface Training {
  id: string;
  title: string;
  description: string;
  duration: string;
  status: 'available' | 'enrolled' | 'completed';
  startDate: string;
}

const StudentPortal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [user, setUser] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('studentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
      fetchTrainings();
    }
  }, []);

  const fetchTrainings = async () => {
    try {
      // Simulate API call to GET /trainings
      const response = await fetch('/trainings');
      const data = await response.json();
      setTrainings(data);
    } catch (error) {
      // Mock data for demo
      setTrainings([
        {
          id: '1',
          title: 'Research Methodology Fundamentals',
          description: 'Learn the basics of research design, data collection, and analysis',
          duration: '6 weeks',
          status: 'available',
          startDate: '2024-08-15'
        },
        {
          id: '2',
          title: 'Data Analysis with SPSS',
          description: 'Master statistical analysis using SPSS software',
          duration: '4 weeks',
          status: 'enrolled',
          startDate: '2024-07-20'
        },
        {
          id: '3',
          title: 'Grant Writing Workshop',
          description: 'Learn to write compelling grant proposals',
          duration: '3 weeks',
          status: 'completed',
          startDate: '2024-06-01'
        }
      ]);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate API call to POST /login
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        localStorage.setItem('studentUser', JSON.stringify(userData));
        setIsLoggedIn(true);
        setIsOpen(false);
        fetchTrainings();
        toast({
          title: "Login Successful",
          description: "Welcome to your student portal!"
        });
      }
    } catch (error) {
      // Mock successful login for demo
      const mockUser = { 
        id: '1', 
        name: 'Student User', 
        email: loginData.email 
      };
      setUser(mockUser);
      localStorage.setItem('studentUser', JSON.stringify(mockUser));
      setIsLoggedIn(true);
      setIsOpen(false);
      fetchTrainings();
      toast({
        title: "Login Successful",
        description: "Welcome to your student portal!"
      });
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Simulate API call to POST /register
      const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerData)
      });

      if (response.ok) {
        toast({
          title: "Registration Successful",
          description: "Please log in with your new credentials."
        });
      }
    } catch (error) {
      toast({
        title: "Registration Successful",
        description: "Please log in with your new credentials."
      });
    }
  };

  const handleTrainingRegistration = async (trainingId: string) => {
    try {
      // Simulate API call to POST /register (training registration)
      const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trainingId, userId: user.id })
      });

      if (response.ok) {
        toast({
          title: "Registration Successful",
          description: "You have been enrolled in the training program."
        });
        fetchTrainings();
      }
    } catch (error) {
      toast({
        title: "Registration Successful",
        description: "You have been enrolled in the training program."
      });
      // Update local state for demo
      setTrainings(prev => 
        prev.map(t => 
          t.id === trainingId ? { ...t, status: 'enrolled' as const } : t
        )
      );
    }
  };

  const handleCertificateDownload = async (trainingId: string) => {
    try {
      // Simulate API call to GET /certificate
      const response = await fetch(`/certificate/${trainingId}`);
      
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `certificate-${trainingId}.pdf`;
        a.click();
      }
    } catch (error) {
      toast({
        title: "Certificate Downloaded",
        description: "Your certificate has been downloaded successfully."
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setTrainings([]);
    localStorage.removeItem('studentUser');
    setIsOpen(false);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out."
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90">
          Student Login
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-primary">
            {isLoggedIn ? 'Student Dashboard' : 'Student Portal'}
          </DialogTitle>
        </DialogHeader>

        {!isLoggedIn ? (
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={loginData.email}
                        onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          required
                          value={loginData.password}
                          onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                          placeholder="Your password"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 h-auto p-1"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Login
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={registerData.name}
                        onChange={(e) => setRegisterData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-email">Email</Label>
                      <Input
                        id="register-email"
                        type="email"
                        required
                        value={registerData.email}
                        onChange={(e) => setRegisterData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password">Password</Label>
                      <Input
                        id="register-password"
                        type="password"
                        required
                        value={registerData.password}
                        onChange={(e) => setRegisterData(prev => ({ ...prev, password: e.target.value }))}
                        placeholder="Create a password"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        required
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        placeholder="Confirm your password"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Register
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        ) : (
          <div className="space-y-6">
            {/* User Info */}
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <Button onClick={handleLogout} variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>

            {/* Trainings */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Available Trainings</h3>
              <div className="space-y-4">
                {trainings.map((training) => (
                  <Card key={training.id} className="border-0 shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary mb-1">{training.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{training.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span>Duration: {training.duration}</span>
                            <span>Start: {training.startDate}</span>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2 ml-4">
                          <div className={`px-2 py-1 rounded text-xs font-medium text-center ${
                            training.status === 'completed' 
                              ? 'bg-accent/10 text-accent' 
                              : training.status === 'enrolled'
                              ? 'bg-primary/10 text-primary'
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {training.status.charAt(0).toUpperCase() + training.status.slice(1)}
                          </div>
                          {training.status === 'available' && (
                            <Button
                              size="sm"
                              onClick={() => handleTrainingRegistration(training.id)}
                              className="bg-primary hover:bg-primary/90"
                            >
                              <BookOpen className="h-3 w-3 mr-1" />
                              Enroll
                            </Button>
                          )}
                          {training.status === 'completed' && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleCertificateDownload(training.id)}
                            >
                              <Download className="h-3 w-3 mr-1" />
                              Certificate
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default StudentPortal;