import { html_inner_set } from "./html_inner_set.mjs";
import { html_element } from "./html_element.mjs";
export function html_spaced_tokens(parent, tokens, each) {
  for (let token of tokens) {
    let spacer = html_element(parent, "span");
    html_inner_set(spacer, " ");
    let token_element = html_element(parent, "span");
    html_inner_set(token_element, token);
    each(token_element, token);
  }
}
