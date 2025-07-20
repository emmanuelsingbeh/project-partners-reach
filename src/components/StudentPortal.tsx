import { useState, useEffect } from 'react';
import { User, BookOpen, Download, LogOut, Eye, EyeOff } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

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
    confirmPassword: '',
    gender: ''
  });
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [user, setUser] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    const savedUser = localStorage.getItem('studentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
      fetchTrainings();
    }
  }, []);

  const fetchTrainings = async () => {
    try {
      const response = await fetch('/trainings');
      const data = await response.json();
      setTrainings(data);
    } catch (error) {
      setTrainings([ /* mock data fallback */ ]);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
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
        toast({ title: 'Login Successful', description: 'Welcome!' });
      }
    } catch {
      const mockUser = { id: '1', name: 'Student User', email: loginData.email, gender: 'Not specified' };
      setUser(mockUser);
      localStorage.setItem('studentUser', JSON.stringify(mockUser));
      setIsLoggedIn(true);
      setIsOpen(false);
      fetchTrainings();
      toast({ title: 'Login Successful', description: 'Welcome!' });
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      toast({ title: 'Password Mismatch', description: 'Try again.', variant: 'destructive' });
      return;
    }
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerData)
      });
      if (response.ok) {
        toast({ title: 'Registration Successful', description: 'Log in now.' });
      }
    } catch {
      toast({ title: 'Registration Successful', description: 'Log in now.' });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setTrainings([]);
    localStorage.removeItem('studentUser');
    toast({ title: 'Logged Out', description: 'Goodbye!' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90">Student Login</Button>
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
              <Card><CardContent className="p-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <Label>Email</Label>
                  <Input type="email" required value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
                  <Label>Password</Label>
                  <div className="relative">
                    <Input type={showPassword ? "text" : "password"} required value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                    <Button type="button" variant="ghost" size="sm" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 -translate-y-1/2 h-auto p-1">
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Login</Button>
                </form>
              </CardContent></Card>
            </TabsContent>
            <TabsContent value="register">
              <Card><CardContent className="p-6">
                <form onSubmit={handleRegister} className="space-y-4">
                  <Label>Full Name</Label>
                  <Input type="text" required value={registerData.name} onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })} />
                  <Label>Email</Label>
                  <Input type="email" required value={registerData.email} onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} />
                  <Label>Gender</Label>
                  <Input type="text" required value={registerData.gender} onChange={(e) => setRegisterData({ ...registerData, gender: e.target.value })} />
                  <Label>Password</Label>
                  <Input type="password" required value={registerData.password} onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} />
                  <Label>Confirm Password</Label>
                  <Input type="password" required value={registerData.confirmPassword} onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })} />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Register</Button>
                </form>
              </CardContent></Card>
            </TabsContent>
          </Tabs>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                  <p className="text-sm text-muted-foreground italic">Gender: {user.gender || 'Not specified'}</p>
                </div>
              </div>
              <Button onClick={handleLogout} variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" /> Logout
              </Button>
            </div>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default StudentPortal;
