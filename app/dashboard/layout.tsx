import type { Metadata } from "next";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard for the Hotel & Restaurant Booking App",
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // TODO: In a real app, replace this hardcoded role with data from your authentication context or API
    const userRole: "CUSTOMER" | "VENDOR" | "ADMIN" = "CUSTOMER";

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Container for the dashboard layout */}
            <div className="container mx-auto flex flex-col md:flex-row">
                {/* Sidebar - visible on medium screens and up */}
                <aside className="hidden md:block md:w-60 bg-white shadow p-4">
                    <DashboardSidebar role={userRole} />
                </aside>
                {/* Main content */}
                <main className="flex-1 p-4">{children}</main>
            </div>
        </div>
    );
}
