import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function lesson_screen_variables_alphabetical(parent) {
  html_p_text(
    parent,
    "in this lesson variable names will be declared in alphabetical order",
  );
  html_p_text(parent, "for example , this is allowed :");
  app_learn_code_code_part_contrast(parent, list_join_newline(["let a, b;"]));
  html_p_text(parent, "however , this is not allowed :");
  app_learn_code_code_part_contrast(parent, list_join_newline(["let b, a;"]));
}
