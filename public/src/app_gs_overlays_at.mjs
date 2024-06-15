import { each } from "./each.mjs";
export function app_gs_overlays_at(map, a, lambda_overlay) {
  each(map.overlays, (b) => {
    let { x } = b;
    if (x !== a.x) {
      return;
    }
    let { y } = b;
    if (y !== a.y) {
      return;
    }
    lambda_overlay(b);
  });
}
