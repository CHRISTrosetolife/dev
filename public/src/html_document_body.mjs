import { html_document_get } from "./html_document_get.mjs";
import { html_id } from "./html_id.mjs";
export function html_document_body() {
  let result = {
    element: html_document_get().body,
  };
  html_id(result);
  return result;
}
