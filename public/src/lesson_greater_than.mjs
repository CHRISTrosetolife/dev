import { html_cycle_list } from "./html_cycle_list.mjs";
import { lesson_comparisons_source_get_get } from "./lesson_comparisons_source_get_get.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { html_p } from "./html_p.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { noop } from "./noop.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_ul } from "./html_ul.mjs";
import { html_li_text } from "./html_li_text.mjs";
export function lesson_greater_than() {
  const description = "greater than ( `>` )";
  const example_message =
    "outputting whether or not a number is greater than another number";
  return lesson_simple(
    lesson_comparisons_source_get_get(">"),
    example_before,
    description,
    example_message,
    [screen_before1],
  );
  function screen_before1(parent) {
    html_cycle_list(
      parent,
      html_p,
      [noop, html_style_bold],
      [
        'if "a" and "b" are numbers and "a" is less than "b" then "b" is ',
        "greater than",
        ' "a"',
      ],
    );
    html_p_text(
      parent,
      'like less than , if "a" and "b" are equal to each other , then "a" is not greater than "b"',
    );
    html_p_text(parent, 'we can write "a" is greater than "b" as : a > b');
    html_p_text(parent, "here are some examples :");
    let ul = html_ul(parent);
    html_li_text(ul, "6 > 4 is true");
    html_li_text(ul, "3 > 5 is false");
    html_li_text(ul, "2 > 2 is false");
  }
  function example_before(parent) {}
}
