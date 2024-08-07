import { list_shuffle } from "./list_shuffle.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_cycle_bold } from "./html_cycle_bold.mjs";
import { app_learn_code_log_join_plus } from "./app_learn_code_log_join_plus.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { lesson_console_log_quiz_words } from "./lesson_console_log_quiz_words.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_map } from "./list_map.mjs";
export function lesson_if_else_string_empty() {
  let description = "empty string ( `''` ) concatenation";
  let example_message = string_combine("with an ", description);
  return lesson_simple(
    function () {
      let words = lesson_console_log_quiz_words();
      let word = list_random_item(words);
      let items = [word, ""];
      let mapped = list_map(items, string_delimit);
      list_shuffle(mapped);
      return app_learn_code_log_join_plus(mapped);
    },
    example_before,
    description,
    example_message,
    [screen1],
  );
  function example_before(parent) {}
  function screen1(parent) {
    html_p_text(parent, "a string can have nothing in it");
    html_cycle_bold(parent, "this is called an `empty string");
    html_cycle_code(parent, "an empty string can look like this : `''");
    html_p_text(
      parent,
      "if a string is concatenated with an empty string , then the result is the same as before",
    );
  }
}
