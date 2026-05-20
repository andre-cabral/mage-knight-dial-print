import styles from './curved-text.module.scss'

export default function CurvedText({
  name,
  points
}:{
  name: string,
  points: number
} ): React.ReactNode {
  return (
    <svg className={styles.svg} viewBox="0 0 500 500">
      <path className={styles.path} id="curve" d="M250 22.5C124.4 22.5 22.5 124.4 22.5 250S124.4 477.5 250 477.5 477.5 375.6 477.5 250c0-125.1-101-226.7-226-227.5H250" fill="none" stroke="none" strokeMiterlimit="10"/>
      <text className={styles.text} width="500">
      <textPath xlinkHref="#curve">{name} {points}</textPath>
      </text>
    </svg>
  );
}
