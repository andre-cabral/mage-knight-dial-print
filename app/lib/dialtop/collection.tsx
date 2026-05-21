import expansionsList from '@/public/json/expansions.json';

export function getCollectionObjectByFullName (fullName: string): {
  "ExpansionId": number,
  "ExpansionName": string,
  "CollectionClass":  string,
  "ShortName": string,
} {
  for (let i=0; i<expansionsList["Expansions"].length; i++) {
    if (expansionsList["Expansions"][i].ExpansionName === fullName) {
      return expansionsList["Expansions"][i];
    }
  }
  return {
    "ExpansionId": 0,
    "ExpansionName": '',
    "CollectionClass": '',
    "ShortName": '',
  };
}

