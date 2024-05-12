import { html_style_alternate_monospace_short_multiple } from "./html_style_alternate_monospace_short_multiple.mjs";
import { js_code_statement_assign } from "./js_code_statement_assign.mjs";
import { js_code_statement_let } from "./js_code_statement_let.mjs";
import { js_code_statement_increment } from "./js_code_statement_increment.mjs";
import { js_code_increment } from "./js_code_increment.mjs";
import { lesson_while_generic_1 } from "./lesson_while_generic_1.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { string_combine } from "./string_combine.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { html_hr } from "./html_hr.mjs";
export function lesson_for_iterations() {
  let description = "`for` loop with a counter";
  let example_message = string_combine("with a ", description);
  return lesson_simple(
    function () {
      let { name, value, loop_end } = lesson_while_generic_1();
      let lines = [
        js_code_statement_let_assign("counter", "0"),
        js_code_statement_let(name),
        `for (${js_code_statement_assign(name, value)} ${name} <= ${loop_end}; ${js_code_increment(name)}) {`,
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
  function example_before(parent) {
    html_style_alternate_monospace_short_multiple(parent, [
      "in this lesson there will be a variable named `counter`",
      "`counter` will increment by `1` each time the code inside the braces of the `for` loop runs",
      "after the `for` loop runs , the value of `counter` will be the total number of times the code ran inside the braces of the `for` loop",
    ]);
    html_hr(parent);
  }
}
