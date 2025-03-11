import { invoke } from "./invoke.mjs";
import { html_on_click_generic } from "./html_on_click_generic.mjs";
export function html_on_click_noload(component, lambda) {
  let lambda2 = invoke;
  let v = html_on_click_generic(component, lambda2, lambda);
  return v;
}
