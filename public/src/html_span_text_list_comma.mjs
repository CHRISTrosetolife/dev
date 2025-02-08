import { html_span_text_gray } from "./html_span_text_gray.mjs";
import { list_last_is } from "./list_last_is.mjs";
import { each } from "./each.mjs";
export function html_span_text_list_comma(parent, list, lambda) {
  each(list, (item) => {
    lambda(item);
    if (!list_last_is(list, item)) {
      html_span_text_gray(parent, ", ");
    }
  });
}
