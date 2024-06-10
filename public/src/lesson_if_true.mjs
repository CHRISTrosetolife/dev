import { html_style_code } from "./html_style_code.mjs";
import { app_learn_code_log_random_value } from "./app_learn_code_log_random_value.mjs";
import { html_img_limited_centered } from "./html_img_limited_centered.mjs";
import { html_style_alternate_monospace } from "./html_style_alternate_monospace.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_p } from "./html_p.mjs";
import { html_style_alternate } from "./html_style_alternate.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { noop } from "./noop.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_hr } from "./html_hr.mjs";
import { list_join } from "./list_join.mjs";
export function lesson_if_true() {
  let description = "`if` with `true`";
  let example_message = "with an `if` with `true` passed in";
  return lesson_simple(
    function () {
      let statements = [
        app_learn_code_log_random_value(),
        `if (true) {
${app_learn_code_log_random_value()}
}`,
        app_learn_code_log_random_value(),
      ];
      return list_join(statements, "\n");
    },
    example_before,
    description,
    example_message,
    [screen1, screen2, screen3],
  );
  function example_before(parent) {
    html_style_alternate_monospace(parent, [
      "in the example below , ",
      "true",
      " is in between the parentheses of the ",
      "if",
    ]);
    html_style_alternate_monospace(parent, [
      "therefore what is inside the braces of the ",
      "if",
      " is ran",
    ]);
    html_style_alternate_monospace(parent, [
      "therefore all three ",
      "console.log();",
      " statements are ran",
    ]);
    html_hr(parent);
  }
  function screen1(parent) {
    html_p_text(parent, "a pen may be used for writing");
    html_img_limited_centered(parent, "pen.jpg");
    html_p_text(parent, "a pencil may also be used for writing");
    html_img_limited_centered(parent, "pencil.jpg");
    html_p_text(parent, "an eraser can erase pencil writing");
    html_img_limited_centered(parent, "pencil_eraser.jpg");
    html_p_text(parent, "bowever , an eraser cannot erase pen writing");
    html_hr(parent);
    html_p_text(parent, "if someone needs to erase , they should use a pencil");
    html_p_text(parent, "otherwise they are free to use a pen");
  }
  function screen2(parent) {
    html_style_alternate_monospace(parent, [
      'in programming , sometimes there is need to code : if "a" is ',
      "true",
      ' , then do "b"',
    ]);
    html_style_alternate_monospace(parent, [
      '"b" is something that should happen only if "a" is ',
      "true",
    ]);
  }
  function screen3(parent) {
    html_p_text(
      parent,
      "below is some code that could represent using a pencil if an eraser is needed :",
    );
    app_learn_code_code_part_contrast(
      parent,
      `let need_eraser = true;
let use_pencil = false;
if (need_eraser) {
use_pencil = true;
}`,
    );
    html_hr(parent);
    html_style_alternate_monospace(parent, [
      "after the ",
      "if",
      " there should be a pair of parentheses : ",
      "(",
      " ",
      ")",
    ]);
    html_style_alternate_monospace(parent, [
      "for now , in between the parentheses there should be something that results in either ",
      "true",
      " or ",
      "false",
    ]);
    html_style_alternate_monospace(parent, [
      "javascript allows other values besides ",
      "true",
      " and ",
      "false",
      " in between the parentheses of an ",
      "if",
    ]);
    html_p_text(parent, "however , that will not be covered at this time");
    html_style_alternate(
      parent,
      html_p,
      [noop, html_style_bold, noop, html_style_code, noop, html_style_code],
      [
        "after the parenthesis should be a pair of ",
        "braces",
        " : ",
        "{",
        " ",
        "}",
      ],
    );
    html_style_alternate_monospace(parent, [
      "in between the braces should be the code that should be ran if what is in between the parenthesis is ",
      "true",
    ]);
  }
}
