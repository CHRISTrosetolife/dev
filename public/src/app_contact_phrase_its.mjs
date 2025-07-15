import { match_choice } from "./match_choice.mjs";
export function app_contact_phrase_its() {
  let v = match_choice(["it's", "its"]);
  return v;
}
