import { html_load } from "./html_load.mjs";
import { html_on } from "./html_on.mjs";
export function html_on_click(component, lambda) {
  let lambda2 = html_load;
  let v = html_on(component, "click", async function on_click() {
    await lambda2(lambda);
  });
  return v;
}
