import { PrismaClient } from "../../prisma/client";

export class userRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }
}