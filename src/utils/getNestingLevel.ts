import { Row } from '../types';

export default function getNestingLevel(r: Array<Row>, lvl = 0): number {
  const nestedLvls = r.map((item) => {
    if (!item.child.length) {
      return lvl + 1;
    }

    return getNestingLevel(item.child, lvl + 1);
  });

  return Math.max(...nestedLvls);
}
