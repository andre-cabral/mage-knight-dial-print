import { cache } from 'react'
 
export const getAbilities = cache(async () => {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/json/specialabilities.json`);
    if (!response.ok) {
      throw new Error();
    } else {
      return response.json();
    }
  } catch (error) {
    throw error;
  }
});
