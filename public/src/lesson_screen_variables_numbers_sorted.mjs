import { html_li_text } from "./html_li_text.mjs";
import { html_ul } from "./html_ul.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function lesson_screen_variables_numbers_sorted(parent) {
  html_p_text(parent, "in this lesson :");
  let ul = html_ul(parent);
  html_li_text(ul, "the declared variables will be ordered alphabetically");
  html_li_text(ul, "the numbers will be assigned from smallest to largest");
}
