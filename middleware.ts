import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
    publicRoutes: ["/", "/api/webhook"],
    debug: false
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}