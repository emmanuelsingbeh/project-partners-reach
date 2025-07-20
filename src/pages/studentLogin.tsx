// src/pages/Login.tsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) {
      alert(error.message);
    } else if (!data.user.email_confirmed_at) {
      alert("Please confirm your email before logging in.");
    } else {
      navigate("/student-portal");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Card>
        <CardContent className="space-y-4 pt-6">
          <h2 className="text-xl font-bold text-center">Student Login</h2>
          <div>
            <Label>Email</Label>
            <Input name="email" value={form.email} onChange={handleChange} />
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password" name="password" value={form.password} onChange={handleChange} />
          </div>
          <Button className="w-full" onClick={handleLogin} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
