import { html_id_generate } from "./html_id_generate.mjs";
export function html_document_body() {
  let result = {
    element: document.body,
  };
  html_id_generate(result);
  return result;
}
