import { html_on_input } from "./html_on_input.mjs";
export function html_on_input_initial(component, lambda) {
  html_on_input(component, lambda);
  lambda();
}
