/** @type {import('next').NextConfig} */
import withNextIntl from 'next-intl/plugin';
const nextConfig = {
        reactStrictMode: true,
        compiler: {
            styledComponents: true
        },
        env: {
            // NEXT_PUBLIC_API_URL: "http://localhost:3000",
            NEXT_PUBLIC_API_URL: "https://worderbee.netlify.app",
        }
    }
    // const withNextIntl = require('next-intl/plugin')(
    //     './src/i18n.ts'
    // );
    // module.exports = withNextIntl(nextConfig)



export default withNextIntl('./src/i18n.ts')(nextConfig);