import Navigation from '../components/navigation';
import type { Metadata } from 'next';
import '../app/styles/global.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Next Movies',
    default: '...Loading',
  },
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
