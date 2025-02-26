import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Hotel, Utensils } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative py-20 sm:py-32">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/hotel-bg.jpg"
                        alt="Hero background"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-2xl text-white">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                            Book Your Perfect Stay or Dining Experience
                        </h1>
                        <p className="mt-6 text-lg leading-8">
                            Discover and book the best hotels and restaurants in
                            your area. Seamless reservations, amazing
                            experiences.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Button size="lg" asChild>
                                <Link href="/listings/hotels">
                                    Find Hotels{" "}
                                    <Hotel className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/listings/restaurants">
                                    Find Restaurants{" "}
                                    <Utensils className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Everything you need to book with confidence
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            We make it easy to find and book the perfect
                            accommodation or dining experience that matches your
                            needs and preferences.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {features.map((feature) => (
                                <div
                                    key={feature.name}
                                    className="flex flex-col"
                                >
                                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                                        <feature.icon
                                            className="h-5 w-5 flex-none text-primary"
                                            aria-hidden="true"
                                        />
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                                        <p className="flex-auto">
                                            {feature.description}
                                        </p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>

            <section className="bg-muted">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-primary px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24">
                        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Start your journey with us today
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-8 text-primary-foreground/80">
                            Join thousands of satisfied customers who have found
                            their perfect stays and dining experiences through
                            our platform.
                        </p>
                        <div className="mt-10 flex justify-center">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/auth">
                                    Get Started{" "}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

const features = [
    {
        name: "Verified listings",
        description:
            "Every hotel and restaurant on our platform is thoroughly verified to ensure quality and authenticity.",
        icon: CheckCircle2,
    },
    {
        name: "Instant booking",
        description:
            "Book your stay or table instantly with our real-time availability system.",
        icon: Hotel,
    },
    {
        name: "Best prices",
        description:
            "Find the best prices and exclusive deals on hotels and restaurants.",
        icon: Utensils,
    },
];
