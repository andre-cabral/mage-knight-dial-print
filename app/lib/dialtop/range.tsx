export function getRangeObjectByString (rangeString: string): {
  range: number,
  targets: number,
} {
  const rangeParts = rangeString.split(' ');

  return {
    range: rangeParts?.[0] ? Number(rangeParts?.[0].trim()) : 0,
    targets: rangeParts?.[1] ? Number(rangeParts?.[1].replace('(','').replace(')','').replace(' Targets','').trim()) : 1,
  };
}
