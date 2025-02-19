import { list_includes_not } from "./list_includes_not.mjs";
import { html_condition_letters_numbers_underscores_spaces } from "./html_condition_letters_numbers_underscores_spaces.mjs";
export function html_conditions_letters_numbers_underscores_spaces_list_includes_not(
  message,
  existing,
) {
  return [
    html_condition_letters_numbers_underscores_spaces(),
    {
      message: function (i) {
        return message;
      },
      condition: function (i) {
        return list_includes_not(existing, i);
      },
    },
  ];
}
