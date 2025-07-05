import { each } from "./each.mjs";
export function match_choice(choices) {
  let v = function match_choice_inner(input, index) {
    each(choices, function (choice) {
      choice(input, index);
    });
  };
  return v;
}
