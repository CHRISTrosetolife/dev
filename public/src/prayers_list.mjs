import { list_denest } from "./list_denest.mjs";
export function prayers_list(prayer) {
  let v = list_denest([
    [
      "Heavenly Father,",
      "In the name of Jesus:",
      "Have mercy on me, a sinner;",
    ],
    prayer,
    "Amen",
  ]);
  return v;
}
