import styles from './dial.module.scss';
import Click from '@/app/ui/dial/click';
import { ClickValues } from '@/app/lib/interfaces/ClickValues';

export default function Dial({
  modelData,
}: {
  modelData: any,
} ): React.ReactNode {

  return (
    <div className={styles.dial}>
      {
        modelData?.['Dials']?.[0]?.['Clicks']?.map((item, index) => {
          const clickValueData : ClickValues = {
            ClickNumber: item['Model.Dial.Clicks.Click.ClickNumber'],
            Attack: item['Model.Dial.Clicks.Click.Attack'],
            AttackAbilityId: item['Model.Dial.Clicks.Click.AttackAbilityId'],
            Damage: item['Model.Dial.Clicks.Click.Damage'],
            DamageAbilityId: item['Model.Dial.Clicks.Click.DamageAbilityId'],
            Defense: item['Model.Dial.Clicks.Click.Defense'],
            DefenseAbilityId: item['Model.Dial.Clicks.Click.DefenseAbilityId'],
            Speed: item['Model.Dial.Clicks.Click.Speed'],
            SpeedAbilityId: item['Model.Dial.Clicks.Click.SpeedAbilityId'],
          }

          return (
            <Click clickValues={clickValueData} factionsName={modelData?.['Model.Factions']} key={`click${index}${modelData['CorrectNameID']}`} />
          );
        })
      }
    </div>
  );
}
