import { Barlow_Condensed, Inter } from 'next/font/google';
import Script from 'next/script';
import { env } from '@/lib/env';
import { site } from '@/config/site';
import SkipLink from '@/components/layout/SkipLink';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import StickyCta from '@/components/layout/StickyCta';
import ClickTracker from '@/components/layout/ClickTracker';
import '@/styles/globals.css';

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
  variable: '--font-barlow',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

/** @type {import('next').Metadata} */
export const metadata = {
  metadataBase: new URL(env.siteUrl),
  applicationName: site.brandFull,
  authors: [{ name: site.name }],
  creator: site.name,
  formatDetection: { telephone: false },
  // favicon.svg no se declara: es un PNG incrustado de 37 KB (pendiente: vector y versión plana del logo).
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
};

/** @type {import('next').Viewport} */
export const viewport = {
  themeColor: '#0E0E0E',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const plausibleDomain = env.analytics === 'plausible' ? new URL(env.siteUrl).hostname : null;
  return (
    <html lang="es" className={`${barlow.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Activa los revelados solo cuando hay JS (sin JS, todo el contenido es visible). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "if('IntersectionObserver' in window)document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <SkipLink />
        <SiteHeader />
        <main id="contenido" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <StickyCta />
        {env.analytics ? <ClickTracker /> : null}
        {plausibleDomain ? (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
