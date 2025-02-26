import { Suspense } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getListings } from "@/lib/api";
import { ListingCard } from "@/components/listings/listing-card";
import { Listing } from "@/types";

async function ListingsGrid() {
    const listings = await getListings();

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing: Listing) => (
                <ListingCard key={listing.id} listing={listing} />
            ))}
        </div>
    );
}

export default function ListingsPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">
                    My Listings
                </h2>
                <Button asChild>
                    <Link href="/dashboard/listings/new">
                        <Plus className="mr-2 h-4 w-4" /> Add New Listing
                    </Link>
                </Button>
            </div>
            <Suspense
                fallback={
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <Skeleton key={i} className="h-[300px]" />
                        ))}
                    </div>
                }
            >
                <ListingsGrid />
            </Suspense>
        </div>
    );
}
