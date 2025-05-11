import { ROLE } from "../../enums";
import { PrismaClient } from "../../prisma/client";
import * as bcrypt from "bcrypt";

export class authRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async existsUser(email: string) {
        return 0 < await this.prisma.user.count({
            where: {
                email: email,
            },
        });
    }

    async login(email: string, password: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (!user) {
            return null;
        }

        if (!this.validPassword(password, user.password)) {
            return null;
        }

        return user;
    }

    async register(email: string, password: string) {
        const hashedPassword = await this.hashPassword(password);
        if (await this.existsUser(email)) {
            return null;
        }

        const user = await this.prisma.user.create({
            data: {
                name: email.split("@")[0],
                email: email,
                password: hashedPassword,
                Updater: {
                    create: {}
                }
            },
        });

        return user;
    }

    async validPassword(password: string, hashedPassword: string) {
        return bcrypt.compare(password, hashedPassword);
    }

    async hashPassword(password: string) {
        return await bcrypt.hash(password, 10);
    }

}