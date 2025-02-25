import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query;
    if (typeof id !== "string") {
        return res.status(400).json({ message: "Invalid review ID" });
    }
    const reviewId = parseInt(id);

    switch (req.method) {
        case "GET":
            try {
                const review = await prisma.review.findUnique({
                    where: { id: reviewId },
                });
                if (!review) {
                    return res
                        .status(404)
                        .json({ message: "Review not found" });
                }
                return res.status(200).json(review);
            } catch (error) {
                return res
                    .status(500)
                    .json({ message: "Error fetching review", error });
            }
        case "PUT":
            try {
                const { rating, comments } = req.body;
                const updatedReview = await prisma.review.update({
                    where: { id: reviewId },
                    data: { rating, comments },
                });
                return res.status(200).json(updatedReview);
            } catch (error) {
                return res
                    .status(500)
                    .json({ message: "Error updating review", error });
            }
        case "DELETE":
            try {
                await prisma.review.delete({
                    where: { id: reviewId },
                });
                return res.status(204).end();
            } catch (error) {
                return res
                    .status(500)
                    .json({ message: "Error deleting review", error });
            }
        default:
            res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
