import { PrismaClient } from "../../prisma/client";
import { CreateEquipamentType, EquipamentType } from "../types";


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

    async canUpdate(id: number, name: string) {
        return await this.prisma.equipamentType.count({
            where: {
                id: id,
                name: name,
            },
        });
    }

    async create(data: CreateEquipamentType) {
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
            include: {
                fieldType: true,
                licenseType: true,
                reportType: true,
                eventType: true,
            }
        });
    }

    async list({skip, take}: {skip?: number , take?: number }) {
        return await this.prisma.equipamentType.findMany({
            skip,
            take,
        });
    }

    async update(id: number, data: Partial<CreateEquipamentType>) {
        return await this.prisma.equipamentType.update({
            where: {
                id: id,
            },
            data,
        });
    }


}