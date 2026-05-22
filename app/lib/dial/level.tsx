export function getLevel (clickNumber: number, factionsName: string): string {
  if (factionsName.indexOf('Heroes') > -1) {
    if (clickNumber === 4) {
      return '1';
    }
    if (clickNumber === 3) {
      return '2';
    }
    if (clickNumber === 2) {
      return '3';
    }
    if (clickNumber === 1) {
      return '4';
    }
    if (clickNumber === 0) {
      return '5';
    }
  }

  return '';
}
