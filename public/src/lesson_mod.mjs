import { mod } from "./mod.mjs";
import { floor } from "./floor.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { html_style_alternate_bold } from "./html_style_alternate_bold.mjs";
import { html_style_alternate_monospace } from "./html_style_alternate_monospace.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { html_li_text } from "./html_li_text.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { equal } from "./equal.mjs";
import { integer_random_digit_single } from "./integer_random_digit_single.mjs";
import { html_ul } from "./html_ul.mjs";
import { html_hr } from "./html_hr.mjs";
import { range } from "./range.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_element } from "./html_element.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { app_learn_code_style_rounded_padded } from "./app_learn_code_style_rounded_padded.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { each_index } from "./each_index.mjs";
import { integer_random_digit_single_positive } from "./integer_random_digit_single_positive.mjs";
export function lesson_mod() {
  let description = "remainder ( `%` ) ( 2 )";
  let example_message =
    "outputting the remainder of a number with a divisor of 2";
  return lesson_simple(
    function () {
      let a = integer_random_digit_single_positive();
      let lines = [app_learn_code_log(`${a} % 2`)];
      return list_join_newline(lines);
    },
    example_before,
    description,
    example_message,
    [screen1, screen2, screen3],
  );
  function example_before(parent) {
    html_style_alternate_monospace(parent, [
      "in javascript , to get the remainder of ",
      "dividend",
      " use ",
      "%",
      " like this : ",
      "dividend % divisor",
    ]);
  }
  function screen1(parent) {
    html_p_text(parent, "here is an example of division in math : a / b");
    html_style_alternate_bold(parent, [
      'when a number ( like "a" ) is divided by another number ( like "b" ) , the first number is called the ',
      "dividend",
    ]);
    html_style_alternate_bold(parent, [
      "the second number is called the ",
      "divisor",
    ]);
    html_p_text(
      parent,
      "for example in 7 / 4 the dividend is 7 and the divisor is 4",
    );
  }
  function screen2(parent) {
    html_p_text(
      parent,
      "after the divisor divides the dividend , there is a quotient and a remainder",
    );
    html_p_text(
      parent,
      "the following formula will give the answer to the division with a decimal point :",
    );
    html_p_text(parent, "quotient + ( remainder / divisor )");
    html_p_text(
      parent,
      "for example 7 / 4 has a quotient of 1 and a remainder of 3",
    );
    html_p_text(parent, "1 + ( 3 / 4 ) = 1 + 0.75 = 1.75");
  }
  function screen3(parent) {
    let divisor = 2;
    html_p_text(
      parent,
      string_combine(
        "in the table below are some quotient and remainders for a divisor of ",
        divisor,
      ),
    );
    html_p_text(parent, "pay attention to the remainder");
    html_p_text(parent, "here is what the letters mean :");
    let ul = html_ul(parent);
    html_li_text(ul, "a is the dividend");
    html_li_text(ul, "b is the divisor");
    html_li_text(ul, "q is the quotient");
    html_li_text(ul, "r is the remainder");
    let table = html_element(parent, "table");
    html_style_width_full(table);
    let thead = html_element(table, "thead");
    let tr_head = html_element(thead, "tr");
    let columns_head = ["a", "b", "a / b", "q", "r"];
    each_index(columns_head, (c, c_index) => {
      let th = html_element(tr_head, "th");
      html_inner_set(th, c);
      let index_last = list_index_last(columns_head);
      app_learn_code_style_rounded_padded(th);
      let color;
      if (equal(c_index, index_last)) {
        color = "#FFEB3B";
      } else {
        color = "#29B6F6";
      }
      html_style_background_color(th, color);
    });
    let tbody = html_element(table, "tbody");
    each_index(range(11), (n, n_index) => {
      let even = equal(mod(n_index, divisor), 0);
      let tr_body = html_element(tbody, "tr");
      let quotient = n / divisor;
      let columns_body = [n, divisor, quotient, floor(quotient), n % divisor];
      let index_last = list_index_last(columns_body);
      each_index(columns_body, (c, c_index) => {
        let divisor = 2;
        let td = html_element(tr_body, "td");
        html_inner_set(td, c);
        html_style_centered(td);
        app_learn_code_style_rounded_padded(td);
        let color;
        if (equal(c_index, index_last)) {
          color = even ? "#F9E79F" : "#F7DC6F";
        } else {
          color = even ? "#D6EAF8" : "#AED6F1";
        }
        html_style_background_color(td, color);
      });
    });
    html_hr(parent);
    html_p_text(
      parent,
      "did you notice how the remainder alternates between 0 and 1 ?",
    );
    html_p_text(
      parent,
      "did you notice that when the number is even the remainder is 0 ?",
    );
    html_p_text(
      parent,
      "did you notice that when the number is odd the remainder is 1 ?",
    );
    html_p_text(
      parent,
      "the remainder can be used to check whether a number is even or odd",
    );
  }
}
