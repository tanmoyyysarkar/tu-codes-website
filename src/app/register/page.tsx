"use client"
import React from 'react'
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Mail, Lock, OctagonAlert, User } from "lucide-react";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">

      <div className="w-full max-w-5xl bg-card border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="hidden md:block md:basis-1/2 bg-blue-50 relative" aria-hidden={true}>
          <h1 className='shiny-gradient-text font-bold text-6xl footer-font absolute inset-0 z-20 m-auto size-50'>TU<br></br>CODEs</h1>
          
        </div>


        
        <div className="basis-full md:basis-1/2 p-6 sm:p-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Get Started</h1>
            <p className="text-muted-foreground">Join us</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="hello@example.com"
                  value={email}
                  onChange={(e:  React.FormEvent<HTMLFormElement>) => setEmail(e.currentTarget.value)}
                  className="pl-12"
                />
              </div>
            </div>


            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-medium">
                Name
              </Label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e:  React.FormEvent<HTMLFormElement>) => setName(e.currentTarget.value)}
                  className="pl-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-medium">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e:  React.FormEvent<HTMLFormElement>) => setPassword(e.currentTarget.value)}
                  className="pl-12 pr-12"
                />
                <Button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </Button>
              </div>
            </div>

            <Button type="submit" variant="outline" className="shadow-md w-full">
              Sign Up
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-card text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <Button variant="outline" className="bg-card rounded-xl">
              <OctagonAlert/>
              Google
            </Button>
          </div>

          <p className="text-center mt-8 text-muted-foreground">
            Already have an account?{" "}
            <a href="/login" className="text-foreground font-semibold hover:underline transition-colors">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage