import { PrismaClient } from "../../prisma/client";
import { CreateEventType } from "../types";


export class eventTypeRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async existName(name: string) {
        return 0 < await this.prisma.eventType.count({
            where: {
                name: name,
            },
        });
    }

    async licenseRelation(id: number, equipamentTypeId: number) {
        return this.prisma.licenseType.findFirst({
            where: {
                id: id,
                equipamentTypeId: equipamentTypeId,
            },
        })
    }

    async reportRelation(id: number, equipamentTypeId: number) {
        return this.prisma.reportType.findFirst({
            where: {
                id: id,
                equipamentTypeId: equipamentTypeId,
            },
        })
    }

    async connectActiveLicense(id: number, eventTypeId: number) {
        return await this.prisma.eventType.update({
            where: {
                id: eventTypeId,
            },
            data: {
                activateLicenses: {
                    connect: {
                        id: id,
                    }
                }
            }
        });
    }

    async connectDeactivateLicense(id: number, eventTypeId: number) {
        return await this.prisma.eventType.update({
            where: {
                id: eventTypeId,
            },
            data: {
                deactivateLicenses: {
                    connect: {
                        id: id,
                    }
                }
            }
        });
    }

    async connectActiveReport(id: number, eventTypeId: number) {
        return await this.prisma.eventType.update({
            where: {
                id: eventTypeId,
            },
            data: {
                activateReports: {
                    connect: {
                        id: id,
                    }
                }
            }
        });
    }

    async connectDeactivateReport(id: number, eventTypeId: number) {
        return await this.prisma.eventType.update({
            where: {
                id: eventTypeId,
            },
            data: {
                deactivateReports: {
                    connect: {
                        id: id,
                    }
                }
            }
        });
    }

    async disconnectActiveLicense(id: number, eventTypeId: number) {
        return await this.prisma.eventType.update({
            where: {
                id: eventTypeId,
            },
            data: {
                activateLicenses: {
                    disconnect: {
                        id: id,
                    }
                }
            }
        });
    }

    async disconnectDeactivateLicense(id: number, eventTypeId: number) {
        return await this.prisma.eventType.update({
            where: {
                id: eventTypeId,
            },
            data: {
                deactivateLicenses: {
                    disconnect: {
                        id: id,
                    }
                }
            }
        });
    }

    async disconnectActiveReport(id: number, eventTypeId: number) {
        return await this.prisma.eventType.update({
            where: {
                id: eventTypeId,
            },
            data: {
                activateReports: {
                    disconnect: {
                        id: id,
                    }
                }
            }
        });
    }

    async disconnectDeactivateReport(id: number, eventTypeId: number) {
        return await this.prisma.eventType.update({
            where: {
                id: eventTypeId,
            },
            data: {
                deactivateReports: {
                    disconnect: {
                        id: id,
                    }
                }
            }
        });
    }

    async existCombination(name: string, equipamentTypeId: number) {
        return 0 < await this.prisma.eventType.count({
            where: {
                name: name,
                equipamentTypeId: equipamentTypeId,
            },
        });
    }

    async exist(id: number) {
        return 0 < await this.prisma.eventType.count({
            where: {
                id: id,
            },
        });
    }

    async canUpdate(id: number, equipamentTypeId: number, name: string) {
        return await this.prisma.eventType.count({
            where: {
                id: id,
                name: name,
                equipamentTypeId: equipamentTypeId,
            },
        });
    }

    async create(data: CreateEventType) {
        return await this.prisma.eventType.create({
            data,
        });
    }

    async delete(id: number) {
        return await this.prisma.eventType.delete({
            where: {
                id: id,
            },
        });
    }

    async find(id: number) {
        return await this.prisma.eventType.findUnique({
            where: {
                id: id,
            },
            include: {
                activateLicenses: {
                    select: {
                        id: true,
                        name: true,
                        unvalidOnMoviment: true,
                        description: true,
                    }
                },
                deactivateLicenses: {
                    select: {
                        id: true,
                        name: true,
                        unvalidOnMoviment: true,
                        description: true,
                    }
                },
                activateReports: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                    }
                },
                deactivateReports: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                    }
                },
            }
        });
    }

    async list({ skip, take }: { skip?: number, take?: number }) {
        return await this.prisma.eventType.findMany({
            skip,
            take,
        });
    }

    async update(id: number, data: Partial<CreateEventType>) {
        return await this.prisma.eventType.update({
            where: {
                id: id,
            },
            data: {
                name: data.name,
                description: data.description,
                changeEquipamentStatusTo: data.changeEquipamentStatusTo,
            }
        });
    }

}