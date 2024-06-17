import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_element } from "./html_element.mjs";
import { html_document_head } from "./html_document_head.mjs";
export function html_scale_none() {
  let h = html_document_head();
  let c = html_element(h, meta);
  html_attribute_set(c, "name", "viewport");
  html_attribute_set(
    c,
    "content",
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  );
}
