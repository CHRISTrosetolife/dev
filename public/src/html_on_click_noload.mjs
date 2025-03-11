import { html_on_click_generic } from "./html_on_click_generic.mjs";
import { html_load } from "./html_load.mjs";
export function html_on_click_noload(component, lambda) {
  let lambda2 = html_load;
  let v = html_on_click_generic(component, lambda2, lambda);
  return v;
}
