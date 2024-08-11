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
};

export default nextConfig;
