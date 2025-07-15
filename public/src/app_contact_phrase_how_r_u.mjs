import { match_optional } from "./match_optional.mjs";
import { match_sequence_optional } from "./match_sequence_optional.mjs";
import { app_contact_phrase_you } from "./app_contact_phrase_you.mjs";
import { match_choice } from "./match_choice.mjs";
import { match_sequence } from "./match_sequence.mjs";
export function app_contact_phrase_how_r_u() {
  return match_sequence([
    match_choice(["How're", match_sequence(["how", "are"])]),
    app_contact_phrase_you(),
    match_sequence_optional(["doing", match_optional("today")]),
  ]);
}
