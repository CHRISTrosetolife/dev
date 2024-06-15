import { each } from "./each.mjs";
export function app_gs_overlays_at(map, a, lambda_overlay) {
  let list = map.overlays;
  each(list, (b) => {
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
