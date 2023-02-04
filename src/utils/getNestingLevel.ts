import { Row } from '../types';

export default function getNestingLevel(r: Array<Row>, lvl?: number) {
  let currentLvl = lvl || 1;

  r.forEach((row) => {
    if (row.child && row.child.length) {
      const nextLvl = getNestingLevel(row.child, currentLvl + 1);

      currentLvl = nextLvl;
    }
  });

  return currentLvl;
}
