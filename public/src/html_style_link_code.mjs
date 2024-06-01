import { app_learn_code_style_code_colored } from "./app_learn_code_style_code_colored.mjs";
import { html_style_link } from "./html_style_link.mjs";
export function html_style_link_code(url) {
  return (e) => {
    html_style_link(url)(e);
    app_learn_code_style_code_colored(e);
  };
}
