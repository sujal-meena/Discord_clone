import { PrismaClient } from "@prisma/client";

declare global{
    var prisma: PrismaClient | undefined;
};
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
 // Hack to stop making new prisma client on every hotreload by appending the prisma client to globalThis variable which is not affected by hotreload