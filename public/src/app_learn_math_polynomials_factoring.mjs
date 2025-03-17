import { app_learn_math_quiz } from "./app_learn_math_quiz.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { digits_10 } from "./digits_10.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { html_sup_text } from "./html_sup_text.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span } from "./html_span.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button } from "./html_button.mjs";
import { list_add } from "./list_add.mjs";
import { each_range_1 } from "./each_range_1.mjs";
import { each_range_from } from "./each_range_from.mjs";
export function app_learn_math_polynomials_factoring(root) {
  let factoring_threshold = 7;
  factoring_threshold, " value is seven because older son learned this";
  factoring_button(1, factoring_threshold, "easier");
  let factoring_max_upper = 12;
  factoring_max_upper,
    " value because that is the max number learned in times tables in school";
  factoring_button(factoring_threshold + 1, factoring_max_upper, "harder");
  function factoring_button(factoring_min, factoring_max, description) {
    let factor_polynomials_choices = [];
    html_button(
      root,
      string_combine_multiple([
        "Factoring polynomials (",
        factoring_min,
        " - ",
        factoring_max,
        ") (",
        description,
        ")",
      ]),
      function factor_polynomials() {
        let variable = "x";
        let problem_next = factor_polynomials;
        let button_strings = list_concat_multiple([
          digits_10(),
          string_split_empty("()+"),
          [variable],
        ]);
        function refill() {
          each_range_from(factoring_min, factoring_max, function (answer_1) {
            each_range_1(factoring_max, function (answer_2) {
              list_add(factor_polynomials_choices, {
                answer_1,
                answer_2,
              });
            });
          });
        }
        function expecteds_get(root, popped) {
          let { answer_1, answer_2 } = popped;
          let sum = answer_1 + answer_2;
          let product = answer_1 * answer_2;
          let equation = html_span(root);
          html_span_text(equation, variable);
          html_sup_text(equation, "2");
          html_span_text(equation, "+");
          html_span_text(equation, sum);
          html_span_text(equation, variable);
          html_span_text(equation, "+");
          html_span_text(equation, product);
          let choices = [answer_1, answer_2];
          let expecteds = [];
          function expected_add(choices2) {
            let expected = string_combine_multiple([
              "(",
              variable,
              "+",
              list_first(choices2),
              ")(",
              variable,
              "+",
              list_second(choices2),
              ")",
            ]);
            list_add(expecteds, expected);
          }
          expected_add(choices);
          list_reverse(choices);
          expected_add(choices);
          let v = expecteds;
          return v;
        }
        app_learn_math_quiz(
          root,
          expecteds_get,
          button_strings,
          problem_next,
          refill,
          factor_polynomials_choices,
        );
      },
    );
  }
}
