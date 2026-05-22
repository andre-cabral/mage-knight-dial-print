import styles from './click.module.scss';
import { ClickValues } from '@/app/lib/interfaces/ClickValues';
import { getAbilityShapeClassById, getAbilityColorClassById } from '@/app/lib/dial/ability';
import { getLevel } from '@/app/lib/dial/level';

export default function Click({
  clickValues,
  factionsName,
}: {
  clickValues: ClickValues,
  factionsName: string,
} ): React.ReactNode {
  const spdShapeClass = styles[getAbilityShapeClassById(clickValues.SpeedAbilityId)] || '';
  const atkShapeClass = styles[getAbilityShapeClassById(clickValues.AttackAbilityId)] || '';
  const defShapeClass = styles[getAbilityShapeClassById(clickValues.DefenseAbilityId)] || '';
  const dmgShapeClass = styles[getAbilityShapeClassById(clickValues.DamageAbilityId)] || '';

  const spdColorClass = styles[getAbilityColorClassById(clickValues.SpeedAbilityId)] || '';
  const atkColorClass = styles[getAbilityColorClassById(clickValues.AttackAbilityId)] || '';
  const defColorClass = styles[getAbilityColorClassById(clickValues.DefenseAbilityId)] || '';
  const dmgColorClass = styles[getAbilityColorClassById(clickValues.DamageAbilityId)] || '';

  const level = getLevel(clickValues.ClickNumber, factionsName);

  return (
    <div className={`${styles.click} ${styles[`click${clickValues.ClickNumber}`]}`}>
      <p className={`${styles.stat} ${styles.spd} ${spdShapeClass} ${spdColorClass}`}>{clickValues.Speed}</p>
      <p className={`${styles.stat} ${styles.atk} ${atkShapeClass} ${atkColorClass}`}>{clickValues.Attack}</p>
      <p className={`${styles.stat} ${styles.def} ${defShapeClass} ${defColorClass}`}>{clickValues.Defense}</p>
      {
        clickValues.ClickNumber === 0 ?
        <>
          <p className={`${styles.stat} ${styles.dmg} ${dmgColorClass !== '' ? dmgColorClass : styles.green} ${styles.firstValue}`}>{clickValues.Damage}</p>
          <div className={`${styles.stat} ${styles.dmg} ${styles.startBg}`}></div>
          <p className={`${styles.stat} ${styles.dmg} ${styles.firstAbility} ${dmgShapeClass} ${styles.skullDmg} ${dmgColorClass !== '' ? dmgColorClass : styles.green}`}></p>
        </>
        :
        <p className={`${styles.stat} ${styles.dmg} ${dmgShapeClass} ${styles.skullDmg} ${dmgColorClass}`}>{clickValues.Damage}</p>
      }
      { level !== '' &&
        <p className={`${styles.stat} ${styles.lvl}`}>{level}</p>
      }
    </div>
  );
}
