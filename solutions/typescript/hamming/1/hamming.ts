export function compute(left: string, right: string): unknown {
  let d = 0;
  if (left.length !== right.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  for (let i = 0; i < left.length; i++) {
    if (left.charAt(i) != right.charAt(i)) {
      d++
    }
  }

  return d;
}
