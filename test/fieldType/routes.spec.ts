import { describe, expect, it } from "bun:test";
import { authAdmin, authMaster, authUser } from "../auth/routes.spec";

describe("FieldType Routes", () => {

    describe("Create", () => {
        it("should return 401 without token", async () => {
            const response = await fetch('http://localhost:3000/field-type/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Cookie': authMaster
                },
                body: JSON.stringify({
                    id: 1,
                    name: 'STRING',
                    type: 'STRING',
                    optional: true,
                    equipamentTypeId: 1,
                    updatedById: 1
                })
            });

            expect(response.status).toBe(401);
            const data = await response.json();
            expect(data).toMatchObject({
                message: expect.any(String),
            });
        })

        it("should return 405 without MASTER token(admin)", async () => {
            const response = await fetch('http://localhost:3000/field-type/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': authAdmin
                },
                body: JSON.stringify({
                    id: 1,
                    name: 'STRING',
                    type: 'STRING',
                    optional: true,
                    equipamentTypeId: 1,
                    updatedById: 1
                })
            });

            expect(response.status).toBe(405);
            const data = await response.json();
            expect(data).toMatchObject({
                message: expect.any(String),
            });
        })

        it("should return 405 without MASTER token(user)", async () => {
            const response = await fetch('http://localhost:3000/field-type/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': authUser
                },
                body: JSON.stringify({
                    id: 1,
                    name: 'STRING',
                    type: 'STRING',
                    optional: true,
                    equipamentTypeId: 1,
                    updatedById: 1
                })
            });

            expect(response.status).toBe(405);
            const data = await response.json();
            expect(data).toMatchObject({
                message: expect.any(String),
            });
        })

        it("should return 200 creating a Field Type", async () => {

            const id: number = 1;
            const found = await fetch(`http://localhost:3000/field-type/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': authMaster
                },
            });

            if (found.status == 200) {
                const data = await found.json();
                expect(data).toMatchObject({
                    id: expect.any(Number),
                    name: expect.any(String),
                    type: expect.any(String),
                    optional: expect.any(Boolean),
                    equipamentTypeId: expect.any(Number),
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                });

                if (data.updatedById === null) {
                    expect(data.updatedById).toBeNull()
                } else {
                    expect(data.updatedById).toEqual(expect.any(Number))
                }

                expect(data.id).toBe(1);
                expect(data.name).toBe('ReportType');
                expect(data.equipamentTypeId).toBe(1);
                return;
            }

            const response = await fetch('http://localhost:3000/field-type/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': authMaster
                },
                body: JSON.stringify({
                    id: 1,
                    name: 'ReportType',
                    type: 'STRING',
                    optional: true,
                    equipamentTypeId: 1,
                })
            });

            expect(response.status).toBe(200);
            const data = await response.json();
            expect(data).toMatchObject({
                message: expect.any(String),
            });
        })

        it("should return 409 creating an existent combination [ name, equipamentTypeId ]", async () => {
            const response = await fetch('http://localhost:3000/field-type/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': authMaster
                },
                body: JSON.stringify({
                    id: 1,
                    name: 'ReportType',
                    type: 'STRING',
                    optional: true,
                    equipamentTypeId: 1,
                    updatedById: 1
                })
            });

            expect(response.status).toBe(409);
            const data = await response.json();
            expect(data).toMatchObject({
                message: expect.any(String),
            });
        })

    })

    describe("Find", () => {
        it("should return 401 without token", async () => {
            const id: number = 1;
            const response = await fetch(`http://localhost:3000/field-type/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Cookie': authMaster
                },
            });

            expect(response.status).toBe(401);
            const data = await response.json();
            expect(data).toMatchObject({
                message: expect.any(String),
            });
        })

        it("should return 404 when object doesnt exist", async () => {
            const id: number = 2;
            const response = await fetch(`http://localhost:3000/field-type/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Cookie': authMaster
                },
            });

            expect(response.status).toBe(404);
            const data = await response.json();
            expect(data).toMatchObject({
                message: expect.any(String),
            });
        })

        it("should return 200 with lower ROLE token", async () => {
            const id: number = 2;
            const response = await fetch(`http://localhost:3000/field-type/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': authUser
                },
            });

            expect(response.status).toBe(200);
            const data = await response.json();
            expect(data).toMatchObject({
                id: expect.any(Number),
                name: expect.any(String),
                type: expect.any(String),
                optional: expect.any(Boolean),
                equipamentTypeId: expect.any(Number),
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
            });

            if (data.updatedById === null) {
                expect(data.updatedById).toBeNull()
            } else {
                expect(data.updatedById).toEqual(expect.any(Number))
            }
        })
    })

    describe("List", () => {
        it("should return 401 without token", async () => {
            const response = await fetch(`http://localhost:3000/field-type/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Cookie': authMaster
                },
            });

            expect(response.status).toBe(401);
            const data = await response.json();
            expect(data).toMatchObject({
                message: expect.any(String),
            });
        })

        it("should return 200 with lower ROLE token", async () => {
            const response = await fetch(`http://localhost:3000/field-type/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': authUser
                },
            });

            expect(response.status).toBe(200);
            const data = await response.json();
            expect(data).toBeArray();
            for (const item of data) {
                expect(item).toMatchObject({
                    id: expect.any(Number),
                    max: expect.any(String),
                    min: expect.any(String),
                    name: expect.any(String),
                    type: expect.any(String),
                    optional: expect.any(Boolean),
                    equipamentTypeId: expect.any(Number),
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                });

                if (item.updatedById === null) {
                    expect(item.updatedById).toBeNull()
                } else {
                    expect(item.updatedById).toEqual(expect.any(Number))
                }
            }
        })
    })

    describe("Update", () => {

        it("should return 401 without token", async () => {
            const id: number = 1;
            const response = await fetch(`http://localhost:3000/field-type/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Cookie': authMaster
                },
                body: JSON.stringify({
                    id: 1,
                    name: 'ReportType',
                    type: 'STRING',
                    optional: true,
                    equipamentTypeId: 1,
                })
            });
            expect(response.status).toBe(401);
            const data = await response.json();
            expect(data).toMatchObject({
                message: expect.any(String),
            });
        })

        it("should return 405 without MASTER token(admin)", async () => {
            const id: number = 1;
            const response = await fetch(`http://localhost:3000/field-type/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': authAdmin
                },
                body: JSON.stringify({
                    id: 1,
                    name: 'ReportType',
                    type: 'STRING',
                    optional: true,
                    equipamentTypeId: 1,
                })
            });
            expect(response.status).toBe(405);
            const data = await response.json();
            expect(data).toMatchObject({
                message: expect.any(String),
            });
        })

        it("should return 405 without MASTER token(user)", async () => {
            const id: number = 1;
            const response = await fetch(`http://localhost:3000/field-type/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': authUser
                },
                body: JSON.stringify({
                    id: 1,
                    name: 'ReportType',
                    type: 'STRING',
                    optional: true,
                    equipamentTypeId: 1,
                })
            });
            expect(response.status).toBe(405);
            const data = await response.json();
            expect(data).toMatchObject({
                message: expect.any(String),
            });
        })

        it("should return 404 when object doesnt exist", async () => {
            const id: number = 5;
            const response = await fetch(`http://localhost:3000/field-type/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': authMaster
                },
                body: JSON.stringify({
                    id: 1,
                    name: 'ReportType2',
                    type: 'STRING',
                    optional: true,
                    equipamentTypeId: 1,
                })
            });
            expect(response.status).toBe(404);
            const data = await response.json();
            expect(data).toMatchObject({
                message: expect.any(String),
            });
        })

        // TODO: Create to test 409 with existent combination [ name, equipamentTypeId ]
        // it("should return 409 updating an existent combination", async () => {
        //     const id: number = 2;
        //     const response = await fetch(`http://localhost:3000/field-type/${id}`, {
        //         method: 'PUT',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Cookie': authMaster
        //         },
        //         body: JSON.stringify({
        //             id: 1,
        //             name: 'ReportType',
        //             type: 'STRING',
        //             optional: true,
        //             equipamentTypeId: 1,
        //         })
        //     });
        //     expect(response.status).toBe(401);
        //     const data = await response.json();
        //     expect(data).toMatchObject({
        //         message: expect.any(String),
        //     });
        // })
    })

})