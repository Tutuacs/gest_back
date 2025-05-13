import Elysia from "elysia";
import { validationSchema } from "./validation/login";
import { authenticator } from "../../jwt";
import { authRepository } from "../repository";
import { jwtPayloadSchema } from "../../jwt/type";

export const login = new Elysia({ name: "Login" })
    .use(authenticator)
    .decorate("authRepository", new authRepository())
    .post("/login", async({ body, authRepository, set, setInfo }) => {

        const login = await authRepository.login(body.email);

        if (!login) {
            set.status = 401;
            return {
                message: "Invalid email",
            };
        }
        const valid = await authRepository.validPassword(body.password, login.password);
        if (!valid) {
            set.status = 401;
            return {
                message: "Invalid password",
            };
        }

        const userInfo: jwtPayloadSchema = {
            user: {
                id: login.id,
                name: login.name,
                email: login.email,
                role: login.role,
            }
        }

        await setInfo(userInfo);

        set.status = 200;

        return {
            user: userInfo.user,
        };

    }, validationSchema)