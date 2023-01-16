export interface CountList {
  [key: string]: number;
}

export default function countBy(arr: (string | number)[]) {
  return arr.reduce((a: CountList, b) => {
    if (a[b]) {
      a[b] += 1;
    } else {
      a[b] = 1;
    }
    return a;
  }, {});
}
