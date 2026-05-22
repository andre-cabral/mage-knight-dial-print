import styles from './dialtop.module.scss';
import Arc from '@/app/ui/dialtop/arc';
import CurvedText from '@/app/ui/dialtop/curved-text';
import Factions from '@/app/ui/dialtop/factions';
import Rank from '@/app/ui/dialtop/rank';
import Collection from '@/app/ui/dialtop/collection';
import Range from '@/app/ui/dialtop/range';

export default function Dialtop({
  modelData,
}: {
  modelData: any,
} ): React.ReactNode {

  return(
    <div className={styles.dialtop}>
      <Arc arcValue={Number(modelData['Model.Arc'])} />
      <CurvedText name={modelData['Model.CorrectName']} points={Number(modelData['Model.UnitCost'])} />
      <Factions factions={modelData['Model.Factions']} />
      <Rank rank={modelData['Model.Rank']} />
      <Collection collection={modelData['Model.ExpansionName']} miniatureNumber={modelData['Model.FigureNumber']} />
      <Range rangeString={modelData['Model.Range']} />
    </div>
  );
}
