"use client";

import type { Listing } from "@/types";
import { ListingCard } from "@/components/listings/listing-card";

interface ListingGridProps {
    listings: Listing[];
}

export function ListingGrid({ listings }: ListingGridProps) {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
            ))}
        </div>
    );
}
