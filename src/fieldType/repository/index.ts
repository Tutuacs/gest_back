import { PrismaClient } from "@prisma/client";

export class fieldTypeRepository {

    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

}