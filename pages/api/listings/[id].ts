import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query;
    if (typeof id !== "string") {
        return res.status(400).json({ message: "Invalid listing ID" });
    }
    const listingId = parseInt(id);

    switch (req.method) {
        case "GET":
            try {
                const listing = await prisma.listing.findUnique({
                    where: { id: listingId },
                });
                if (!listing) {
                    return res
                        .status(404)
                        .json({ message: "Listing not found" });
                }
                return res.status(200).json(listing);
            } catch (error) {
                return res
                    .status(500)
                    .json({ message: "Error fetching listing", error });
            }
        case "PUT":
            try {
                const {
                    vendorId,
                    type,
                    name,
                    address,
                    description,
                    facilities,
                    pricing,
                    images,
                } = req.body;
                const updatedListing = await prisma.listing.update({
                    where: { id: listingId },
                    data: {
                        vendorId,
                        type,
                        name,
                        address,
                        description,
                        facilities,
                        pricing,
                        images,
                    },
                });
                return res.status(200).json(updatedListing);
            } catch (error) {
                return res
                    .status(500)
                    .json({ message: "Error updating listing", error });
            }
        case "DELETE":
            try {
                await prisma.listing.delete({
                    where: { id: listingId },
                });
                return res.status(204).end();
            } catch (error) {
                return res
                    .status(500)
                    .json({ message: "Error deleting listing", error });
            }
        default:
            res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
