import { PrismaClient } from "@/generated/prisma";

// Singleton pattern: prevents multiple Prisma Client instances in Next.js dev mode
// (hot-reloading creates new module instances; global persists across reloads)

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
