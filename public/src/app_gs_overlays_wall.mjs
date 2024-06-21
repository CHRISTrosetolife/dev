import { app_gs_overlays_bushes } from "./app_gs_overlays_bushes.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function app_gs_overlays_wall() {
  return list_concat_multiple([
    [8, 9, 16, 17, 32, 33],
    app_gs_overlays_bushes(),
  ]);
}
