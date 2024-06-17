import { assert } from "./assert.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
export function html_document_head() {
  let h = document.getElementsByTagName("head")[0];
  assert(undefined_not_is, [h]);
  return {
    element: h,
  };
}
