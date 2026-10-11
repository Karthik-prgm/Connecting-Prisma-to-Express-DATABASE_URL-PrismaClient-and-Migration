import { PrismaClient } from "@prisma/client";

// Reuse one PrismaClient instance across the Express application.
const prisma = new PrismaClient();

export default prisma;
