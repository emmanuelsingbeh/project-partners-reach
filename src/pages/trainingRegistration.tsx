import { useState } from "react";
import { supabase } from "../integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const educationOptions = [
  "Vocational School",
  "High School",
  "Some University Courses",
  "Associate Degree",
  "Bachelor Degree",
  "Master Degree",
  "Other",
];

export default function TrainingRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    gender: "",
    education_level: "",
    other_education: "",
    dob: new Date(),
    parent_name: "",
    parent_contact: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: string, value: string | Date) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setSubmitting(true);

    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData?.user) {
      alert("You must be logged in to register");
      setSubmitting(false);
      return;
    }

    const user = userData.user;
    const education =
      formData.education_level === "Other"
        ? formData.other_education
        : formData.education_level;

    // Type-safe payload
    const payload = {
      auth_id: user.id,
      full_name: formData.full_name,
      gender: formData.gender,
      grade: education,
      dob: formData.dob?.toISOString(), // store as ISO string
      parent_name: formData.parent_name,
      parent_contact: formData.parent_contact,
      status: "pending",
      created_at: new Date().toISOString(),
    };

    const { error } = await supabase
  .from("students")
  .insert([payload as any]);

    setSubmitting(false);

    if (error) {
      console.error("Insert error", error);
      alert("Failed to register. Check your inputs or permissions.");
    } else {
      alert("Registration successful");
      navigate("/student-portal");
    }
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
        <Card className="shadow-xl">
          <CardContent className="space-y-4 pt-6">
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
                <option value="Other">Other</option>
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
              <Calendar
                mode="single"
                selected={formData.dob}
                onSelect={(date) => handleChange("dob", date!)}
              />
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
