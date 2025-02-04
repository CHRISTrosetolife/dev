import { html_condition_letters_numbers_underscores_conditions } from "./html_condition_letters_numbers_underscores_conditions.mjs";
import { each } from "./each.mjs";
export function each_or(
  item,
  html_condition_letters_numbers_underscores_conditions,
) {
  let result = false;
  each(html_condition_letters_numbers_underscores_conditions, (fn) => {
    if (fn(item)) {
      result = true;
      return true;
    }
  });
  return result;
}
