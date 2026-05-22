import abilitiesList from '@/public/json/specialabilities.json'
import { AbilityValues } from '../interfaces/AbilityValues';

function getAbilityById (id: number): AbilityValues {
  for (let i=0; i<abilitiesList["SpecialAbilityTypes"].length; i++) {
    if (abilitiesList["SpecialAbilityTypes"][i]["SpecialAbilityTypeKey"] === id) {
      return abilitiesList["SpecialAbilityTypes"][i];
    }
  }

  return abilitiesList["SpecialAbilityTypes"][0];
}

export function getAbilityColorClassById (id: number): string {
  const ability = getAbilityById(id);

  if (ability.AbilityColor === '1.0,0.582,0.0,1.0'){
    return 'orange';
  }

  return ability.AbilityColor;
}

function getAbilityShapeById (id: number): string {
  const ability = getAbilityById(id);

  if(ability.AbilitySymbol === 'ab_squ') {
    return 'square';
  }
  if(ability.AbilitySymbol === 'ab_circ') {
    return 'circle';
  }
  if(ability.AbilitySymbol === 'ab_skull') {
    return 'skull';
  }

  return '';
}

export function getAbilityShapeClassById (id: number): string {
  const abilityShape = getAbilityShapeById(id);

  if(abilityShape === 'square') {
    return '';
  }
  if(abilityShape === 'circle') {
    return 'round';
  }

  return abilityShape;
}
