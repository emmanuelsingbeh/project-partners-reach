import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/ErrorBoundary";
import { UserProvider } from "@/contexts/UserContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Training from "./pages/Training";
import Consultancy from "./pages/Consultancy";
import Research from "./pages/Research";
import Volunteering from "./pages/Volunteering";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import TrainingRegistration from "./pages/trainingRegistration";
import Login from "./pages/studentLogin";
import StudentDashboard from "./pages/StudentDashboard";
import AdminStudentView from "./pages/AdminStudentView";
import InstructorDashboard from "./pages/InstructorDashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import { Analytics } from "@vercel/analytics/react"

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/training" element={<Training />} />
                <Route path="/consultancy" element={<Consultancy />} />
                <Route path="/research" element={<Research />} />
                <Route path="/volunteering" element={<Volunteering />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/student-portal" element={<StudentDashboard />} />
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/students" element={<AdminStudentView />} />
                <Route path="/instructor" element={<InstructorDashboard />} />
                <Route path="/training-registration/:programTitle" element={<TrainingRegistration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
            <Analytics />
          </TooltipProvider>
        </UserProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
