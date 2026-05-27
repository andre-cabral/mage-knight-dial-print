import { cache } from 'react'
 
export const getFactions= cache(async () => {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/json/factions.json`);
    if (!response.ok) {
      throw new Error();
    } else {
      return response.json();
    }
  } catch (error) {
    throw error;
  }
});
