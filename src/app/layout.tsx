import { Lato } from 'next/font/google';
import Script from 'next/script';
import '../styles/globals.css';
import '../styles/reset.css';

const dancing = Lato({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${dancing.className}`}>
        <Script
          strategy='beforeInteractive'
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_MAP_CLIENT_KEY}`}
        />
        {children}
      </body>
    </html>
  );
}
