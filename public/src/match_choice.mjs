import { list_filter } from "./list_filter.mjs";
export function match_choice(choices) {
  let v = function match_choice_inner(input, index) {
    list_filter(choices, function (choice) {
      choice(input, index);
    });
  };
  return v;
}
