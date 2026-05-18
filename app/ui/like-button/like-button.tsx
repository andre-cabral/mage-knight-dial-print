'use client';

import { useState } from 'react';

export default function LikeButton(): React.ReactNode {
  const [likes, setLikes]: [number, Function] = useState(0);

  function handleClick(): void {
    setLikes(likes + 1);
  }

  return <button onClick={handleClick}>Like ({likes})</button>;
}
