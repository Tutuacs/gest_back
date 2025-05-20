import { PrismaClient } from "../../prisma";
import { CreateReportFieldValue } from "../types";

export class reportFieldRepository {

    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(data: CreateReportFieldValue) {
        return await this.prisma.reportField.create({
            data,
        });
    }

    async existField(reportFieldTypeId: number, reportId: number) {
        const field = await this.prisma.reportField.findFirst({
            where: {
                reportFieldTypeId,
                reportId,
            },
        });

        if (field) {
            return field.id;
        }
        return null;
    }

    // async existFieldById(id: number) {
    //     return await this.prisma.field.findUnique({
    //         where: {
    //             id,
    //         },
    //     });
    // }

    // async find(id: number) {
    //     return await this.prisma.field.findUnique({
    //         where: {
    //             id,
    //         },
    //     });
    // }

    // async list({skip, take}: {skip: number, take: number}) {
    //     return await this.prisma.field.findMany({
    //         skip,
    //         take,
    //     });
    // }

    async update(id: number, data: CreateReportFieldValue) {
        return await this.prisma.reportField.update({
            where: {
                id,
            },
            data: {
                value: data.value,
            }
        });
    }

    // async delete(id: number) {
    //     return await this.prisma.field.delete({
    //         where: {
    //             id,
    //         },
    //     });
    // }

}