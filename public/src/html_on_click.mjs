import { html_load } from "./html_load.mjs";
import { html_on } from "./html_on.mjs";
export function html_on_click(component, lambda) {
  html_on(component, "click", lambda);
  async function lambda() {
    await html_load(lambda);
  }
  let v = {
    lambdalambda,
  };
  return v;
}
