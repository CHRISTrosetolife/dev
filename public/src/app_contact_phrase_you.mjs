import { match_optional } from "./match_optional.mjs";
import { match_sequence } from "./match_sequence.mjs";
export function app_contact_phrase_you() {
  let v = match_sequence([
    "you",
    match_optional(
      match_sequence(["servant", "of", "the", "most", "high", "god"]),
    ),
  ]);
  return v;
}
