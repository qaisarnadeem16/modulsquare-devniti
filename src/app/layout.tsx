import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import './globals.css';
import { Instrument_Serif, Oswald, Poppins } from 'next/font/google';

export const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrumentSerif',
  style: ['italic'],
});

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ['latin'],
  display: 'swap',
});

export const oswald = Oswald({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const baseTitle = locale === 'fr' ? 'Accueil - Solutions Modulaires' : 'Home - Modular Solutions';
  const description = locale === 'fr' ? 'Bienvenue sur notre site de solutions modulaires.' : 'Welcome to our modular solutions website.';

  return {
    title: baseTitle,
    description: description,
    keywords: 'home, modular, solutions, welcome, gallery',
    openGraph: {
      title: baseTitle,
      description: description,
      url: `${baseUrl}/${locale}/`,
      images: [`${baseUrl}/${locale}-og-image.jpg`],
      type: 'website',
    },
    robots: { index: true, follow: true },
    canonical: `${baseUrl}/${locale}/`,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // if (!hasLocale(routing.locales, locale)) {
  //   notFound();
  // }

  return (
    <html
      lang={locale}
      className={`${poppins.variable} ${instrumentSerif.variable} ${oswald.variable}`}
    >
      <body>
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}