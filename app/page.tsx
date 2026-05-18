import Header from '@/app/ui/header/header';
import LikeButton from '@/app/ui/like-button/like-button';
import jsonFile from '@/public/json/test.json'
 
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
console.log(jsonFile)
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}