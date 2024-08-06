/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gsiwqitheowbokrpqaci.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/cars/**",
      },
    ],
  },
  env: {
    SUPABASE_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzaXdxaXRoZW93Ym9rcnBxYWNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MjcyMTUsImV4cCI6MjAzNTAwMzIxNX0.g0-IonC9hTVMfQSfp45s_cKS4kT-EYg8M_-1VsMXfgM",
  },
};

export default nextConfig;
