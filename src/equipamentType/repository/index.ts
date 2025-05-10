import { PrismaClient } from "@prisma/client";


export class EquipamentTypeRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

}