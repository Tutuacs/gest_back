import { PrismaClient } from "../../prisma/client";
import { ReportFieldType } from "../types";

export class reportFieldTypeRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async exist(id: number): Promise<boolean> {
        return 0 < await this.prisma.reportFieldType.count({
            where: {
                id: id,
            },
        });
    }

    async create(data: ReportFieldType) {
        return this.prisma.reportFieldType.create({
            data,
        });
    }

    async delete(id: number) {
        return this.prisma.reportFieldType.delete({
            where: {
                id,
            }
        });
    }

    async find(id: number) {
        return this.prisma.reportFieldType.findUnique({
            where: {
                id,
            }
        });
    }

    async list({skip, take}: {skip?: number, take?: number}) {
        return this.prisma.reportFieldType.findMany({
            skip,
            take,
        });
    }

    async update(id: number, data: Partial<ReportFieldType>) {
        return this.prisma.reportFieldType.update({
            where: {
                id,
            },
            data: data,
        });
    }

}