import styles from './factions.module.scss';
import { getFactionObjectByFullName } from '@/app/lib/dialtop/factions';

export default function Factions({
  factions,
}:{
  factions: string,
} ): React.ReactNode {

  const factionsList = factions.split(',');
  const factionOne = factionsList.length > 0 ? getFactionObjectByFullName(factionsList[0].trim())['FactionShortName'].trim() : '';
  const factionTwo = factionsList.length > 1 ? getFactionObjectByFullName(factionsList[1].trim())['FactionShortName'].trim() : '';

  return (
    <>
      {
        factionOne !== '' &&
        factionOne !== 'MageSpawn' ?
          <div className={`${styles.faction} ${styles[`${factionOne}`]}`}></div> :
          <></>
      }
      {
        factionTwo !== '' &&
        factionTwo !== 'MageSpawn' ?
          <div className={`${styles.faction} ${styles.factionTwo} ${styles[`${factionTwo}`]}`}></div> :
          <></>
      }
    </>
  );
}
