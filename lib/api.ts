import type { Booking, Listing, Review } from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

// Listings API
export async function getListings(params?: URLSearchParams) {
    const url = params
        ? `${API_BASE}/api/listings?${params}`
        : `${API_BASE}/api/listings`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch listings");
    return res.json();
}

export async function getListing(id: string) {
    const res = await fetch(`${API_BASE}/api/listings/${id}`);
    if (!res.ok) throw new Error("Failed to fetch listing");
    return res.json();
}

export async function createListing(data: Partial<Listing>) {
    const res = await fetch(`${API_BASE}/api/listings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to create listing");
    return res.json();
}

// Bookings API
export async function getBookings(params?: URLSearchParams) {
    const url = params
        ? `${API_BASE}/api/bookings?${params}`
        : `${API_BASE}/api/bookings`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch bookings");
    return res.json();
}

export async function createBooking(data: Partial<Booking>) {
    const res = await fetch(`${API_BASE}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to create booking");
    return res.json();
}

// Reviews API
export async function getReviews(params?: URLSearchParams) {
    const url = params
        ? `${API_BASE}/api/reviews?${params}`
        : `${API_BASE}/api/reviews`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch reviews");
    return res.json();
}

export async function createReview(data: Partial<Review>) {
    const res = await fetch(`${API_BASE}/api/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to create review");
    return res.json();
}
