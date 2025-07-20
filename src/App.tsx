import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Training from "./pages/Training";
import Consultancy from "./pages/Consultancy";
import Research from "./pages/Research";
import Volunteering from "./pages/Volunteering";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import StudentPortal from "./pages/StudentPortal";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import TrainingRegistration from "./pages/trainingRegistration";
import Login from "./pages/studentLogin"; // 👈 New import
import { Analytics } from "@vercel/analytics/react"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
          <Route path="/student-portal" element={<StudentPortal />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/training-registration/:programTitle" element={<TrainingRegistration />} />
          <Route path="/login" element={<Login />} /> {/* 👈 Added login route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
