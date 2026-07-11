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
      'Idoko Legacy Medical Courier | Healthcare Logistics & Medical Courier — Houston, TX',
    template: '%s | Idoko Legacy Medical Courier',
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

  authors: [{ name: 'Idoko Legacy Medical Courier' }],

  icons: {
    icon: '/favicon.png',
  },

  manifest: '/site.webmanifest',

  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Idoko Legacy Medical Courier',
    title:
      'Idoko Legacy Medical Courier | Healthcare Logistics & Medical Courier',
    description:
      'Secure, dependable, and time-critical medical courier services across Houston, Texas.',
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Idoko Legacy Medical Courier | Healthcare Logistics & Medical Courier',
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
      <body
        suppressHydrationWarning
        className="flex min-h-screen flex-col font-sans antialiased"
      >
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
