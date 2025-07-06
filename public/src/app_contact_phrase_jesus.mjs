import { match_optional } from "./match_optional.mjs";
import { match_sequence } from "./match_sequence.mjs";
export function app_contact_phrase_jesus() {
  let v = match_sequence(["Jesus", match_optional("Christ")]);
  return v;
}
