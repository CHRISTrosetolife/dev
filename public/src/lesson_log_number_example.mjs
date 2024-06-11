import { html_cycle_monospace } from "./html_cycle_monospace.mjs";
import { js_code_format_indent_none } from "./js_code_format_indent_none.mjs";
import { app_learn_code_code } from "./app_learn_code_code.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { app_learn_code_range_retry } from "./app_learn_code_range_retry.mjs";
import { equal_not } from "./equal_not.mjs";
export function lesson_log_number_example(source_get, message, before) {
  return (parent) => {
    let previous;
    let div = html_div(parent);
    refresh();
    function refresh() {
      html_clear(div);
      before(div);
      html_cycle_monospace(
        div,
        string_combine("below is an example computer program ", message),
      );
      html_p_text(
        div,
        'if you want to see another example , press the "another example" button below',
      );
      let source;
      for (let i of app_learn_code_range_retry()) {
        source = source_get();
        source = js_code_format_indent_none(source);
        if (equal_not(source, previous)) {
          break;
        }
      }
      previous = source;
      app_learn_code_code(div, source);
      html_button_width_full_text_click(div, "another example", refresh);
    }
  };
}
