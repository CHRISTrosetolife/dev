import { html_on } from "./html_on.mjs";
export function html_on_change(component, lambda) {
  html_on(component, "click", lambda);
}
