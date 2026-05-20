import factionsList from '@/public/json/factions.json';

export function getFactionObjectByFullName (fullName: string): {
  "FactionID": number,
  "FactionName": string,
  "FactionShortName": string,
} {
  for (let i=0; i<factionsList["Factions"].length; i++) {
    if (factionsList["Factions"][i].FactionName === fullName) {
      return factionsList["Factions"][i];
    }
  }
  return {
    "FactionID": 0,
    "FactionName": '',
    "FactionShortName": '',
  };
}