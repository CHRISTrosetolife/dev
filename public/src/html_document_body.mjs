import { html_id } from "./html_id.mjs";
export function html_document_body() {
  let result = {
    element: document.body,
  };
  html_id(result);
  return result;
}
