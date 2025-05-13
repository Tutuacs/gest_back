import jwt from "@elysiajs/jwt";
import Elysia from "elysia";
import { jwtPayloadSchema } from "./type";

type CookieValue = {
    token: string;
    info: {
        user: jwtPayloadSchema;
    }
};

export const authenticator = new Elysia({ name: "Authenticator" })
    .use(
        jwt({
            name: "jwt",
            info: {
                user: jwtPayloadSchema,
            },
            expiresIn: "7d",
            secret: process.env.JWT_SECRET || "secret",
        })
    )
    .derive({as: 'scoped'}, ({ jwt, cookie: { auth } }) => {
        return {

            async logOut() {
                return auth.remove();
            },

            async setInfo(user: jwtPayloadSchema) {

                const info = JSON.stringify({user: user});
                const token = await jwt.sign({ info, });
                const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

                const value: CookieValue = { token, info: {user: user} };

                return auth.set({
                    value: JSON.stringify(value),
                    httpOnly: true,
                    secure: true,
                    sameSite: "strict",
                    expires,
                });
            },

            async getInfo(): Promise<jwtPayloadSchema | null> {
                try {
                    if (!auth.value) return null;

                    // Parse cookie
                    const parsedCookie: CookieValue = JSON.parse(auth.value);

                    // Verify JWT
                    const verified = await jwt.verify(parsedCookie.token);
                    if (!verified) return null;

                    // Type guard for payload structure
                    const isPayloadValid = (
                        payload: unknown
                    ): payload is { info: { user: jwtPayloadSchema } } => {
                        return (
                            typeof payload === "object" &&
                            payload !== null &&
                            "info" in payload &&
                            typeof (payload as any).info === "object" &&
                            "user" in (payload as any).info
                        );
                    };

                    // Validate payload structure
                    if (isPayloadValid(verified)) {
                        return verified.info.user;
                    }

                    // Fallback to cookie data if JWT structure mismatch
                    if (parsedCookie?.info?.user) {
                        return parsedCookie.info.user;
                    }

                    return null;
                } catch (error) {
                    console.error("Error in getInfo:", error);
                    return null;
                }
            }

        };
    });