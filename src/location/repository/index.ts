import { PrismaClient } from "../../prisma/client";
import { CreateLocation } from "../types";

export class locationRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async exist(id: number) {
        return 0 < await this.prisma.location.count({
            where: {
                id: id,
            },
        });
    }

    async existCombination(block: string, room: string) {
        return 0 < await this.prisma.location.count({
            where: {
                block: block,
                room: room,
            },
        });
    }

    async create(data: CreateLocation) {
        return this.prisma.location.create({
            data,
        });
    }

    async delete(id: number) {
        return this.prisma.location.delete({
            where: { id },
        });
    }

    async find(id: number) {
        return this.prisma.location.findUnique({
            where: { id },
        });
    }

    async list({skip, take}: {skip?: number, take?: number}) {
        return this.prisma.location.findMany({
            skip,
            take,
        });
    }

    async update(id: number, data: Partial<CreateLocation>) {
        return this.prisma.location.update({
            where: { id },
            data,
        });
    }

}