import styles from './arc.module.scss';

export default function Arc({
  arcValue,
}:{
  arcValue: number,
} ): React.ReactNode {

  if(arcValue === 90) {
    return (
      <div className={styles.arc}>
        <div className={`${styles.end} ${styles.endLeft}`}></div>
        <div className={`${styles.end} ${styles.endRight}`}></div>
      </div>
    );
  }
  if(arcValue === 180) {
    return (
      <div className={`${styles.arc} ${styles.oneHundredEighty}`}>
        <div className={`${styles.end} ${styles.endLeft} ${styles.oneHundredEightyEndLeft}`}></div>
        <div className={`${styles.end} ${styles.endRight}`}></div>
      </div>
    );
  }
  if(arcValue === 270) {
    return (
      <div className={`${styles.arc} ${styles.twoHundredSeventy}`}>
        <div className={`${styles.end} ${styles.endLeft} ${styles.twoHundredSeventyEndLeft}`}></div>
        <div className={`${styles.end} ${styles.endRight} ${styles.twoHundredSeventyEndRight}`}></div>
      </div>
    );
  }

  return (<p>Error: invalid arc value</p>);
}
