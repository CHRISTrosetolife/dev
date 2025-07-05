import { each } from "./each.mjs";
export function match_choice(choices) {
  let v = function (m) {
    each(choices, function (choice) {
      let { input } = m;
    });
  };
  return v;
}
