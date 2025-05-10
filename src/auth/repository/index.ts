import { PrismaClient } from "@prisma/client";

export class authRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }
}