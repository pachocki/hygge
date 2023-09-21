export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/discover/trips", "/discover/reservations", "/discover/properties", "/discover/favorites"],
};
