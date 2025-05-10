import { PrismaClient } from "@prisma/client";

export class movimentationRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }
}

