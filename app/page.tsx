import { ClickValues } from '@/app/lib/interfaces/ClickValues';
import Dial from '@/app/ui/dial/dial';
import Arc from '@/app/ui/dialtop/arc';
import CurvedText from '@/app/ui/dialtop/curved-text';
import Factions from '@/app/ui/dialtop/factions';
import Rank from '@/app/ui/dialtop/rank';
import Collection from '@/app/ui/dialtop/collection';
import Range from '@/app/ui/dialtop/range';

import jsonModels from '@/public/json/mkstats.json';
 
export default function HomePage() {
  console.log(jsonModels)
  console.log(jsonModels?.['Models'])
  console.log(jsonModels?.['Models']?.[0])
  return (
    <div className="container">
      <Dial modelData={jsonModels?.['Models']?.[0]} />

      <div className="dialtop">
        <Arc arcValue={90} />
        <CurvedText name='Utem Crossbowman' points={11} />
        <Factions factions='Heroes, Draconum ' />
        <Rank rank='Tough' />
        <Collection collection="Whirlwind" miniatureNumber="008" />
        <Range rangeString=' 10 (2 Targets) ' />
      </div>

      <div className="dialtop">
        <Arc arcValue={180} />
        <CurvedText name='Utem Crossbowman' points={11} />
        <Factions factions='Atlantis Guild ' />
        <Rank rank='Standard' />
        <Collection collection="Minions" miniatureNumber="008" />
        <Range rangeString='10' />
      </div>

      <div className="dialtop">
        <Arc arcValue={270} />
        <CurvedText name='Utem Crossbowman' points={11} />
        <Factions factions=' Draconum ' />
        <Rank rank='Weak' />
        <Collection collection="Unlimited" miniatureNumber="008" />
        <Range rangeString='0' />
      </div>

  </div>
  );
}