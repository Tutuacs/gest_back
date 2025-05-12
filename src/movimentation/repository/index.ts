import { PrismaClient } from "../../prisma/client";
import { Movimentation } from "../types";

export class movimentationRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async exist(id: number) {
        return 0 < await this.prisma.movimentation.count({
            where: {
                id: id,
            },
        });
    }

    async create(data: Movimentation) {
        return this.prisma.movimentation.create({
            data,
        });
    }

    async delete(id: number) {
        return this.prisma.movimentation.delete({
            where: { id },
        });
    }

    async find(id: number) {
        return this.prisma.movimentation.findUnique({
            where: { id },
        });
    }

    async list({ skip, take }: { skip?: number; take?: number }) {
        return this.prisma.movimentation.findMany({
            skip,
            take,
        });
    }

    async update(id: number, data: Partial<Movimentation>) {
        return this.prisma.movimentation.update({
            where: { id },
            data,
        });
    }

}

