import { app_learn_math_multiplication_choices } from "./app_learn_math_multiplication_choices.mjs";
import { digits_10 } from "./digits_10.mjs";
import { app_learn_math_quiz } from "./app_learn_math_quiz.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button } from "./html_button.mjs";
import { each_range } from "./each_range.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_learn_math_main } from "./app_learn_math_main.mjs";
import { html_button_back } from "./html_button_back.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
export function app_learn_math_multiplication_choices_generic(
  root,
  operation_word,
  lrs_get,
  symbol_get,
  operation,
) {
  html_clear_scroll_top_centered(root);
  html_button_back(root, function () {
    app_learn_math_main(root);
  });
  let max = 10;
  let max_ranged = max + 1;
  html_span_text(root, "Do each of these in order");
  each_range(max_ranged, function (by) {
    html_button(
      root,
      string_combine_multiple([operation_word, " by ", by]),
      function () {
        function refill(multiplication_choices) {
          each_range(max_ranged, function (other) {
            list_add_left_right(multiplication_choices, by, other);
          });
        }
        app_learn_math_multiplication_quiz(refill);
      },
    );
  });
  html_button(
    root,
    string_combine_multiple([operation_word, " by 1-", max]),
    function () {
      function refill(choices) {
        each_range(max_ranged, function (a) {
          each_range(max_ranged, function (b) {
            list_add_left_right(choices, a, b);
          });
        });
      }
      app_learn_math_multiplication_quiz(refill);
    },
  );
  function list_add_left_right(choices, a, b) {
    let lrs = lrs_get(a, b);
    each(lrs, function (lr) {
      list_add(choices, lr);
    });
  }
  function app_learn_math_multiplication_quiz(refill) {
    app_learn_math_quiz(
      root,
      function (question, popped) {
        let { left, right } = popped;
        html_span_text(question, left);
        html_span_text(question, symbol_get());
        html_span_text(question, right);
        html_span_text(question, "=?");
        let v = [operation(left, right)];
        return v;
      },
      digits_10(),
      refill,
      app_learn_math_multiplication_choices,
    );
  }
}
