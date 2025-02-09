import { html_document_get } from "./html_document_get.mjs";
import { html_id } from "./html_id.mjs";
export function html_document_body() {
  let b = html_document_get().body;
  let result = {
    element: b,
  };
  html_id(result);
  return result;
}
