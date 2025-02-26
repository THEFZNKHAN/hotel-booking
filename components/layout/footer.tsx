import Link from "next/link";
import { Building } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center space-x-2">
                            <Building className="h-6 w-6" />
                            <span className="font-bold">Quick Stay</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Making hotel and restaurant bookings easy and
                            convenient.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold">
                                    Solutions
                                </h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground"
                                        >
                                            Hotels
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground"
                                        >
                                            Restaurants
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground"
                                        >
                                            For Business
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold">
                                    Support
                                </h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground"
                                        >
                                            Help Center
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground"
                                        >
                                            Terms of Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground"
                                        >
                                            Privacy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold">
                                    Company
                                </h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground"
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground"
                                        >
                                            Careers
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold">Legal</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground"
                                        >
                                            Claim
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground"
                                        >
                                            Privacy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground"
                                        >
                                            Terms
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8">
                    <p className="text-sm text-center text-muted-foreground">
                        &copy; {new Date().getFullYear()} THEFZNKHAN. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
