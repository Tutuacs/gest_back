import { describe, expect, it } from "bun:test";
import { authAdmin, authMaster, authUser } from "../auth/routes.spec";

describe("ReportType Routes", () => {

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
                    name: '',
                    type: '',
                    optional: true,
                    equipamentTypeId: 1,
                    createdAt: null,
                    updatedAt: null,
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
                    name: '',
                    type: '',
                    optional: true,
                    equipamentTypeId: 1,
                    createdAt: null,
                    updatedAt: null,
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
                    name: '',
                    type: '',
                    optional: true,
                    equipamentTypeId: 1,
                    createdAt: null,
                    updatedAt: null,
                    updatedById: 1
                })
            });

            expect(response.status).toBe(405);
            const data = await response.json();
            expect(data).toMatchObject({
                message: expect.any(String),
            });
        })

        it("should return 200 creating a Report Type", async () => {

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
                    updatedById: expect.any(Number)
                });

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
                    type: 'any',
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
                    type: '',
                    optional: true,
                    equipamentTypeId: 1,
                    createdAt: null,
                    updatedAt: null,
                    updatedById: 1
                })
            });

            expect(response.status).toBe(409);
            const data = await response.json();
            expect(data).toMatchObject({
                message: expect.any(String),
            });
        })

        it("should", async () => {

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

        it("should", async () => {

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

        it("should", async () => {

        })
    })

    describe("Update", () => {
        it("should", async () => {

        })
    })

})