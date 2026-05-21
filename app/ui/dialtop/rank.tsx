import styles from './rank.module.scss';

export default function Rank({
  rank,
}:{
  rank: string,
} ): React.ReactNode {

  if(rank === 'Weak') {
    return (
      <div className={styles.rank}>
        <div className={styles.star}></div>
      </div>
    );
  }
  if(rank === 'Standard') {
    return (
      <div className={styles.rank}>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
      </div>
    );
  }
  if(rank === 'Tough') {
    return (
      <div className={styles.rank}>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
      </div>
    );
  }

  return <></>;
}
