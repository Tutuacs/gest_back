import jwt from "@elysiajs/jwt";
import Elysia, { t } from "elysia";
import { jwtPayloadSchema } from "./type";

type CookieValue = {
    token: string;
    info: {
        user: jwtPayloadSchema;
    }
};

export const authenticator = new Elysia({ name: "Authenticator" })
    .guard({
        as: "scoped",
        response: {
            405: t.Object({
                message: t.String({ default: "Method Not Allowed, by Role" }),
            }),
            401: t.Object({
                message: t.String({ default: "Unauthorized" }),
            }),
        }
    })
    .use(
        jwt({
            info: {
                user: jwtPayloadSchema,
            },
            expiresIn: "7d",
            secret: "secret",
            // secret: process.env.JWT_SECRET || "secret",
        })
    )
    .derive({ as: 'scoped' }, ({ jwt, cookie: { auth, userInfo } }) => {
        return {

            async logOut() {
                auth.remove()
                userInfo.remove();
                return
            },

            async setInfo(user: jwtPayloadSchema) {

                const info = JSON.stringify({ user: user });
                const token = await jwt.sign({ info, });
                const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

                const value: CookieValue = { token, info: { user: user } };

                userInfo.set({
                    value: JSON.stringify(value.info.user),
                    httpOnly: false,
                    expires,
                })

                auth.set({
                    value: JSON.stringify(value),
                    httpOnly: true,
                    secure: true,
                    sameSite: "strict",
                    expires,
                });

                return
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
    })