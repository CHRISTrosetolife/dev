import { html_style_success } from "./html_style_success.mjs";
import { js_code_format_indent_none } from "./js_code_format_indent_none.mjs";
import { app_learn_code_ms_correct } from "./app_learn_code_ms_correct.mjs";
import { timeout_set } from "./timeout_set.mjs";
import { html_style_monospace } from "./html_style_monospace.mjs";
import { html_style } from "./html_style.mjs";
import { html_disable } from "./html_disable.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { each_index } from "./each_index.mjs";
import { app_learn_code_code_part_title_output } from "./app_learn_code_code_part_title_output.mjs";
import { app_learn_code_code_part_title } from "./app_learn_code_code_part_title.mjs";
import { html_hr } from "./html_hr.mjs";
import { app_learn_code_code_part_titled_code } from "./app_learn_code_code_part_titled_code.mjs";
import { list_get } from "./list_get.mjs";
import { list_random_index } from "./list_random_index.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { list_any } from "./list_any.mjs";
import { app_learn_code_eval_to_string } from "./app_learn_code_eval_to_string.mjs";
import { app_learn_code_range_retry } from "./app_learn_code_range_retry.mjs";
import { array_new } from "./array_new.mjs";
import { range } from "./range.mjs";
import { app_learn_code_code_container } from "./app_learn_code_code_container.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_clear } from "./html_clear.mjs";
export function app_learn_code_quiz_inner_refresh(
  parent,
  source_get,
  previous_source,
  on_answer_right,
  on_answer_wrong,
) {
  html_clear(parent);
  html_p_text(parent, "below is a quiz");
  html_p_text(parent, "choose the correct output for the code");
  let container = app_learn_code_code_container(parent);
  let choices_count = 4;
  let r = range(choices_count);
  let choices = array_new();
  for (let c of r) {
    for (let i of app_learn_code_range_retry()) {
      let source = source_get();
      let answer = app_learn_code_eval_to_string(source);
      if (list_any(choices, (c) => equal(c.answer, answer))) {
        continue;
      }
      if (equal(source, previous_source)) {
        continue;
      }
      list_add(choices, {
        source,
        answer,
      });
      break;
    }
  }
  list_sort_string(choices, (c) => c.answer);
  let correct_index = list_random_index(choices);
  let { source } = list_get(choices, correct_index);
  source = js_code_format_indent_none(source);
  app_learn_code_code_part_titled_code(container, source);
  html_hr(container);
  app_learn_code_code_part_title(
    container,
    app_learn_code_code_part_title_output(),
  );
  each_index(choices, (c, index) => {
    let { answer } = c;
    let button = html_button_width_full_text_click(
      container,
      answer,
      function on_click() {
        if (index === correct_index) {
          html_style_success(button);
          timeout_set(on_answer_right, app_learn_code_ms_correct());
        } else {
          on_answer_wrong();
          html_disable(button);
          html_style(button, {
            "background-color": "salmon",
            "border-color": "tomato",
          });
        }
      },
    );
    html_style_monospace(button);
  });
  return source;
}
