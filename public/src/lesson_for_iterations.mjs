import { js_code_statement_increment } from "./js_code_statement_increment.mjs";
import { js_code_increment } from "./js_code_increment.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { lesson_while_generic_1 } from "./lesson_while_generic_1.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { string_combine } from "./string_combine.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
export function lesson_for_iterations() {
  let description = "`for` loop with a counter";
  let example_message = string_combine("with a ", description);
  return lesson_simple(
    function () {
      let { name, value, loop_end } = lesson_while_generic_1();
      let lines = [
        js_code_statement_let_assign("counter"),
        `for (${js_code_statement_let_assign(name, value)} ${name} <= ${loop_end}; ${js_code_increment(name)}) {`,
        js_code_statement_increment("counter"),
        app_learn_code_log(`'inside ' + ${name} + ' ' + counter`),
        `}`,
        app_learn_code_log(`'after ' + ${name} + ' ' + counter`),
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
    let lines = [`a;`, `while (b) {`, `// c`, `d;`, `}`];
    app_learn_code_code_part_contrast(parent, list_join_newline(lines));
    html_p_text(parent, "that code can be rewritten as :");
    let lines2 = [`for (a; b; d) {`, `// c`, `}`];
    app_learn_code_code_part_contrast(parent, list_join_newline(lines2));
  }
}
