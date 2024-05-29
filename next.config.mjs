/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ['cdn.builder.io','builder.io','app.visily.ai'],
    },
};

export default nextConfig;
