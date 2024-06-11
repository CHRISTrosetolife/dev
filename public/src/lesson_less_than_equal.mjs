import { html_cycle_list } from "./html_cycle_list.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { lesson_comparisons_source_get_get } from "./lesson_comparisons_source_get_get.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { html_p } from "./html_p.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { noop } from "./noop.mjs";
import { html_style_monospace } from "./html_style_monospace.mjs";
import { html_ul } from "./html_ul.mjs";
import { html_li_text } from "./html_li_text.mjs";
export function lesson_less_than_equal() {
  const description = "less than or equal to ( `<=` )";
  const example_message =
    "outputting whether or not a number is less than or equal to another number";
  return lesson_simple(
    lesson_comparisons_source_get_get("<="),
    example_before,
    description,
    example_message,
    [screen_before1, screen_before2],
  );
  function screen_before1(parent) {
    html_p_text(
      parent,
      '"less than or equal to" ( ≤ ) is almost the same as "less than" ( < )',
    );
    html_p_text(
      parent,
      "the only difference is when the two numbers being compared are the same",
    );
    html_p_text(
      parent,
      'if "a" and "b" are equal then "a" is less than or equal to "b"',
    );
    html_p_text(
      parent,
      'whereas if "a" and "b" are equal then "a" is not less than "b"',
    );
  }
  function screen_before2(parent) {
    html_p_text(parent, "if a < b then a ≤ b");
    html_p_text(parent, "if a = b then a ≤ b");
    html_p_text(parent, "here are some examples :");
    let ul1 = html_ul(parent);
    html_li_text(ul1, "3 ≤ 5 is true");
    html_li_text(ul1, "6 ≤ 4 is false");
    html_li_text(ul1, "2 ≤ 2 is true");
  }
  function example_before(parent) {
    html_cycle_list(
      parent,
      html_p,
      [noop, html_style_code],
      ["in javascript a ≤ b is written as : ", "a <= b"],
    );
  }
}
