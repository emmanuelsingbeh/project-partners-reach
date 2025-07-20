import { useState } from "react";
import { supabase } from "../integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function StudentRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    full_name: "",
    gender: "",
    education_level: "",
    other_education: "",
    dob: new Date(),
    parent_name: "",
    parent_contact: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [message, setMessage] = useState("");

  const educationOptions = [
    "Vocational School",
    "High School",
    "Some University Courses",
    "Associate Degree",
    "Bachelor Degree",
    "Master Degree",
    "Other",
  ];

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setMessage("");

    // Step 1: Create user via email/password
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (authError || !authData.user) {
      setMessage("Signup failed: " + authError?.message);
      setSubmitting(false);
      return;
    }

    const user = authData.user;
    const education =
      formData.education_level === "Other"
        ? formData.other_education
        : formData.education_level;

    // Step 2: Insert student profile into "students" table
    const { error: insertError } = await supabase
      .from("students")
      .insert([
        {
          auth_id: user.id,
          full_name: formData.full_name,
          gender: formData.gender,
          grade: education,
          dob: formData.dob.toISOString().split("T")[0],
          parent_name: formData.parent_name,
          parent_contact: formData.parent_contact,
          status: "pending",
          created_at: new Date().toISOString(),
        },
      ] as any); // 👈 TypeScript fix

    if (insertError) {
      setMessage("Failed to save student record: " + insertError.message);
    } else {
      setMessage("Signup successful! Please check your email to confirm your account.");
    }

    setSubmitting(false);
  };

  return (
    <div>
      <Navigation />
      <div className="max-w-xl mx-auto p-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-center mb-2">Training Registration</h1>
        <p className="text-center text-muted mb-4">
          Get ready to unlock your potential and explore transformative opportunities!
        </p>
        <div className="text-center mb-6">
          <Button onClick={() => navigate("/Training")}>Back to Trainings</Button>
        </div>

        {message && (
          <p className="text-center text-sm text-blue-700 mb-4">{message}</p>
        )}

        <Card className="shadow-xl">
          <CardContent className="space-y-4 pt-6">
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div>
              <Label>Password</Label>
              <Input
                type="password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
              />
            </div>
            <div>
              <Label>Full Name</Label>
              <Input
                value={formData.full_name}
                onChange={(e) => handleChange("full_name", e.target.value)}
              />
            </div>
            <div>
              <Label>Gender</Label>
              <select
                value={formData.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <Label>Highest Level of Education</Label>
              <select
                value={formData.education_level}
                onChange={(e) => handleChange("education_level", e.target.value)}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select</option>
                {educationOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
              {formData.education_level === "Other" && (
                <Input
                  placeholder="Please specify"
                  value={formData.other_education}
                  onChange={(e) => handleChange("other_education", e.target.value)}
                  className="mt-2"
                />
              )}
            </div>
            <div>
              <Label>Date of Birth</Label>
              <Popover open={showCalendar} onOpenChange={setShowCalendar}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    {formData.dob.toDateString()}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formData.dob}
                    onSelect={(date) => {
                      if (date) handleChange("dob", date);
                      setShowCalendar(false);
                    }}
                    captionLayout="dropdown"
                    fromYear={1950}
                    toYear={new Date().getFullYear()}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label>Parent Name</Label>
              <Input
                value={formData.parent_name}
                onChange={(e) => handleChange("parent_name", e.target.value)}
              />
            </div>
            <div>
              <Label>Parent Contact</Label>
              <Input
                value={formData.parent_contact}
                onChange={(e) => handleChange("parent_contact", e.target.value)}
              />
            </div>
            <Button onClick={handleSubmit} disabled={submitting} className="w-full">
              {submitting ? "Submitting..." : "Submit Registration"}
            </Button>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
