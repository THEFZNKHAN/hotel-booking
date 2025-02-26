import { Suspense } from "react";
import { format } from "date-fns";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getReviews } from "@/lib/api";

function ReviewCard({ review }: { review: Review }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">
                    {review.listing.name}
                    <div className="flex items-center space-x-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                            <Star
                                key={i}
                                className="h-4 w-4 fill-primary text-primary"
                            />
                        ))}
                    </div>
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                    {format(new Date(review.createdAt), "PPP")}
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm">{review.comment}</p>
            </CardContent>
        </Card>
    );
}

import { Review } from "@/types";

async function ReviewsGrid() {
    const reviews = await getReviews();

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review: Review) => (
                <ReviewCard key={review.id} review={review} />
            ))}
        </div>
    );
}

export default function ReviewsPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Reviews</h2>
            </div>
            <Suspense
                fallback={
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <Skeleton key={i} className="h-[200px]" />
                        ))}
                    </div>
                }
            >
                <ReviewsGrid />
            </Suspense>
        </div>
    );
}
