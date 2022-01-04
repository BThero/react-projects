export function isValidHex(c: string): boolean {
  if (c.length !== 7 || c[0] !== "#") {
    return false;
  }

  for (let i = 1; i < 7; i++) {
    if (c[i].match("[a-f]|[A-F]|[0-9]") === null) {
      return false;
    }
  }

  return true;
}

export function ArrayToHex(ar: Array<number>): string {
  let res = "#";

  function getCode(n: number): string {
    if (n < 10) {
      return String.fromCharCode(48 + n);
    } else {
      return String.fromCharCode(97 + (n - 10));
    }
  }

  for (let i = 0; i < 3; i++) {
    res = res + getCode(ar[i] / 16);
    res = res + getCode(ar[i] % 16);
  }

  return res;
}
