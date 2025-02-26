"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const hotels = [
    {
        id: 1,
        name: "Hotel California",
        location: "Los Angeles, CA",
        price: 200,
    },
    {
        id: 2,
        name: "The Grand Budapest Hotel",
        location: "Zubrowka",
        price: 300,
    },
    { id: 3, name: "Hotel Transylvania", location: "Transylvania", price: 150 },
];

export default function HotelsPage() {
    return (
        <div className="container mx-auto py-8">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold">Hotels</h1>
                <Button asChild variant="default">
                    <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotels.map((hotel) => (
                    <Card key={hotel.id}>
                        <CardHeader>
                            <CardTitle>{hotel.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{hotel.location}</p>
                            <p>${hotel.price} per night</p>
                            <Button asChild variant="outline" className="mt-4">
                                <Link href={`/listings/hotels/${hotel.id}`}>
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
