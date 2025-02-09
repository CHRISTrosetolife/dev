import { html_id } from "./html_id.mjs";
export function html_element_wrap(b) {
  let result = {
    element: b,
  };
  html_id(result);
  return result;
}
