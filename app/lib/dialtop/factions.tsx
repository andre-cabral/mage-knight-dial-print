export function getFactionObjectByFullName ({
  fullName,
  factionData,
}: {
  fullName: string,
  factionData: any,
}): {
  "FactionID": number,
  "FactionName": string,
  "FactionShortName": string,
} {
  for (let i=0; i<factionData?.["Factions"].length; i++) {
    if (factionData["Factions"][i].FactionName === fullName) {
      return factionData["Factions"][i];
    }
  }
  return {
    "FactionID": 0,
    "FactionName": '',
    "FactionShortName": '',
  };
}
