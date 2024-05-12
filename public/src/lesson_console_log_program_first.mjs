import { app_learn_code_code } from "./app_learn_code_code.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { noop } from "./noop.mjs";
import { html_style_alternate } from "./html_style_alternate.mjs";
import { html_p } from "./html_p.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_monospace } from "./html_style_monospace.mjs";
import { app_learn_code_style_code_colored } from "./app_learn_code_style_code_colored.mjs";
export function lesson_console_log_program_first(parent) {
  html_style_alternate(
    parent,
    html_p,
    [noop, app_learn_code_style_code_colored],
    ["suppose there is a process named ", "console.log"],
  );
  html_p_text(parent, "then we can write : ");
  app_learn_code_code_part_contrast(parent, "console.log()");
  html_p_text(
    parent,
    "right now there are no inputs for this process , so there is nothing in between the parentheses",
  );
  html_style_alternate(
    parent,
    html_p,
    [noop, app_learn_code_style_code_colored],
    ["suppose there is a string ", "'hello'"],
  );
  html_style_alternate(
    parent,
    html_p,
    [noop, app_learn_code_style_code_colored],
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
  html_p_text(parent, "this is almost a finished computer program");
  html_p_text(
    parent,
    "to finish this computer program we should add a semicolon separator to the end",
  );
  html_p_text(
    parent,
    "here is the finished computer program and the output of the computer program :",
  );
  html_style_alternate(
    parent,
    html_p,
    [noop, html_style_bold],
    [
      "( when a human writes a computer program&nbsp;, the human writes ",
      "code",
      " )",
    ],
  );
  app_learn_code_code(parent, `console.log('hello');`);
}
