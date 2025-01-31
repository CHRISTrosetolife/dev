import { html_on_input } from "./html_on_input.mjs";
export function html_on_input_initial(search_input, lambda) {
  html_on_input(search_input, lambda);
  lambda();
}
