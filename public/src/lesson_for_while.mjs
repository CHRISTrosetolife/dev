import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { lesson_while_generic_1 } from "./lesson_while_generic_1.mjs";
import { js_code_statement_increment } from "./js_code_statement_increment.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
export function lesson_for_while() {
  let description = "`for` loop with middle only";
  let example_message = "with a `for` loop with the middle statement only";
  return lesson_simple(
    function () {
      let { name, value, loop_end } = lesson_while_generic_1();
      let lines = [
        js_code_statement_let_assign(name, value),
        `for ( ; ${name} <= ${loop_end}; ) {`,
        app_learn_code_log(`'inside ' + ${name}`),
        js_code_statement_increment(name),
        `}`,
        app_learn_code_log(`'after ' + ${name}`),
      ];
      return list_join_newline(lines);
    },
    example_before,
    description,
    example_message,
    [screen1],
  );
  function example_before(parent) {}
  function screen1(parent) {
    html_p_text(parent, "here is some code :");
    let lines = [`while (a) {`, `// b`, `}`];
    app_learn_code_code_part_contrast(parent, list_join_newline(lines));
    html_p_text(parent, "that code can be rewritten as :");
    let lines2 = [`for ( ; a; ) {`, `// b`, `}`];
    app_learn_code_code_part_contrast(parent, list_join_newline(lines2));
  }
}
