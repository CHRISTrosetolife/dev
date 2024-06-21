import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { range_from } from "./range_from.mjs";
export function app_gs_overlays_wall() {
  return list_concat_multiple([[8, 9, 16, 17, 32, 33], range_from(40, 42)]);
}
