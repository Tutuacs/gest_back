import { PrismaClient } from "../../prisma/client";

export class reportFieldTypeRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

}