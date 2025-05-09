import Elysia from "elysia";

export const delet = new Elysia({ name: "DeleteReportFieldType" })
    .delete("/:id", ({ params: { id } }) => {
        return {
            message: `Report field type with id ${id} deleted successfully`,
        };
    });