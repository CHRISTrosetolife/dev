import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function prayers_heal_afflicted(cough) {
  let v = string_combine_multiple([
    "Heal me from any ",
    cough,
    " that afflicted me",
  ]);
  return v;
}
