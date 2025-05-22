// import Elysia from "elysia";
// import { authenticator } from "../../jwt";
// import { locationRepository } from "../repository";

// export const update = new Elysia({ name: "UpdateLocation" })
//     .use(authenticator)
//     .decorate("locationRepository", new locationRepository())
//     .put("/:id", ({ body, params, set, getInfo, locationRepository }) => {
//         return {
//             message: `Location with id ${params.id} updated successfully`,
//             data: body,
//         };
//     });