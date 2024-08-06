import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

const SUPABASE_URL = "https://gsiwqitheowbokrpqaci.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzaXdxaXRoZW93Ym9rcnBxYWNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MjcyMTUsImV4cCI6MjAzNTAwMzIxNX0.g0-IonC9hTVMfQSfp45s_cKS4kT-EYg8M_-1VsMXfgM";

export async function updateSession(request) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          request.cookies.set(name, value)
        );
        supabaseResponse = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        );
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    const url = request.nextUrl;
    url.pathname = "/login";
    return NextResponse.redirect(url.href);
  }

  return supabaseResponse;
}
