import styles from './loading.module.scss';

export default function Loading(): React.ReactNode {

  return(
    <span className={styles.loader}></span>
  );
}
