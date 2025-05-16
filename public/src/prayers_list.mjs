import { list_denest } from "./list_denest.mjs";
export function prayers_list(prayer) {
  let v = list_denest([
    prayers_list_begin(),
    prayer,
    "Amen",
  ]);
  return v;
}

function prayers_list_begin() {
    return [
        "Heavenly Father,",
        "In the name of Jesus:",
        "Have mercy on me, a sinner;",
    ];
}
