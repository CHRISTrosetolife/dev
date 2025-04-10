import { html_cycle_list } from "./html_cycle_list.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { html_p } from "./html_p.mjs";
import { noop } from "./noop.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
export function lesson_console_log_javascript(parent) {
  html_cycle_list(
    parent,
    html_p,
    [noop, html_style_bold],
    [
      "we will be learning a computer programming language called ",
      "javascript",
    ],
  );
  html_cycle_list(
    parent,
    html_p,
    [noop, html_style_bold],
    [
      "in english , a sentence is analogous to a ",
      "statement",
      " in javascript",
    ],
  );
  html_cycle_list(
    parent,
    html_p,
    [noop, html_style_code],
    ["at the end of a statement there should be a semicolon ( ", ";", " )"],
  );
  return;
  html_cycle_list(
    parent,
    html_p,
    [noop, html_style_bold],
    [
      "in computer programming different symbols can be used as a ",
      "separator",
      " so that the computer can tell two things apart",
    ],
  );
  html_cycle_list(
    parent,
    html_p,
    [noop, html_style_code],
    [
      "in javascript a semicolon ( ",
      ";",
      " ) is a separator that separates statements from other statements",
    ],
  );
}
