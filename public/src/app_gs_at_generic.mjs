import { each } from "./each.mjs";
export function app_gs_at_generic(list, a, lambda_overlay) {
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
