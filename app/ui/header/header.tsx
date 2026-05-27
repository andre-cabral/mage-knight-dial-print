'use client';
import styles from './header.module.scss';
import Menu from './menu';
import { menuItemsList } from '@/app/lib/menu/menu';

export default function Header({
  title = 'Mage Knight',
  subtitle = 'Dial Printer',
  currentPage = '',
} : {
  title?: string,
  subtitle?: string,
  currentPage: string,
}): React.ReactNode {

  return(
    <div className={styles.header}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>
      <Menu currentPage={currentPage} items={menuItemsList} />
    </div>
  );
}
