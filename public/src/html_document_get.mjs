import { html_element_wrap } from "./html_element_wrap.mjs";
export function html_document_get() {
  return html_element_wrap(document);
}
