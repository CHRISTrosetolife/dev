import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_cycle_list } from "./html_cycle_list.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { app_learn_code_code } from "./app_learn_code_code.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { noop } from "./noop.mjs";
import { html_p } from "./html_p.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function lesson_console_log_program_first(parent) {
  html_cycle_list(
    parent,
    html_p,
    [noop, html_style_code],
    ["suppose there is a process named ", "console.log"],
  );
  html_p_text(parent, "then we can write : ");
  app_learn_code_code_part_contrast(parent, "console.log()");
  if (false) {
    html_p_text(
      parent,
      "right now there are no inputs for this process , so there is nothing in between the parentheses",
    );
  }
  html_cycle_list(
    parent,
    html_p,
    [noop, html_style_code],
    ["suppose there is a string ", "'hello'"],
  );
  html_cycle_list(
    parent,
    html_p,
    [noop, html_style_code],
    [
      "suppose the string ",
      "'hello'",
      " is an input to the ",
      "console.log",
      " process",
    ],
  );
  html_p_text(parent, "then we can write : ");
  app_learn_code_code_part_contrast(parent, "console.log('hello')");
  html_p_text(
    parent,
    "to make this a statement , we can add a semicolon to the end :",
  );
  html_cycle_list(
    parent,
    html_p,
    [noop, html_style_bold],
    [
      "( when a human writes a computer program&nbsp;, the human writes ",
      "code",
      " )",
    ],
  );
  app_learn_code_code(
    parent,
    string_combine_multiple(["console.log('hello');"]),
  );
}
