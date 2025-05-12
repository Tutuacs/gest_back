import { PrismaClient } from "../../prisma/client";
import { FieldType } from "../types";

export class fieldTypeRepository {

    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async exist(id: number) {
        return 0 < await this.prisma.fieldType.count({
            where: {
                id: id,
            },
        });
    }

    async create(data: FieldType) {
        return await this.prisma.fieldType.create({
            data,
        });
    }

    async delete(id: number) {
        return await this.prisma.fieldType.delete({
            where: {
                id: id,
            },
        });
    }

    async find(id: number) {
        return await this.prisma.fieldType.findUnique({
            where: {
                id: id,
            },
        });
    }

    async list({ skip, take }: {skip?: number , take?: number }) {
        return await this.prisma.fieldType.findMany({
            skip,
            take,
        });
    }

    async update(id: number, data: Partial<FieldType>) {
        return await this.prisma.fieldType.update({
            where: {
                id: id,
            },
            data,
        });
    }

}