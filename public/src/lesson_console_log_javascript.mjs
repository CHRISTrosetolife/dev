import { html_style_alternate } from "./html_style_alternate.mjs";
import { html_p } from "./html_p.mjs";
import { html_style_monospace } from "./html_style_monospace.mjs";
import { noop } from "./noop.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { app_learn_code_style_code_colored } from "./app_learn_code_style_code_colored.mjs";
export function lesson_console_log_javascript(parent) {
  html_style_alternate(
    parent,
    html_p,
    [noop, html_style_bold],
    [
      "we will be learning a computer programming language called ",
      "javascript",
    ],
  );
  html_style_alternate(
    parent,
    html_p,
    [noop, html_style_bold],
    [
      "in english , a sentence is analogous to a ",
      "statement",
      " in javascript",
    ],
  );
  html_style_alternate(
    parent,
    html_p,
    [noop, app_learn_code_style_code_colored],
    ["at the end of a statement there should be a semicolon ( ", ";", " )"],
  );
  html_style_alternate(
    parent,
    html_p,
    [noop, html_style_bold],
    [
      "in computer programming different symbols can be used as a ",
      "separator",
      " so that the computer can tell two things apart",
    ],
  );
  html_style_alternate(
    parent,
    html_p,
    [noop, app_learn_code_style_code_colored],
    [
      "in javascript a semicolon ( ",
      ";",
      " ) is a separator that separates statements from other statements",
    ],
  );
}
