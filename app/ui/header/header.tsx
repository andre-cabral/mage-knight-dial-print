import styles from './header.module.scss'

export default function Header({
  title
}:{
  title: string
} ): React.ReactNode {
  return <h1 className={styles.title}>{title ? title : 'Default title'}</h1>;
}
