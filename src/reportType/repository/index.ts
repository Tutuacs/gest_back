import { PrismaClient } from "../../prisma/client";
import { ReportType } from "../types";

export class reportTypeRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async exist(id: number): Promise<boolean> {
        return 0 < await this.prisma.reportType.count({
            where: {
                id,
            },
        });
    }

    async create(data: ReportType) {
        return await this.prisma.reportType.create({
            data,
        });
    }

    async delete(id: number) {
        return await this.prisma.reportType.delete({
            where: { id },
        });
    }

    async find(id: number) {
        return await this.prisma.reportType.findUnique({
            where: { id },
        });
    }

    async list({ skip, take }: { skip?: number; take?: number }) {
        return await this.prisma.reportType.findMany({
            skip,
            take,
        });
    }

    async update(id: number, data: Partial<ReportType>) {
        return await this.prisma.reportType.update({
            where: { id },
            data,
        });
    }

}