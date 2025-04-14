import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface JwtPayload {
  exp: number;
  _id: string;
  username: string;
  email: string;
  fullName: string;
}

const isTokenValid = (token: string) => {
  const decodedToken = jwtDecode<JwtPayload>(token);
  const expiryTime = decodedToken.exp * 1000;
  const currentTime = Date.now();
  return currentTime < expiryTime;
};

export function middleware(request: NextRequest) {
  try {
    const token = request.cookies.get("accessToken")?.value;
    const isLoginPage = request.nextUrl.pathname === "/login";

    if (isLoginPage) {
      if (token && isTokenValid(token)) {
        const controlPanelUrl = new URL(
          "/control-panel",
          request.nextUrl.origin
        );
        return NextResponse.redirect(controlPanelUrl.toString());
      }
    } else {
      if (!token || !isTokenValid(token)) {
        throw new Error("Invalid token");
      }
    }
  } catch (error) {
    console.log(error);
    const loginUrl = new URL("/login", request.nextUrl.origin);
    return NextResponse.redirect(loginUrl.toString());
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/control-panel/:path*", "/login"],
};
