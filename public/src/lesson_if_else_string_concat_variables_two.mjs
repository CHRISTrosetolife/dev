import { lesson_screen_variables_alphabetical } from "./lesson_screen_variables_alphabetical.mjs";
import { lesson_if_else_string_concat_variables_quiz } from "./lesson_if_else_string_concat_variables_quiz.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
export function lesson_if_else_string_concat_variables_two() {
  let description = "string combined with two variables";
  let example_message = string_combine("with ", description);
  return lesson_simple(
    function () {
      return lesson_if_else_string_concat_variables_quiz(2);
    },
    example_before,
    description,
    example_message,
    [lesson_screen_variables_alphabetical],
  );
  function example_before(parent) {
    html_style_alternate_monospace_short(
      parent,
      "strings can be concatenated  with multiple variables",
    );
  }
  function screen2(parent) {
    html_p_text(
      parent,
      "in this lesson , strings will appear in alphabetical order",
    );
    html_p_text(parent, "for example , this is allowed :");
    app_learn_code_code_part_contrast(
      parent,
      `let a = 'b' , c = 'd';
console.log(c + 'e' + a);`,
    );
    html_style_alternate_monospace_short(
      parent,
      "because `'b'` comes before `'d'` and `'d'` comes before `'e'` in the alphabet",
    );
    html_p_text(parent, "however , this is not allowed :");
    app_learn_code_code_part_contrast(
      parent,
      `let a = 'e' , c = 'd';
console.log(c + 'b' + a);`,
    );
  }
}
