import { app_contact_phrase_its } from "./app_contact_phrase_its.mjs";
import { match_optional } from "./match_optional.mjs";
import { match_sequence } from "./match_sequence.mjs";
import { match_choice } from "./match_choice.mjs";
export function app_contact_phrase_it_is() {
  return match_choice([
    match_sequence([match_optional("it"), "is"]),
    app_contact_phrase_its(),
  ]);
}
