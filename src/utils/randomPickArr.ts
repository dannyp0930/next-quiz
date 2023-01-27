function sameNum(num: number, res: number[]) {
  for (let i = 0; i < res.length; i++) {
    if (num === res[i]) {
      return true;
    }
  }
  return false;
}

export default function randomPickArr(length: number, limit: number) {
  const res = [];
  let i = 0;
  while (i < limit) {
    const random = Math.floor(Math.random() * length);
    if (!sameNum(random, res)) {
      res.push(random);
      i++;
    }
  }
  return res;
}
