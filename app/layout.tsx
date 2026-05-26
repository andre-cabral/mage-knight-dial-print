
import type { Metadata } from 'next';
import '@/app/ui/reset.scss';
import '@/app/ui/global.scss';
import { HeaderItems } from './lib/interfaces/HeaderItems';
import Header from '@/app/ui/header/header';

export const metadata: Metadata = {
  title: 'Mage Knight Dial Printer',
  description: 'Web App to help print Mage Knight combat dials, both the internal dial and the top of the external dial.',
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode {

  const headerItems : Array<HeaderItems> = [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'Dial Top',
      link: '/dialtop',
    },
    {
      text: 'Dial',
      link: '/dial',
    },
  ];

  return (
    <html lang="en">
      <body className='bodyGlobal'>
        <Header
          title='Mage Knight'
          subtitle='Dial Printer'
          items={headerItems}
        />
        {children}
      </body>
    </html>
  );
}
