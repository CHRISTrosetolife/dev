import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { mod } from "./mod.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { each_index } from "./each_index.mjs";
export function html_cycle_list(parent, create, patterns, strings) {
  let patterns_length = list_size(patterns);
  let p1 = create(parent);
  each_index(strings, (element, index) => {
    let span = html_span_text(p1, element);
    let pattern_index = mod(index, patterns_length);
    let pattern = list_get(patterns, pattern_index);
    pattern(span);
  });
}
