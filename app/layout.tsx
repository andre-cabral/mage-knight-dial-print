
import type { Metadata } from 'next';
import '@/app/ui/reset.scss';
import '@/app/ui/global.scss';
import { Providers } from './lib/providers/providers';

export const metadata: Metadata = {
  title: 'Mage Knight Dial Printer',
  description: 'Web App to help print Mage Knight combat dials, both the internal dial and the top of the external dial.',
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode {

  return (
    <html lang="en">
      <body className='bodyGlobal'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
