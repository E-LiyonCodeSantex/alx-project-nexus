import handlers from "next-auth";
import { authOptions } from "@/lib/auth";

export const { GET, POST } = handlers(authOptions);
