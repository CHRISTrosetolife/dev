import { html_cycle_list } from "./html_cycle_list.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { html_style_monospace } from "./html_style_monospace.mjs";
import { noop } from "./noop.mjs";
import { html_p } from "./html_p.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
export function lesson_log_number_explain(parent) {
  html_cycle_list(
    parent,
    html_p,
    [noop, html_style_code],
    ["remember , strings need quotes ( ", "'", " ) :"],
  );
  app_learn_code_code_part_contrast(parent, "'text'");
  html_p_text(parent, "however , numbers do not need quotes :");
  app_learn_code_code_part_contrast(parent, "0");
  app_learn_code_code_part_contrast(parent, "12");
  app_learn_code_code_part_contrast(parent, "345");
  html_p_text(
    parent,
    "sometimes people write numbers with commas separating the digits , like 1,000 and 23,467,890",
  );
  html_p_text(parent, "in javascript numbers are not written with commas :");
  app_learn_code_code_part_contrast(parent, "1000");
  app_learn_code_code_part_contrast(parent, "23467890");
  html_p_text(parent, "numbers can have a negative sign :");
  app_learn_code_code_part_contrast(parent, "-6");
  app_learn_code_code_part_contrast(parent, "-7890");
  html_p_text(parent, "numbers can have a decimal point :");
  app_learn_code_code_part_contrast(parent, "6.7");
  app_learn_code_code_part_contrast(parent, "8901.23");
}
