/**
 * Swaps two indecies in a given array
 * @param x the array to mutate
 * @param idx index to swap A
 * @param idj index to swap B
 * @returns the mutated array
 */
function swap(x: number[], idx: number, idj: number): number[] {
  const temp = x[idx];
  x[idx] = x[idj];
  x[idj] = temp;
  return x;
}

export default swap;
