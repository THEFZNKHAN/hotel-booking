import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case "GET":
            try {
                const listings = await prisma.listing.findMany();
                return res.status(200).json(listings);
            } catch (error) {
                return res
                    .status(500)
                    .json({ message: "Error fetching listings", error });
            }
        case "POST":
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

                if (
                    !vendorId ||
                    !type ||
                    !name ||
                    !address ||
                    !description ||
                    !facilities ||
                    !pricing
                ) {
                    return res
                        .status(400)
                        .json({ message: "Missing required fields" });
                }

                const newListing = await prisma.listing.create({
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
                return res.status(201).json(newListing);
            } catch (error) {
                return res
                    .status(500)
                    .json({ message: "Error creating listing", error });
            }
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
