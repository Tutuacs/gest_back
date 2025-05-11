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

    async create(data: EquipamentType) {

        if (await this.existName(data.name)) {
            return null;
        }

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

    async list({skip, take}: {skip: number | undefined, take: number | undefined}) {
        return await this.prisma.equipamentType.findMany({
            skip,
            take,
        });
    }

    async update(id: number, data: EquipamentType) {
        return await this.prisma.equipamentType.update({
            where: {
                id: id,
            },
            data,
        });
    }


}