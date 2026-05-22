import { ClickValues } from './lib/interfaces/ClickValues';
import Click from './ui/dial/click';
import Arc from '@/app/ui/dialtop/arc';
import CurvedText from './ui/dialtop/curved-text';
import Factions from './ui/dialtop/factions';
import Rank from './ui/dialtop/rank';
import Collection from './ui/dialtop/collection';
import Range from './ui/dialtop/range';
 
export default function HomePage() {
  const click : ClickValues = {
    ClickNumber: 0,
    Attack: "10",
    AttackAbilityId: 119,
    Damage: "2",
    DamageAbilityId: 106,
    Defense: "16",
    DefenseAbilityId: 96,
    Speed: "8",
    SpeedAbilityId: 121
  };
  const click2 : ClickValues = {
    ClickNumber: 1,
    Attack: "10",
    AttackAbilityId: 119,
    Damage: "2",
    DamageAbilityId: 111,
    Defense: "16",
    DefenseAbilityId: 96,
    Speed: "8",
    SpeedAbilityId: 121
  };
  const click3 : ClickValues = {
    ClickNumber: 2,
    Attack: "10",
    AttackAbilityId: 119,
    Damage: "2",
    DamageAbilityId: 111,
    Defense: "16",
    DefenseAbilityId: 96,
    Speed: "8",
    SpeedAbilityId: 121
  };
  const click4 : ClickValues = {
    ClickNumber: 3,
    Attack: "10",
    AttackAbilityId: 119,
    Damage: "2",
    DamageAbilityId: 105,
    Defense: "16",
    DefenseAbilityId: 96,
    Speed: "8",
    SpeedAbilityId: 121
  };
  const click5 : ClickValues = {
    ClickNumber: 4,
    Attack: "10",
    AttackAbilityId: 119,
    Damage: "2",
    DamageAbilityId: 111,
    Defense: "16",
    DefenseAbilityId: 96,
    Speed: "8",
    SpeedAbilityId: 121
  };
  const click6 : ClickValues = {
    ClickNumber: 5,
    Attack: "10",
    AttackAbilityId: 119,
    Damage: "2",
    DamageAbilityId: 111,
    Defense: "16",
    DefenseAbilityId: 96,
    Speed: "8",
    SpeedAbilityId: 121
  };
  const click7 : ClickValues = {
    ClickNumber: 6,
    Attack: "10",
    AttackAbilityId: 119,
    Damage: "2",
    DamageAbilityId: 111,
    Defense: "16",
    DefenseAbilityId: 96,
    Speed: "8",
    SpeedAbilityId: 121
  };
  const click8 : ClickValues = {
    ClickNumber: 7,
    Attack: "10",
    AttackAbilityId: 119,
    Damage: "2",
    DamageAbilityId: 111,
    Defense: "16",
    DefenseAbilityId: 96,
    Speed: "8",
    SpeedAbilityId: 121
  };
  const click9 : ClickValues = {
    ClickNumber: 8,
    Attack: "10",
    AttackAbilityId: 119,
    Damage: "2",
    DamageAbilityId: 111,
    Defense: "16",
    DefenseAbilityId: 96,
    Speed: "8",
    SpeedAbilityId: 121
  };
  const click10 : ClickValues = {
    ClickNumber: 9,
    Attack: "10",
    AttackAbilityId: 119,
    Damage: "2",
    DamageAbilityId: 111,
    Defense: "16",
    DefenseAbilityId: 96,
    Speed: "8",
    SpeedAbilityId: 121
  };
  const click11 : ClickValues = {
    ClickNumber: 10,
    Attack: "10",
    AttackAbilityId: 119,
    Damage: "2",
    DamageAbilityId: 111,
    Defense: "16",
    DefenseAbilityId: 96,
    Speed: "8",
    SpeedAbilityId: 121
  };
  const click12 : ClickValues = {
    ClickNumber: 11,
    Attack: "Dead",
    AttackAbilityId: 93,
    Damage: "Dead",
    DamageAbilityId: 93,
    Defense: "Dead",
    DefenseAbilityId: 93,
    Speed: "Dead",
    SpeedAbilityId: 93
  };
  return (
    <div className="container">
      <div className="dial">
        <Click clickValues={click} factionsName='Heroes, Draconum ' />
        <Click clickValues={click2} factionsName='Heroes, Draconum ' />
        <Click clickValues={click3} factionsName='Heroes, Draconum ' />
        <Click clickValues={click4} factionsName='Heroes, Draconum ' />
        <Click clickValues={click5} factionsName='Heroes, Draconum ' />
        <Click clickValues={click6} factionsName='Heroes, Draconum ' />
        <Click clickValues={click7} factionsName='Heroes, Draconum ' />
        <Click clickValues={click8} factionsName='Heroes, Draconum ' />
        <Click clickValues={click9} factionsName='Heroes, Draconum ' />
        <Click clickValues={click10} factionsName='Heroes, Draconum ' />
        <Click clickValues={click11} factionsName='Heroes, Draconum ' />
        <Click clickValues={click12} factionsName='Heroes, Draconum ' />
      </div>

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