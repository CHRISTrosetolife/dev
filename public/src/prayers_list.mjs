import { prayers_list_begin } from "./prayers_list_begin.mjs";
import { list_denest } from "./list_denest.mjs";
export function prayers_list(prayer) {
  let v = list_denest([prayers_list_begin(), prayer, "Amen"]);
  return v;
}
