"use client";

import React, { useState, useEffect } from "react";
import { Eye, EyeOff, Github, Twitter, Linkedin, Sun, Moon } from "lucide-react";
import "../../index.css";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Email validation
  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle email change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (e.target.value) {
      setIsEmailValid(validateEmail(e.target.value));
    } else {
      setIsEmailValid(true);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    if (email && password && validateEmail(email)) {
      console.log("Form submitted:", { email, password, rememberMe });

      // Simulate successful login feedback
      const form = document.querySelector(".login-form") as HTMLElement;
      if (form) {
        form.classList.add("form-success");
        setTimeout(() => {
          form.classList.remove("form-success");
        }, 1500);
      }
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark-mode");
  };

  // Initialize theme based on user preference
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add("dark-mode");
    }
  }, []);

  // Create particles
  useEffect(() => {
    const canvas = document.getElementById("particles") as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to the login-card element bounds
    const setCanvasSize = () => {
      const card = document.querySelector(".login-card") as HTMLElement | null;
      if (card) {
        const rect = card.getBoundingClientRect();
        canvas.width = Math.max(300, Math.floor(rect.width));
        canvas.height = Math.max(300, Math.floor(rect.height));
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = isDarkMode
          ? `rgba(255, 255, 255, ${Math.random() * 0.2})`
          : `rgba(0, 0, 0, ${Math.random() * 0.15})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000));

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, [isDarkMode]);

  return (
    <div className={`login-container ${isDarkMode ? "dark" : "light"}`}>
      <div className="login-card relative overflow-hidden mx-auto w-full max-w-md p-6 sm:p-8">
        {/* Canvas behind the form only */}
        <canvas id="particles" className="particles-canvas absolute inset-0 pointer-events-none" />

        <div className="login-card-inner relative z-10">
          <div className="login-header text-center mb-6">
            <h1 className="text-3xl font-semibold">Welcome</h1>
            <p className="text-sm text-gray-600">Please sign in to continue</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className={`form-field mb-4 ${isEmailFocused || email ? "active" : ""} ${!isEmailValid && email ? "invalid" : ""}`}>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                required
                className="w-full bg-transparent border-b border-gray-300 focus:border-primary-600 outline-none pb-2"
              />
              <label htmlFor="email" className="text-sm text-gray-500">Email Address</label>
              {!isEmailValid && email && <span className="error-message text-xs text-red-600">Please enter a valid email</span>}
            </div>

            <div className={`form-field mb-4 ${isPasswordFocused || password ? "active" : ""}`}>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  required
                  className="w-full bg-transparent border-b border-gray-300 focus:border-primary-600 outline-none pb-2 pr-10"
                />
                <button
                  type="button"
                  className="toggle-password absolute right-0 top-0 mt-1 p-1"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <label htmlFor="password" className="text-sm text-gray-500">Password</label>
            </div>

            <div className="flex items-center justify-between mb-4">
              <label className="remember-me flex items-center text-sm">
                <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} className="mr-2" />
                Remember me
              </label>

              <a href="#" className="forgot-password text-sm text-primary-600">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="login-button w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-md"
              disabled={isFormSubmitted && (!email || !password || !isEmailValid)}
            >
              Sign In
            </button>
          </form>

          <div className="separator my-4 text-center text-sm text-gray-500">
            <span>or continue with</span>
          </div>

          <div className="social-login flex items-center justify-center gap-3">
            <button className="social-button github p-2 rounded-md border"><Github size={18} /></button>
            <button className="social-button twitter p-2 rounded-md border"><Twitter size={18} /></button>
            <button className="social-button linkedin p-2 rounded-md border"><Linkedin size={18} /></button>
          </div>

          <p className="signup-prompt text-center text-sm mt-4">Don't have an account? <a href="#" className="text-primary-600">Sign up</a></p>
        </div>
      </div>

      {/* Theme toggle placed outside card for simplicity */}
      <div className="theme-toggle fixed top-6 right-6 p-2 rounded-md bg-white/80 dark:bg-gray-800/80 z-20" onClick={toggleDarkMode}>
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </div>
    </div>
  );
};

export default LoginPage;
