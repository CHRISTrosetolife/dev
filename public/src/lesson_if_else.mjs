import { html_cycle_code_list } from "./html_cycle_code_list.mjs";
import { html_cycle_bold_list } from "./html_cycle_bold_list.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_random_boolean_binary } from "./app_learn_code_random_boolean_binary.mjs";
import { app_learn_code_unique_multiple } from "./app_learn_code_unique_multiple.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { app_learn_code_random_value } from "./app_learn_code_random_value.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_map } from "./list_map.mjs";
import { lesson_console_log_quiz_value } from "./lesson_console_log_quiz_value.mjs";
export function lesson_if_else() {
  let description = "`if` with `else`";
  let example_message = string_combine("with an ", description);
  return lesson_simple(
    function () {
      let boolean = app_learn_code_random_boolean_binary();
      let values = app_learn_code_unique_multiple(
        lesson_console_log_quiz_value,
        2,
      );
      let mapped = list_map(values, app_learn_code_log);
      let [a, b] = mapped;
      let lines = [`if (${boolean}) {`, a, `} else {`, b, `}`];
      return list_join_newline(lines);
    },
    example_before,
    description,
    example_message,
    [screen1, screen2, screen3],
  );
  function example_before(parent) {}
  function screen1(parent) {
    html_cycle_code_list(parent, [
      "in javascript , code in between a ",
      "/*",
      " and a ",
      "*/",
      " is ignored",
    ]);
    html_cycle_bold_list(parent, ["this is called a ", "comment"]);
    html_p_text(parent, "comments are for humans and code is for computers");
    html_p_text(parent, "here is an example comment :");
    app_learn_code_code_part_contrast(parent, "/* console.log(0); */");
    html_cycle_code_list(parent, [
      "even though it says ",
      "console.log(0);",
      " that will not get ran because it is inside of a comment",
    ]);
  }
  function screen2(parent) {
    html_cycle_code_list(parent, [
      "another way to write a comment is to use ",
      "//",
    ]);
    html_cycle_code_list(parent, [
      "",
      "//",
      " begins a comment and the comment continues until the end of the current line",
    ]);
    html_cycle_code_list(parent, ["here is an example ", "//", " comment :"]);
    app_learn_code_code_part_contrast(
      parent,
      "let a; // a is the first letter of the alphabet",
    );
  }
  function screen3(parent) {
    html_cycle_code_list(parent, [
      'in programming , sometimes there is need to code : if "a" is ',
      "true",
      ' , then do "b" , otherwise , if "a" is ',
      "false",
      ' , then do "c"',
    ]);
    html_p_text(
      parent,
      'in other words , choose between "b" and "c" , depending on the value of "a"',
    );
    html_cycle_code_list(parent, [
      "the code to represent that uses ",
      "else",
      " :",
    ]);
    app_learn_code_code_part_contrast(
      parent,
      list_join_newline(["if (a) {", "// b", "} else {", "// c", "}"]),
    );
  }
}
