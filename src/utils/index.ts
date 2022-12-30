export function getHashCode(str: string, caseSensitive = false) {
  if (!caseSensitive) {
    str = str.toLowerCase();
  }
  let hash = 1315423911;
  for (let i = str.length - 1; i >= 0; i--) {
    hash ^= (hash << 5) + str.charCodeAt(i) + (hash >> 2);
  }
  return hash & 0x7fffffff;
}

export const isAlpha = function (val: string) {
  return /^[a-zA-Z]+$/.test(val);
};

export const compareNumber = function (a: number, b: number) {
  return a < b ? -1 : a > b ? 1 : 0;
};

export function range(end: number): number[];
export function range(start: number, end: number): number[];
export function range(start: number, end: number = 0) {
  if (end == 0) {
    end = start;
    start = 0;
  }
  return new Array<number>(end - start).fill(0).map((el, i) => start + i);
}

export const toString = (obj: any) => obj.toString();
