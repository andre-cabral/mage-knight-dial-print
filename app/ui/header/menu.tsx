import styles from './menu.module.scss';
import Link from 'next/link';
import { MenuItems } from '@/app/lib/interfaces/MenuItems';

export default function Menu({
  currentPage,
  items = [],
} : {
  currentPage: string,
  items: Array<MenuItems>,
}): React.ReactNode {
  return(
    <>
      { items.length > 0 &&
        <ul className={styles.items}>
          {
            items.map((item, index) => {
              if(currentPage!== item.link) {
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
              } else {
                return (
                  <li key={`headeritem${index}`} className={styles.item}>
                    <p className={styles.currentlink}>
                      {item.text}
                    </p>
                  </li>
                );
              }
            })
          }
        </ul>
      }
    </>
  );
}
