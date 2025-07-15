import { match_sequence } from "./match_sequence.mjs";
import { match_optional } from "./match_optional.mjs";
export function match_sequence_optional(sequence) {
  return match_optional(match_sequence(sequence));
}
