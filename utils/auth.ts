import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import jwt from "jsonwebtoken";

export interface AuthenticatedRequest extends NextApiRequest {
    user?: {
        userId: number;
        email: string;
        role: string;
    };
}

export function withAuth(handler: NextApiHandler) {
    return async (req: AuthenticatedRequest, res: NextApiResponse) => {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res
                .status(401)
                .json({ message: "Authorization header missing" });
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            return res
                .status(401)
                .json({ message: "Authorization token missing" });
        }

        try {
            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET as string
            ) as {
                userId: number;
                email: string;
                role: string;
            };
            req.user = decoded;
            return handler(req, res);
        } catch (error) {
            return res
                .status(401)
                .json({ message: "Invalid or expired token", error: error });
        }
    };
}
