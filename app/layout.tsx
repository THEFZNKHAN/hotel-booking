import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Navbar } from "@/components/layout/navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Quick Stay",
    description:
        "Hotel Booking SystemThe Hotel & Restaurant Booking Website is a standalone web application built using modern web development frameworks. It integrates a RESTful API backend with a responsive frontend, ensuring seamless user experience across multiple roles (Customer, Vendor, Admin).",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Navbar />
                {children}
                <Toaster position="bottom-right" richColors />
            </body>
        </html>
    );
}
