import { html_cycle_code } from "./html_cycle_code.mjs";
import { lesson_if_else_string_concat_variables_quiz } from "./lesson_if_else_string_concat_variables_quiz.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function lesson_if_else_string_concat_variable() {
  let description = "string combined a variable";
  let example_message = string_combine("with ", description);
  return lesson_simple(
    function () {
      return lesson_if_else_string_concat_variables_quiz(1);
    },
    example_before,
    description,
    example_message,
    [screen1],
  );
  function example_before(parent) {
    html_cycle_code(parent, "strings can be concatenated  with a variable");
  }
  function screen1(parent) {
    html_p_text(
      parent,
      "in this lesson , strings will appear in alphabetical order",
    );
    html_p_text(parent, "for example , this is allowed :");
    app_learn_code_code_part_contrast(
      parent,
      `let c = 'a';
console.log('b' + c);`,
    );
    html_p_text(parent, "however , this is not allowed :");
    app_learn_code_code_part_contrast(
      parent,
      `let c = 'b';
console.log('a' + c);`,
    );
  }
}
