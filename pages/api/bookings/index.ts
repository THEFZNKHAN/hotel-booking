import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case "GET":
            try {
                const bookings = await prisma.booking.findMany();
                return res.status(200).json(bookings);
            } catch (error) {
                return res
                    .status(500)
                    .json({ message: "Error fetching bookings", error });
            }
        case "POST":
            try {
                const {
                    customerId,
                    listingId,
                    unitId,
                    bookingDate,
                    status,
                    payment,
                } = req.body;

                if (
                    !customerId ||
                    !listingId ||
                    !unitId ||
                    !bookingDate ||
                    !status
                ) {
                    return res
                        .status(400)
                        .json({ message: "Missing required fields" });
                }

                const newBooking = await prisma.booking.create({
                    data: {
                        customerId,
                        listingId,
                        unitId,
                        bookingDate: new Date(bookingDate),
                        status,
                        payment,
                    },
                });
                return res.status(201).json(newBooking);
            } catch (error) {
                return res
                    .status(500)
                    .json({ message: "Error creating booking", error });
            }
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
