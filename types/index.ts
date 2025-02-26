export type UserRole = "CUSTOMER" | "VENDOR" | "ADMIN";

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    image?: string;
}

export interface Listing {
    id: string;
    name: string;
    description: string;
    type: "HOTEL" | "RESTAURANT";
    address: string;
    city: string;
    price: number;
    rating: number;
    images: string[];
    amenities: string[];
    vendorId: string;
    vendor: User;
    createdAt: string;
    updatedAt: string;
}

export interface Booking {
    id: string;
    listingId: string;
    listing: Listing;
    userId: string;
    user: User;
    startDate: string;
    endDate: string;
    status: "PENDING" | "CONFIRMED" | "CANCELLED";
    totalPrice: number;
    createdAt: string;
}

export interface Review {
    id: string;
    listingId: string;
    listing: Listing;
    userId: string;
    user: User;
    rating: number;
    comment: string;
    createdAt: string;
}
