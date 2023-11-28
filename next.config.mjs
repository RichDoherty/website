import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    devIndicators: {
        buildActivity: false,
    },
};

export default withContentlayer(nextConfig);
