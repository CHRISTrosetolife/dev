import { html_cycle_list } from "./html_cycle_list.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_p } from "./html_p.mjs";
import { noop } from "./noop.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
export function lesson_console_log_strings(parent) {
  html_cycle_list(
    parent,
    html_p,
    [noop, html_style_bold],
    [
      "in javascript , text , like letters and symbols , is called a ",
      "string",
    ],
  );
  html_p_text(parent, "here are some examples of strings :");
  app_learn_code_code_part_contrast(parent, "'hello'");
  app_learn_code_code_part_contrast(parent, "'strings can have spaces'");
  app_learn_code_code_part_contrast(
    parent,
    "'strings can have numbers like 123'",
  );
  app_learn_code_code_part_contrast(parent, "'456'");
  app_learn_code_code_part_contrast(
    parent,
    "'strings can have symbols : !@#$%^&*...'",
  );
  return;
  html_cycle_list(
    parent,
    html_p,
    [noop, html_style_code],
    [
      "notice that a string has a quote ( ",
      "'",
      " ) at the beginning and another quote at the end",
    ],
  );
}
