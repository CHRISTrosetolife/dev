import { html_on } from "./html_on.mjs";
export function html_on_click_generic(component, lambda2, lambda) {
  return html_on(component, "click", async function on_click() {
    await lambda2(lambda);
  });
}
