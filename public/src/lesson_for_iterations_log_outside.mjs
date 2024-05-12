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
export function lesson_for_iterations_log_outside() {
  let description = "`for` loop with a counter with no logging inside";
  let example_message = "with a `for` loop with a counter with no logging inside of the `for` loop"
  return lesson_simple(
    function () {
      let { name, value, loop_end } = lesson_while_generic_1();
      let lines = [
        js_code_statement_let_assign("counter", "0"),
        js_code_statement_let(name),
        `for (${js_code_statement_assign(name, value)} ${name} <= ${loop_end}; ${js_code_increment(name)}) {`,
        js_code_statement_increment("counter"),
        `}`,
        app_learn_code_log(`'after ' + ${name} + ' ' + counter`),
      ];
      return list_join_newline(lines);
    },
    example_before,
    description,
    example_message,
    [],
  );
  function example_before(parent) {
  }
  function screen1(parent) {
    html_style_alternate_monospace_short_multiple(parent, [
      'suppose there is a program with a `for` loop',
      'suppose there is a `console.log` inside the `for` loop',
      'suppose the `for` loop repeats only 3 times',
      'then , the `console.log` will only run 3 times',
      'however , if the loop repeats a hundred times , then the `console.log` would run 100 times',
      'reading through 100 console.log\'s takes a long time',
      'it is useful to be able to read the code and think about what it does than have to always use `console.log`',
      'of course if you get stuck it is okay to use console.log or whatever else helps',
      'in this lesson , the goal is to be able to read the code and figure out how many times it runs without having a `console.log` on the inside of the `for` loop'
    ]);
  }
}
