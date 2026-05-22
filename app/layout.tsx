import { DM_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="overflow-x-hidden bg-white font-sans text-base leading-loose text-slate-600 antialiased">
        {children}
      </body>
    </html>
  );
}
