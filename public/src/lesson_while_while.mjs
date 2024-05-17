import { html_style_alternate_short_p } from "./html_style_alternate_short_p.mjs";
import { lesson_while_generic_1 } from "./lesson_while_generic_1.mjs";
import { html_style_alternate_monospace_short_multiple } from "./html_style_alternate_monospace_short_multiple.mjs";
import { js_code_statement_increment } from "./js_code_statement_increment.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { string_combine } from "./string_combine.mjs";
import { noop } from "./noop.mjs";
import { app_learn_code_style_code_colored } from "./app_learn_code_style_code_colored.mjs";
export function lesson_while_while() {
  let description = "`while` loop";
  let example_message = string_combine("with a ", description);
  return lesson_simple(
    function () {
      let { name, value, loop_end } = lesson_while_generic_1();
      let lines = [
        js_code_statement_let_assign(name, value),
        `while (${name} <= ${loop_end}) {`,
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
    html_style_alternate_monospace_short_multiple(parent, [
      "an `if` is ran only once",
      "a `while` is similar to an `if`",
      "a `while` is an `if` that runs over and over",
      "a `while` will be ran until what is in between the parenthesis is `false`",
    ]);
    html_style_alternate_short_p(parent, [noop, app_learn_code_style_code_colored, noop, ], [
      "because a `while` runs over and over , sometimes it is called a `while` loop",
    ]);
  }
}
