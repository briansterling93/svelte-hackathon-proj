export function convertGbToTb(gb: number): number {
  if (gb <= 0) return 0;
  return gb / 1000;
}
