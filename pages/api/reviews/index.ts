import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case "GET":
            try {
                const reviews = await prisma.review.findMany();
                return res.status(200).json(reviews);
            } catch (error) {
                return res
                    .status(500)
                    .json({ message: "Error fetching reviews", error });
            }
        case "POST":
            try {
                const { bookingId, rating, comments } = req.body;

                if (!bookingId || rating === undefined) {
                    return res
                        .status(400)
                        .json({ message: "Missing required fields" });
                }

                const newReview = await prisma.review.create({
                    data: {
                        bookingId,
                        rating,
                        comments,
                    },
                });
                return res.status(201).json(newReview);
            } catch (error) {
                return res
                    .status(500)
                    .json({ message: "Error creating review", error });
            }
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
