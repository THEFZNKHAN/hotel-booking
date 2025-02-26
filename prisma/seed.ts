import { PrismaClient, Role, ListingType, BookingStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Clear existing data (optional: use with caution in production)
    await prisma.review.deleteMany();
    await prisma.booking.deleteMany();
    await prisma.listing.deleteMany();
    await prisma.user.deleteMany();

    // Create sample users
    const admin = await prisma.user.create({
        data: {
            name: "Admin User",
            email: "admin@hotelbooking.com",
            password: "Password@2025", // Use a hashed password in a real scenario
            role: Role.ADMIN,
            contact: "1234567890",
        },
    });

    const vendor = await prisma.user.create({
        data: {
            name: "Vendor User",
            email: "vendor@hotelbooking.com",
            password: "Password@2025",
            role: Role.VENDOR,
            contact: "1234567890",
        },
    });

    const customer = await prisma.user.create({
        data: {
            name: "Customer User",
            email: "customer@hotelbooking.com",
            password: "Password@2025",
            role: Role.CUSTOMER,
            contact: "1234567890",
        },
    });

    // Create sample listings (for vendor)
    const listing1 = await prisma.listing.create({
        data: {
            vendorId: vendor.id,
            type: ListingType.HOTEL,
            name: "Grand Hotel",
            address: "123 Main St, Cityville",
            description: "A luxurious hotel with all amenities.",
            facilities: "Pool, Gym, Spa",
            pricing: 150.0,
            images: '["https://example.com/hotel1.jpg"]',
        },
    });

    const listing2 = await prisma.listing.create({
        data: {
            vendorId: vendor.id,
            type: ListingType.RESTAURANT,
            name: "Fine Dine Restaurant",
            address: "456 Market St, Cityville",
            description: "A fine dining experience with exquisite cuisine.",
            facilities: "Indoor seating, Outdoor seating",
            pricing: 75.0,
            images: '["https://example.com/restaurant1.jpg"]',
        },
    });

    // Create a sample booking (by customer for listing1)
    const booking1 = await prisma.booking.create({
        data: {
            customerId: customer.id,
            listingId: listing1.id,
            unitId: 1, // Adjust according to your Units model if applicable
            bookingDate: new Date(),
            status: BookingStatus.CONFIRMED,
            payment: "Paid via dummy gateway",
        },
    });

    // Create a sample review (for booking1)
    const review1 = await prisma.review.create({
        data: {
            bookingId: booking1.id,
            rating: 5,
            comments: "Excellent service and great experience!",
        },
    });

    console.log("Seeding successful");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
