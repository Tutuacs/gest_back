import { PrismaClient } from "@prisma/client";

export class licenseTypeRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

}