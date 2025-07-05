import { each } from "./each.mjs";
export function match_choice(choices) {
  let v = function (m) {
    let { input } = m;
    each(choices, function (choice) {});
  };
  return v;
}
