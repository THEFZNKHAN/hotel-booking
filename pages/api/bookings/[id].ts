import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query;
    if (typeof id !== "string") {
        return res.status(400).json({ message: "Invalid booking ID" });
    }
    const bookingId = parseInt(id);

    switch (req.method) {
        case "GET":
            try {
                const booking = await prisma.booking.findUnique({
                    where: { id: bookingId },
                });
                if (!booking) {
                    return res
                        .status(404)
                        .json({ message: "Booking not found" });
                }
                return res.status(200).json(booking);
            } catch (error) {
                return res
                    .status(500)
                    .json({ message: "Error fetching booking", error });
            }
        case "PUT":
            try {
                const {
                    customerId,
                    listingId,
                    unitId,
                    bookingDate,
                    status,
                    payment,
                } = req.body;
                const updatedBooking = await prisma.booking.update({
                    where: { id: bookingId },
                    data: {
                        customerId,
                        listingId,
                        unitId,
                        bookingDate: bookingDate
                            ? new Date(bookingDate)
                            : undefined,
                        status,
                        payment,
                    },
                });
                return res.status(200).json(updatedBooking);
            } catch (error) {
                return res
                    .status(500)
                    .json({ message: "Error updating booking", error });
            }
        case "DELETE":
            try {
                await prisma.booking.delete({
                    where: { id: bookingId },
                });
                return res.status(204).end();
            } catch (error) {
                return res
                    .status(500)
                    .json({ message: "Error deleting booking", error });
            }
        default:
            res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
