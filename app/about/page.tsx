import Image from "next/image";
import Link from "next/link";
import { Globe, Lock, ShieldCheck, Stars, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 sm:py-32 bg-gradient-to-b from-primary/10 to-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-3xl text-center mx-auto">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                            Revolutionizing Hospitality Experiences
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground">
                            Discover the story behind Quick Stay and our
                            commitment to transforming the way you book hotels
                            and restaurants.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <Card key={stat.label} className="text-center">
                                <CardHeader>
                                    <stat.icon className="h-12 w-12 mx-auto text-primary" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-bold">
                                        +{stat.value}
                                    </div>
                                    <div className="text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-muted">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight">
                                Our Mission
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                To create seamless connections between travelers
                                and exceptional hospitality experiences through
                                innovative technology and user-centric design.
                            </p>
                            <Button asChild>
                                <Link href="/listings/hotels">
                                    Explore Listings
                                </Link>
                            </Button>
                        </div>
                        <div className="relative aspect-video rounded-xl overflow-hidden border">
                            <Image
                                src="/hotel-lobby.jpg"
                                alt="Hotel Lobby"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight">
                            Why Choose Quick Stay?
                        </h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                            We combine cutting-edge technology with unparalleled
                            service to deliver exceptional booking experiences.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <Card
                                key={feature.title}
                                className="hover:shadow-lg transition-shadow"
                            >
                                <CardHeader>
                                    <feature.icon className="h-8 w-8 text-primary" />
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-20 bg-muted">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight">
                            Powered by Modern Technology
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                        {techStack.map((tech) => (
                            <div
                                key={tech.name}
                                className="flex flex-col items-center gap-4"
                            >
                                <Image
                                    src={tech.logo}
                                    alt={tech.name}
                                    width={80}
                                    height={80}
                                    className="h-20 w-20 object-contain"
                                />
                                <span className="font-medium">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-primary/10 rounded-3xl p-8 sm:p-16">
                        <Stars className="h-12 w-12 mx-auto text-primary mb-6" />
                        <h2 className="text-3xl font-bold tracking-tight mb-6">
                            Ready to Experience the Future of Booking?
                        </h2>
                        <div className="flex gap-4 justify-center">
                            <Button asChild size="lg">
                                <Link href="/auth">Get Started</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const stats = [
    { label: "Bookings Made", value: "10K+", icon: Globe },
    { label: "Happy Customers", value: "5K+", icon: Users },
    { label: "Verified Listings", value: "2K+", icon: ShieldCheck },
    { label: "Awards Won", value: "12", icon: Trophy },
];

const features = [
    {
        title: "Secure Transactions",
        description:
            "Bank-grade security for all your payments and personal data",
        icon: Lock,
    },
    {
        title: "Real-Time Availability",
        description:
            "Instant updates on room/table availability across all listings",
        icon: Globe,
    },
    {
        title: "Smart Recommendations",
        description: "AI-powered suggestions based on your preferences",
        icon: Stars,
    },
    {
        title: "24/7 Support",
        description: "Round-the-clock customer service for all your needs",
        icon: Users,
    },
    {
        title: "Price Match Guarantee",
        description: "Best price assurance across all platforms",
        icon: Trophy,
    },
    {
        title: "Sustainable Choices",
        description:
            "Eco-friendly filter for environmentally conscious travelers",
        icon: ShieldCheck,
    },
];

const techStack = [
    { name: "Next.js", logo: "/next-js.svg" },
    { name: "TypeScript", logo: "/typescript.svg" },
    { name: "Tailwind CSS", logo: "/tailwind.svg" },
    { name: "Prisma", logo: "/prisma.svg" },
    { name: "PostgreSQL", logo: "/postgresql.svg" },
    { name: "Shadcn", logo: "/shadcn.svg" },
];
