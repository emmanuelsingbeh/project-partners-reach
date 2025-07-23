import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

export default function LoginAndComplete() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState(null);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    full_name: "",
    gender: "",
    dob: new Date(),
    grade: "",
    parent_name: "",
    parent_contact: ""
  });

  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });
  }, []);

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setMessage("Login failed: " + error.message);
    } else {
      setSession(data.session);
      setMessage("");
    }
  };

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const user = session?.user;
    if (!user) return;

    const { error } = await supabase.from("students").insert([
      {
        auth_id: user.id,
        full_name: formData.full_name,
        gender: formData.gender,
        dob: formData.dob.toISOString().split("T")[0],
        grade: formData.grade,
        parent_name: formData.parent_name,
        parent_contact: formData.parent_contact,
        status: "pending",
        created_at: new Date().toISOString()
      }
    ]);

    if (error) {
      setMessage("Failed to save student record: " + error.message);
    } else {
      setMessage("Profile saved! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 2000);
    }
  };

  if (!session) {
    return (
      <div className="max-w-md mx-auto mt-10">
        <Card>
          <CardContent className="space-y-4 pt-6">
            <h1 className="text-xl font-bold text-center">Login</h1>
            <Label>Email</Label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            <Label>Password</Label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleLogin} className="w-full">
              Log In
            </Button>
            {message && <p className="text-sm text-center text-red-500">{message}</p>}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10">
      <Card>
        <CardContent className="space-y-4 pt-6">
          <h1 className="text-xl font-bold text-center">Complete Profile</h1>
          {message && <p className="text-center text-blue-600">{message}</p>}
          <Label>Full Name</Label>
          <Input value={formData.full_name} onChange={(e) => handleChange("full_name", e.target.value)} />
          <Label>Gender</Label>
          <select value={formData.gender} onChange={(e) => handleChange("gender", e.target.value)} className="w-full px-2 py-2 rounded border">
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <Label>Date of Birth</Label>
          <Popover open={showCalendar} onOpenChange={setShowCalendar}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
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
          <Label>Grade</Label>
          <Input value={formData.grade} onChange={(e) => handleChange("grade", e.target.value)} />
          <Label>Parent Name</Label>
          <Input value={formData.parent_name} onChange={(e) => handleChange("parent_name", e.target.value)} />
          <Label>Parent Contact</Label>
          <Input value={formData.parent_contact} onChange={(e) => handleChange("parent_contact", e.target.value)} />
          <Button onClick={handleSubmit} className="w-full">
            Submit Profile
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
