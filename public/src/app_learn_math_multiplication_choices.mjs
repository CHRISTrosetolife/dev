import { app_learn_math_main } from "./app_learn_math_main.mjs";
import { html_button_back } from "./html_button_back.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { digits_10 } from "./digits_10.mjs";
import { app_learn_math_quiz } from "./app_learn_math_quiz.mjs";
import { list_add } from "./list_add.mjs";
import { each_range } from "./each_range.mjs";
import { html_button } from "./html_button.mjs";
export function app_learn_math_multiplication_choices(root) {
  html_clear_scroll_top_centered(root);
  html_button_back(root, function () {
    app_learn_math_main(root);
  });
  let max = 11;
  each_range(max, function (by) {
    html_button(
      root,
      string_combine_multiple(["Multiply by ", by]),
      function () {
        function refill(multiplication_choices) {
          each_range(max, function (other) {
            list_add(multiplication_choices, {
              left: other,
              right: by,
            });
            list_add(multiplication_choices, {
              left: by,
              right: other,
            });
          });
        }
        app_learn_math_multiplication_quiz(refill);
      },
    );
  });
  function app_learn_math_multiplication_quiz(refill) {
    app_learn_math_quiz(
      root,
      function (question, popped) {
        let { left, right } = popped;
        html_span_text(question, left);
        html_span_text(question, "×");
        html_span_text(question, right);
        html_span_text(question, "=?");
        let v = [left * right];
        return v;
      },
      digits_10(),
      refill,
      app_learn_math_multiplication_choices,
    );
  }
}
