import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { loginSchema } from "@/lib/validation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = loginSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    // Proceed with login logic here
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen flex-1">
      <div className="min-h-screen flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto h-full w-full flex flex-1 flex-col justify-center max-w-sm lg:w-96 relative">
          <img
            className="h-auto w-[220px] mb-7"
            src="/images/logo.svg"
            alt="logo"
          />
          <h2 className="text-4xl font-semibold leading-[50px] tracking-tight text-gray-900">
            Welcome back!
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                name="email"
                placeholder="Email"
                className="border-gray-300 bg-white text-base text-gray-900"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••••"
                  className="border-gray-300 bg-white pr-10 text-base text-gray-900"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 focus:outline-none"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-600 mt-1">{errors.password}</p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full h-10 bg-primary border border-primary hover:bg-primary/90"
            >
              Sign in
            </Button>
          </form>
          <div className="absolute bottom-6 left-0 w-full text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Instacom. All rights reserved.
          </div>
        </div>
      </div>
      <div className="bg-gray-50 relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/login-poster.jpg"
          alt="Login visual"
        />
      </div>
    </div>
  );
}

export default LoginPage;
