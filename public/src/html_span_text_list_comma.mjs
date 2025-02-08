import { html_span_text } from "./html_span_text.mjs";
import { list_last_is } from "./list_last_is.mjs";
import { each } from "./each.mjs";
export function html_span_text_list_comma(parent, list, lambda) {
  each(list, (item) => {
    lambda(item);
    if (!list_last_is(list, item)) {
      html_span_text(parent, ", ");
    }
  });
}
