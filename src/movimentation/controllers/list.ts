import Elysia from "elysia";

export const list = new Elysia({ name: "ListMovimentation" })
    .get("/", () => {
        return {
            message: "List movimentations successfully",
        };
    });