import { html_style_alternate_list } from "./html_style_alternate_list.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { lesson_variable_code_get } from "./lesson_variable_code_get.mjs";
import { app_learn_code_random_value } from "./app_learn_code_random_value.mjs";
import { app_learn_code_random_identifier } from "./app_learn_code_random_identifier.mjs";
import { html_li } from "./html_li.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_p } from "./html_p.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { noop } from "./noop.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_ul } from "./html_ul.mjs";
import { html_hr } from "./html_hr.mjs";
export function lesson_variable() {
  let example_message = "outputting a variable to the console";
  let description = example_message;
  return lesson_simple(
    function () {
      let name = app_learn_code_random_identifier();
      let value = app_learn_code_random_value();
      return lesson_variable_code_get(name, value);
    },
    example_before,
    description,
    example_message,
    [screen1, screen2, screen3, screen4, screen5, screen6],
  );
  function example_before(parent) {}
  function screen1(parent) {
    html_style_alternate_list(
      parent,
      html_p,
      [noop, html_style_bold],
      ["in javascript , ", "variables", " have a ", "name", " and a ", "value"],
    );
    html_p_text(parent, "variables can be given a value using their name");
    html_p_text(
      parent,
      "the value given to a variable can be used later using the name of the variable",
    );
  }
  function screen2(parent) {
    html_p_text(
      parent,
      "to use a variable , javascript should know about the variable",
    );
    html_style_alternate_list(
      parent,
      html_p,
      [noop, html_style_code],
      [
        "to tell javascript about a variable named ",
        "variable_name",
        " we can write a statement using ",
        "let",
        " like this :",
      ],
    );
    app_learn_code_code_part_contrast(parent, "let variable_name;");
    html_style_alternate_list(
      parent,
      html_p,
      [noop, html_style_code],
      ["because this is a statement , it ends in semicolon ( ", ";", " )"],
    );
  }
  function screen3(parent) {
    html_p_text(parent, "in javascript , variable names can contain :");
    let ul = html_ul(parent);
    html_style_alternate_list(
      ul,
      html_li,
      [noop, html_style_code],
      [
        "letters ( ",
        "a",
        " , ",
        "b",
        " , ",
        "c",
        " , ... , ",
        "z",
        " and ",
        "A",
        " , ",
        "B",
        " , ",
        "C",
        " , ... , ",
        "Z",
        " )",
      ],
    );
    html_style_alternate_list(
      ul,
      html_li,
      [noop, html_style_code],
      [
        "digits ( ",
        "0",
        " , ",
        "1",
        " , ",
        "2",
        " , ",
        "3",
        " , ... , ",
        "9",
        " )",
      ],
    );
    html_style_alternate_list(
      ul,
      html_li,
      [noop, html_style_code],
      ["underscores ( ", "_", " )"],
    );
    html_style_alternate_list(
      ul,
      html_li,
      [noop, html_style_code],
      ["dollar signs ( ", "$", " )"],
    );
    html_p_text(parent, "here are some examples of valid variable names :");
    app_learn_code_code_part_contrast(parent, "y");
    app_learn_code_code_part_contrast(parent, "Y");
    app_learn_code_code_part_contrast(parent, "_");
    app_learn_code_code_part_contrast(parent, "$");
    app_learn_code_code_part_contrast(parent, "$$");
    app_learn_code_code_part_contrast(parent, "__$");
    app_learn_code_code_part_contrast(parent, "d8$_");
  }
  function screen4(parent) {
    html_p_text(parent, "variable names cannot begin with a number");
    html_hr(parent);
    html_p_text(parent, "in a variable name , the case of the letters matter");
    html_style_alternate_list(
      parent,
      html_p,
      [noop, html_style_code],
      [
        "for example ",
        "JESUS",
        " , ",
        "jesus",
        " and ",
        "Jesus",
        " are all different variable names , even though they contain the same letters",
      ],
    );
    html_hr(parent);
    html_p_text(parent, "some words cannot be used as variables");
    html_style_alternate_list(
      parent,
      html_p,
      [noop, html_style_code],
      [
        "for example ",
        "if",
        " , ",
        "else",
        " , ",
        "for",
        " and ",
        "while",
        " cannot be used as variable names because they already have meaning in javascript",
      ],
    );
  }
  function screen5(parent) {
    html_style_alternate_list(
      parent,
      html_p,
      [noop, html_style_code],
      [
        "remember the code from earlier that told javascript about ",
        "variable_name",
        " :",
      ],
    );
    app_learn_code_code_part_contrast(parent, "let variable_name;");
    html_p_text(
      parent,
      "after telling javascript about a variable , eventually variables should be given a value",
    );
    html_style_alternate_list(
      parent,
      html_p,
      [noop, html_style_code],
      [
        "to give a variable named ",
        "variable_name",
        " a value of ",
        "123",
        " write :",
      ],
    );
    app_learn_code_code_part_contrast(parent, "variable_name = 123;");
    html_p_text(parent, "in math x = y says x and y are equal");
    html_style_alternate_list(
      parent,
      html_p,
      [noop, html_style_code],
      ["in javascript , ", "=", " does not check if two things are equal"],
    );
    html_style_alternate_list(
      parent,
      html_p,
      [noop, html_style_code],
      ["instead , ", "=", " can be used to give a variable a value"],
    );
  }
  function screen6(parent) {
    html_p_text(parent, "here was the code from earlier :");
    app_learn_code_code_part_contrast(parent, "let variable_name;");
    app_learn_code_code_part_contrast(parent, "variable_name = 123;");
    html_p_text(parent, "and now either of the following will output 123 :");
    app_learn_code_code_part_contrast(parent, "console.log(123);");
    app_learn_code_code_part_contrast(parent, "console.log(variable_name);");
  }
}
