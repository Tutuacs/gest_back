import { PrismaClient } from "../../prisma";
import { CreateFieldValue } from "../types";

export class fieldRepository {

    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(data: CreateFieldValue) {
        return await this.prisma.field.create({
            data,
        });
    }

    async existField(fieldTypeId: number, equipamentId: number) {
        const field = await this.prisma.field.findFirst({
            where: {
                fieldTypeId,
                equipamentId,
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

    async update(id: number, data: CreateFieldValue) {
        return await this.prisma.field.update({
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