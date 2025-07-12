import { match_optional } from "./match_optional.mjs";
import { match_sequence } from "./match_sequence.mjs";
export function app_contact_phrase_god() {
  let v = match_sequence([match_optional("lord"), "God"]);
  return v;
}
