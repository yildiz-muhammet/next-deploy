/** @type {import('next').NextConfig} */
import withNextIntl from 'next-intl/plugin';
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    },
    env: {
        NEXT_PUBLIC_API_URL: "https://worderbee.netlify.app/",
    }
}

export default withNextIntl('./src/i18n.ts')(nextConfig);