export default function Header({
  title
}:{
  title: string
} ): React.ReactNode {
  return <h1>{title ? title : 'Default title'}</h1>;
}
