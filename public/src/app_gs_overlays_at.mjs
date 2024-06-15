import { app_gs_at_generic } from "./app_gs_at_generic.mjs";
export function app_gs_overlays_at(map, a, lambda_overlay) {
  let list = map.overlays;
  app_gs_at_generic(list, a, lambda_overlay);
}
