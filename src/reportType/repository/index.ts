import { PrismaClient } from "@prisma/client";

export class reportTypeRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }
}