import styles from './range.module.scss';
import { getRangeObjectByString } from '@/app/lib/dialtop/range';

export default function Range({
  rangeString,
}:{
  rangeString: string,
} ): React.ReactNode {
  const rangeObject = getRangeObjectByString(rangeString);
  const arrows = [];
  for (let i=0; i<rangeObject.targets; i++){
    arrows.push(<div className={styles.arrow} key={`range-arrow-${i}`}></div>);
  }

  return (
    <div className={styles.range}>
      <p className={styles.value}>{rangeObject.range}</p>
      {arrows}
    </div>
  );
}
