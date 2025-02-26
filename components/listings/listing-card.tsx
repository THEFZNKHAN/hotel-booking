import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import type { Listing } from "@/types";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface ListingCardProps {
    listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
    return (
        <Card className="overflow-hidden">
            <div className="aspect-video relative">
                <Image
                    src={
                        listing.images[0] ||
                        "/placeholder.svg?height=400&width=600"
                    }
                    alt={listing.name}
                    fill
                    className="object-cover"
                />
            </div>
            <CardHeader>
                <CardTitle className="line-clamp-1">{listing.name}</CardTitle>
                <CardDescription className="line-clamp-2">
                    {listing.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="text-sm">
                            {listing.rating.toFixed(1)}
                        </span>
                    </div>
                    <div className="text-sm">
                        Starting from{" "}
                        <span className="font-bold">${listing.price}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button asChild className="w-full">
                    <Link href={`/listings/${listing.id}`}>View Details</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
