import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop';
import CursorGlow from '@/components/ui/CursorGlow';
import PageTransition from '@/components/ui/PageTransition';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = 'https://www.idokolegacy.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      'Idoko Legacy LLC | Healthcare Logistics & Medical Courier — Houston, TX',
    template: '%s | Idoko Legacy LLC',
  },

  description:
    'Secure, dependable, and time-critical medical courier services for hospitals, laboratories, pharmacies, and healthcare organizations across Houston, Texas.',

  keywords: [
    'medical courier Houston',
    'healthcare logistics Texas',
    'STAT delivery',
    'laboratory sample transport',
    'HIPAA compliant courier',
  ],

  authors: [{ name: 'Idoko Legacy LLC' }],

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],

    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',

  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Idoko Legacy LLC',
    title: 'Idoko Legacy LLC | Healthcare Logistics & Medical Courier',
    description:
      'Secure, dependable, and time-critical medical courier services across Houston, Texas.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Idoko Legacy LLC | Healthcare Logistics & Medical Courier',
    description:
      'Secure, dependable, and time-critical medical courier services across Houston, Texas.',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#172554',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <CursorGlow />
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
