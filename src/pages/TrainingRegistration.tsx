// TrainingRegistration.tsx
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TrainingRegistration = () => {
  const [educationLevel, setEducationLevel] = useState("");
  const [otherEducation, setOtherEducation] = useState("");

  const navigate = useNavigate();

  // Scroll to top on mount to fix 404 / scroll landing at bottom issue
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement & {
      fullName: { value: string };
      email: { value: string };
      address: { value: string };
      phone: { value: string };
      classSelection: { value: string };
      dob: { value: string };
      sex: { value: string };
    };

    const formData = {
      fullName: form.fullName.value,
      email: form.email.value,
      address: form.address.value,
      phone: form.phone.value,
      educationLevel: educationLevel === "Other" ? otherEducation : educationLevel,
      classSelection: form.classSelection.value,
      dob: form.dob.value,
      sex: form.sex.value,
    };

    console.log("Submitted Form Data:", formData);
    alert("Form submitted! (Check email for confirmation)");
  };

  return (
    <div>
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Training Registration
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Fill out the form below to register for our training programs.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white"
            onClick={() => navigate('/training#programs')}
          >
            View Our Training Program
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <div id="registration-form" className="max-w-3xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-primary mb-6">Register Now</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" name="fullName" required />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
          </div>

          <div>
            <Label htmlFor="address">Address</Label>
            <Textarea id="address" name="address" required />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" required />
          </div>

          <div>
            <Label>Highest Level of Education</Label>
            <Select onValueChange={setEducationLevel} required>
              <SelectTrigger>
                <SelectValue placeholder="Select education level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Master">Master</SelectItem>
                <SelectItem value="Bachelor">Bachelor</SelectItem>
                <SelectItem value="Associate Degree">Associate Degree</SelectItem>
                <SelectItem value="Some College">Some College</SelectItem>
                <SelectItem value="High School">High School</SelectItem>
                <SelectItem value="Vocational Training">Vocational Training</SelectItem>
                <SelectItem value="Certificate">Certificate</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            {educationLevel === "Other" && (
              <div className="mt-2">
                <Label htmlFor="otherEducation">Please specify</Label>
                <Input id="otherEducation" value={otherEducation} onChange={(e) => setOtherEducation(e.target.value)} />
              </div>
            )}
          </div>

          <div>
            <Label>Class Selection</Label>
            <RadioGroup name="classSelection" defaultValue="Online" className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Online" id="online" />
                <Label htmlFor="online">Online</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="In-person" id="inperson" />
                <Label htmlFor="inperson">In-person</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="dob">Date of Birth</Label>
            <Input type="date" id="dob" name="dob" required />
          </div>

          <div>
            <Label htmlFor="sex">Sex</Label>
            <Select name="sex" required>
              <SelectTrigger>
                <SelectValue placeholder="Select sex" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
            Submit Registration
          </Button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default TrainingRegistration;
