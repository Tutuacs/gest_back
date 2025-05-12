import { PrismaClient } from "../../prisma/client";
import { LicenseType } from "../types";

export class licenseTypeRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async exist(id: number) {
        return 0 < await this.prisma.licenseType.count({
            where: {
                id: id,
            },
        });
    }

    async existCombination(name: string, equipamentTypeId: number) {
        return 0 < await this.prisma.licenseType.count({
            where: {
                name: name,
                equipamentTypeId: equipamentTypeId,
            },
        });
    }

    async create(data: LicenseType) {
        return this.prisma.licenseType.create({
            data,
        });
    }

    async delete(id: number) {
        return this.prisma.licenseType.delete({
            where: { id },
        });
    }

    async find(id: number) {
        return this.prisma.licenseType.findUnique({
            where: { id },
        });
    }

    async list({skip, take}: {skip?: number, take?: number}) {
        return this.prisma.licenseType.findMany({
            skip,
            take,
        });
    }

    async update(id: number, data: Partial<LicenseType>) {
        return this.prisma.licenseType.update({
            where: { id },
            data,
        });
    }

}