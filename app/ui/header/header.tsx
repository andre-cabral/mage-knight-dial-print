import styles from './header.module.scss';
import Link from 'next/link';
import { HeaderItems } from '@/app/lib/interfaces/HeaderItems';

export default function Header({
  title = 'Mage Knight',
  subtitle = 'Dial Printer',
  items = [],
} : {
  title: string,
  subtitle: string,
  items: Array<HeaderItems>,
}): React.ReactNode {

  return(
    <div className={styles.header}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>
      { items.length > 0 &&
        <ul className={styles.items}>
          {
            items.map((item, index) => {
              return (
                <li key={`headeritem${index}`} className={styles.item}>
                   <Link
                      href={item.link}
                      className={styles.itemLink}
                    >
                      {item.text}
                    </Link>
                </li>
              );
            })
          }
        </ul>
      }
    </div>
  );
}
