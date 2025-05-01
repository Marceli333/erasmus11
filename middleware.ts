import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the current category from the URL
  const searchParams = request.nextUrl.searchParams
  const category = searchParams.get("category")

  // If there's a category parameter, filter the apps on the server
  if (category) {
    // We'll let the client-side handle the filtering
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/",
}
