import { PrismaClient } from "../../prisma/client";
import { EquipamentType } from "../types";


export class equipamentTypeRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async existName(name: string) {
        return 0 < await this.prisma.equipamentType.count({
            where: {
                name: name,
            },
        });
    }

    async exist(id: number) {
        return 0 < await this.prisma.equipamentType.count({
            where: {
                id: id,
            },
        });
    }

    async create(data: EquipamentType) {
        return await this.prisma.equipamentType.create({
            data,
        });
    }

    async delete(id: number) {
        return await this.prisma.equipamentType.delete({
            where: {
                id: id,
            },
        });
    }

    async find(id: number) {
        return await this.prisma.equipamentType.findUnique({
            where: {
                id: id,
            },
        });
    }

    async list({skip, take}: {skip?: number , take?: number }) {
        return await this.prisma.equipamentType.findMany({
            skip,
            take,
        });
    }

    async update(id: number, data: Partial<EquipamentType>) {
        return await this.prisma.equipamentType.update({
            where: {
                id: id,
            },
            data,
        });
    }


}