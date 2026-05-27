'use client'

import { use, useContext } from 'react'
import styles from './dialtop.module.scss';
import Arc from '@/app/ui/dialtop/arc';
import CurvedText from '@/app/ui/dialtop/curved-text';
import Factions from '@/app/ui/dialtop/factions';
import Rank from '@/app/ui/dialtop/rank';
import Collection from '@/app/ui/dialtop/collection';
import Range from '@/app/ui/dialtop/range';
import { StatsContext } from '@/app/lib/providers/stats-provider';
import { FactionsContext } from '@/app/lib/providers/factions-provider'

export default function Dialtop(): React.ReactNode {

  const statsPromise = useContext(StatsContext);
  if (!statsPromise) {
    throw new Error('useContext must be used within a StatsProvider')
  }

  const data = use(statsPromise);
  const modelData = data?.['Models']?.[0];

  const factionsPromise = useContext(FactionsContext);
  if (!factionsPromise) {
    throw new Error('useContext must be used within a FactionsProvider')
  }

  const factions = use(factionsPromise);
  const factionsData = factions;

  return(
    <div className={styles.dialtop}>
      <Arc arcValue={Number(modelData['Model.Arc'])} />
      <CurvedText name={modelData['Model.CorrectName']} points={Number(modelData['Model.UnitCost'])} />
      <Factions factions={modelData['Model.Factions']} factionsData={factionsData} />
      <Rank rank={modelData['Model.Rank']} />
      <Collection collection={modelData['Model.ExpansionName']} miniatureNumber={modelData['Model.FigureNumber']} />
      <Range rangeString={modelData['Model.Range']} />
    </div>
  );
}
