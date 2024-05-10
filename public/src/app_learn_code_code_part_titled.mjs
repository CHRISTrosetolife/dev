import { app_learn_code_code_part_title } from "./app_learn_code_code_part_title.mjs";
import { app_learn_code_code_part } from "./app_learn_code_code_part.mjs";
export function app_learn_code_code_part_titled(
  parent,
  title_text,
  source_code,
  background_color,
) {
  app_learn_code_code_part_title(parent, title_text);
  let code = app_learn_code_code_part(parent, source_code, background_color);
  return {
    code,
  };
}
