import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Providers } from './providers';

export const metadata = {
  title: 'Web Tools',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='antialiased'>
        <Providers>
          <div className='flex flex-col min-h-screen'>
            <Navbar />

            <main className='flex-grow p-4'>{children}</main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
