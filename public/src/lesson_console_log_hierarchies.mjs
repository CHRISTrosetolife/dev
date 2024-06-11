import { html_style_alternate_list } from "./html_style_alternate_list.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { noop } from "./noop.mjs";
import { html_p } from "./html_p.mjs";
import { html_p_text } from "./html_p_text.mjs";
export async function lesson_console_log_hierarchies(parent) {
  html_p_text(parent, "in english , there are letters");
  html_p_text(parent, "words have letters");
  html_p_text(parent, "phrases have words");
  html_p_text(parent, "sentences have phrases");
  html_p_text(parent, "paragraphs have sentences");
  html_p_text(parent, "and so on");
  html_style_alternate_list(
    parent,
    html_p,
    [noop, html_style_bold],
    ["this is a ", "hierarchy"],
  );
  html_style_alternate_list(
    parent,
    html_p,
    [noop, html_style_bold],
    ["a hierarchy can also be called a ", "tree"],
  );
  html_p_text(parent, "trees are very important in computer programming");
}
