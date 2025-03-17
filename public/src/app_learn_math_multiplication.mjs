import { html_span_text } from "./html_span_text.mjs";
import { digits_10 } from "./digits_10.mjs";
import { app_learn_math_quiz } from "./app_learn_math_quiz.mjs";
import { list_add } from "./list_add.mjs";
import { each_range } from "./each_range.mjs";
import { html_button } from "./html_button.mjs";
export function app_learn_math_multiplication(root) {
  html_button(
    root,
    "Multiplication",
    function app_learn_math_multiplication_quiz() {
      function refill(multiplication_choices) {
        each_range(11, function (a) {
          let b = 0;
          list_add(multiplication_choices, {
            left: a,
            right: b,
          });
          list_add(multiplication_choices, {
            left: b,
            right: a,
          });
        });
      }
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
      );
    },
  );
}
