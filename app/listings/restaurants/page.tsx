"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const restaurants = [
    {
        id: 1,
        name: "Chez Panisse",
        location: "Berkeley, CA",
        priceRange: "$$$",
    },
    {
        id: 2,
        name: "Le Bernardin",
        location: "New York, NY",
        priceRange: "$$$$",
    },
    {
        id: 3,
        name: "Noma",
        location: "Copenhagen, Denmark",
        priceRange: "$$$$",
    },
];

export default function RestaurantsPage() {
    return (
        <div className="container mx-auto py-8">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold">Restaurants</h1>
                <Button asChild variant="default">
                    <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {restaurants.map((restaurant) => (
                    <Card key={restaurant.id}>
                        <CardHeader>
                            <CardTitle>{restaurant.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{restaurant.location}</p>
                            <p>Price Range: {restaurant.priceRange}</p>
                            <Button asChild variant="outline" className="mt-4">
                                <Link
                                    href={`/listings/restaurants/${restaurant.id}`}
                                >
                                    View Details
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
