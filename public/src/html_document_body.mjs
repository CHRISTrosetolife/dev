import { html_element_wrap } from "./html_element_wrap.mjs";
import { html_document_get } from "./html_document_get.mjs";
export function html_document_body() {
  let b = html_document_get().element.body;
  let result = html_element_wrap(b);
  return result;
}
