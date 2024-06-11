import { html_cycle_monospace } from "./html_cycle_monospace.mjs";
import { app_learn_code_log_join_plus } from "./app_learn_code_log_join_plus.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
import { app_learn_code_random_identifier } from "./app_learn_code_random_identifier.mjs";
import { random_50_50 } from "./random_50_50.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { integer_random_digit_single_positive } from "./integer_random_digit_single_positive.mjs";
import { list_scramble } from "./list_scramble.mjs";
import { string_delimit } from "./string_delimit.mjs";
export function lesson_while_string_other_concat() {
  let description = "a string combined with something that is not a string";
  let example_message = string_combine("with ", description);
  return lesson_simple(
    function () {
      let letter = string_delimit(app_learn_code_random_identifier());
      let other = random_50_50()
        ? list_random_item([true, false])
        : integer_random_digit_single_positive();
      let list = [letter, other];
      list_scramble(list);
      return app_learn_code_log_join_plus(list);
    },
    example_before,
    description,
    example_message,
    [screen1],
  );
  function example_before(parent) {}
  function screen1(parent) {
    html_cycle_monospace(
      parent,
      "remember , in javascript ,  if `a` and `b` are strings then `a + b` will combine the two strings together",
    );
    html_cycle_monospace(
      parent,
      "however , if `a` is a string and `b` is not a string then `a + b` will first convert `b` to a string and then combine the two strings",
    );
    html_cycle_monospace(
      parent,
      "similarly , if `b` is a string and `a` is not a string then `a + b` will first convert `a` to a string and then combine the two strings",
    );
  }
}
