import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { listingId } = req.query;

    if (typeof listingId !== "string") {
        return res.status(400).json({ message: "Invalid listing ID" });
    }

    switch (req.method) {
        case "GET":
            try {
                const units = await prisma.unit.findMany({
                    where: { listingId: parseInt(listingId) },
                });
                return res.status(200).json(units);
            } catch (error) {
                return res
                    .status(500)
                    .json({ message: "Error fetching units", error });
            }
        default:
            res.setHeader("Allow", ["GET"]);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
