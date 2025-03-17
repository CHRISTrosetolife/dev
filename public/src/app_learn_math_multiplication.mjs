import { app_learn_math_quiz } from "./app_learn_math_quiz.mjs";
import { list_unique_json_shuffle } from "./list_unique_json_shuffle.mjs";
import { list_add } from "./list_add.mjs";
import { each_range } from "./each_range.mjs";
import { html_button } from "./html_button.mjs";
export function app_learn_math_multiplication(root) {
  let multiplication_choices;
  html_button(root, "Multiplication", function () {
    multiplication_choices = [];
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
    multiplication_choices = list_unique_json_shuffle(multiplication_choices);
    app_learn_math_quiz(root, button_strings, expecteds, problem_next, refill);
  });
}
