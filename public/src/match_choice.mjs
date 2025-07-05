import { list_filter } from "./list_filter.mjs";
export function match_choice(choices) {
  let v = function match_choice_inner(input, index) {
    list_filter(choices, function (choice) {
      let result = choice(input, index);
      let { match } = result;
      return match;
    });
  };
  return v;
}
