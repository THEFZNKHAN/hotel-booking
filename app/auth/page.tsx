"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "@/components/auth/login-form";
import { RegisterForm } from "@/components/auth/register-form";
import { Building } from "lucide-react";

export default function AuthPage() {
    const [activeTab, setActiveTab] = useState<string>("login");

    return (
        <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                <div className="absolute inset-0 bg-[#282a36]" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <Building className="mr-2 h-6 w-6" />
                    Quick Stay
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            &ldquo;The Hotel Booking System has revolutionized
                            our operations, making the management of listings
                            and bookings seamless and efficient.&rdquo;
                        </p>
                        <footer className="text-sm">Md Faizan Khan, CEO</footer>
                    </blockquote>
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Welcome back
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Sign in to your account or create a new one
                        </p>
                    </div>
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="login">Login</TabsTrigger>
                            <TabsTrigger value="register">Register</TabsTrigger>
                        </TabsList>
                        <TabsContent value="login" className="mt-4">
                            <LoginForm />
                        </TabsContent>
                        <TabsContent value="register" className="mt-4">
                            <RegisterForm />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
