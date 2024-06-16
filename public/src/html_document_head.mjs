import { list_single } from "./list_single.mjs";
export function html_document_head() {
  return {
    element: list_single(document.getElementsByTagName("head")),
  };
}
