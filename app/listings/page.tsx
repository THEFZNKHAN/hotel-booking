import { Suspense } from "react";

import { ListingGrid } from "@/components/listings/listing-grid";
import { ListingsFilter } from "@/components/listings/listings-filter";
import { ListingsSort } from "@/components/listings/listings-sort";
import { Skeleton } from "@/components/ui/skeleton";

async function getListings() {
    const res = await fetch("http://localhost:3000/api/listings");
    const data = await res.json();
    return data;
}

export default async function ListingsPage() {
    const listings = await getListings();

    return (
        <div className="container py-10">
            <div className="flex flex-col space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">Listings</h1>
                    <div className="flex items-center space-x-4">
                        <ListingsSort />
                        <ListingsFilter />
                    </div>
                </div>
                <Suspense
                    fallback={
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <Skeleton key={i} className="aspect-[3/4]" />
                            ))}
                        </div>
                    }
                >
                    <ListingGrid listings={listings} />
                </Suspense>
            </div>
        </div>
    );
}
