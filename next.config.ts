import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    swcMinify: true,
    optimizeFonts: true,
    optimizeCss: true,
    legacyBrowsers: false,
    compress: true,
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);