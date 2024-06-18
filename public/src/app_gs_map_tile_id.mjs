import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_gs_map_tile_id(v) {
  let { x, y } = v;
  return string_combine_multiple([y, "_", x]);
}
