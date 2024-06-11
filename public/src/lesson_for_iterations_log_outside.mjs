import { html_cycle_monospace_multiple } from "./html_cycle_monospace_multiple.mjs";
import { js_code_statement_increment } from "./js_code_statement_increment.mjs";
import { js_code_increment } from "./js_code_increment.mjs";
import { lesson_while_generic_1 } from "./lesson_while_generic_1.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
export function lesson_for_iterations_log_outside() {
  let description = "`for` loop with a counter with no `console.log` inside";
  let example_message =
    "with a `for` loop with a counter with no `console.log` inside of the `for` loop";
  return lesson_simple(
    function () {
      let { name, value, loop_end } = lesson_while_generic_1();
      let lines = [
        js_code_statement_let_assign("counter", "0"),
        `for (${js_code_statement_let_assign(name, value)} ${name} <= ${loop_end}; ${js_code_increment(name)}) {`,
        js_code_statement_increment("counter"),
        `}`,
        app_learn_code_log(`counter`),
      ];
      return list_join_newline(lines);
    },
    example_before,
    description,
    example_message,
    [screen1, screen2, screen3],
  );
  function example_before(parent) {}
  function screen1(parent) {
    html_cycle_monospace_multiple(parent, [
      "suppose there is a program with a `for` loop",
      "suppose there is a `console.log` inside the `for` loop",
      "suppose the `for` loop repeats only 3 times",
      "then , the `console.log` will only run 3 times",
    ]);
  }
  function screen2(parent) {
    html_cycle_monospace_multiple(parent, [
      "however , if the loop repeats a 100 times , then the `console.log` would run 100 times",
      "reading through the output of 100 `console.log`'s takes a long time",
      "it is useful to be able to read the code and think about what it does than have to always use `console.log`",
      "of course if you get stuck it is okay to use `console.log` or whatever else helps",
      "in this lesson , the goal is to be able to read the code and figure out how many times the `for` loop runs without having a `console.log` on the inside of the `for` loop",
    ]);
  }
  function screen3(parent) {
    html_p_text(parent, "here is some example code :");
    app_learn_code_code_part_contrast(parent, `for (let i = 2; i <= 4; i++)`);
    html_cycle_monospace_multiple(parent, [
      "because `let i = 2;` , then at first `i` is `2`",
      "because `i++` , then each time `1` is added to `i`",
      "because `i <= 4` , then if `i` is `4` the `for` loop will run , but when `i` is `5` the `for` loop will not run",
      "therefore the `for` loop will run when `i` is `2` then `3` then `4`",
      "therefore the `for` loop will run a total of 3 times",
    ]);
  }
}
