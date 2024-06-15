import { each } from "./each.mjs";
export function app_gs_overlays_at(map, r, c, lambda_overlay) {
  each(map.overlays, (o) => {
    let { x } = o;
    if (x !== c) {
      return;
    }
    let { y } = o;
    if (y !== r) {
      return;
    }
    lambda_overlay(id);
  });
}
