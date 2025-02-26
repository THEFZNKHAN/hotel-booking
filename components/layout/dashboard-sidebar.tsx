"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    BarChart3,
    Building,
    Calendar,
    Home,
    Hotel,
    Settings,
    Star,
    Users,
    Utensils,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { UserRole } from "@/types";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    role: UserRole;
}

export function DashboardSidebar({
    className,
    role,
    ...props
}: SidebarNavProps) {
    const pathname = usePathname();

    // Define routes based on user role
    const routes: Record<
        UserRole,
        { title: string; href: string; icon: React.ElementType }[]
    > = {
        CUSTOMER: [
            { title: "Overview", href: "/dashboard", icon: Home },
            {
                title: "My Bookings",
                href: "/dashboard/bookings",
                icon: Calendar,
            },
            { title: "My Reviews", href: "/dashboard/reviews", icon: Star },
            { title: "Settings", href: "/dashboard/settings", icon: Settings },
        ],
        VENDOR: [
            { title: "Overview", href: "/dashboard", icon: Home },
            {
                title: "My Listings",
                href: "/dashboard/listings",
                icon: Building,
            },
            { title: "Bookings", href: "/dashboard/bookings", icon: Calendar },
            {
                title: "Analytics",
                href: "/dashboard/analytics",
                icon: BarChart3,
            },
            { title: "Settings", href: "/dashboard/settings", icon: Settings },
        ],
        ADMIN: [
            { title: "Overview", href: "/dashboard", icon: Home },
            { title: "Users", href: "/dashboard/users", icon: Users },
            { title: "Hotels", href: "/dashboard/hotels", icon: Hotel },
            {
                title: "Restaurants",
                href: "/dashboard/restaurants",
                icon: Utensils,
            },
            { title: "Settings", href: "/dashboard/settings", icon: Settings },
        ],
    };

    return (
        <nav className={cn("flex flex-col space-y-2", className)} {...props}>
            {routes[role].map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex items-center rounded-md px-4 py-2 text-sm transition-colors",
                            isActive
                                ? "bg-accent text-accent-foreground"
                                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        )}
                    >
                        <Icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
