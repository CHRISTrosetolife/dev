import { html_condition_letters_numbers_underscores_conditions } from "./html_condition_letters_numbers_underscores_conditions.mjs";
import { each_or } from "./each_or.mjs";
import { list_all } from "./list_all.mjs";
export function list_all_or(
  list,
  html_condition_letters_numbers_underscores_conditions,
) {
  return list_all(list, (l) => {
    return each_or(l, html_condition_letters_numbers_underscores_conditions);
  });
}
