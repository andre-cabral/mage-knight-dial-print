import styles from './collection.module.scss';
import { getCollectionObjectByFullName } from '@/app/lib/dialtop/collection';

export default function Collection({
  collection,
  miniatureNumber,
}:{
  collection: string,
  miniatureNumber: string,
} ): React.ReactNode {
  const collectionString = getCollectionObjectByFullName(collection.trim())['CollectionClass'].trim();

  return (
    <div className={styles.container}>
      <div className={`${styles.collection} ${styles[`${collectionString}`]}`}></div>
      <p className={styles.miniatureNumber}>{miniatureNumber}</p>
    </div>
  );
}
