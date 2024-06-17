import ss from "string-similarity";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function string_match_best_find(search, choices) {
  assert_arguments_length(arguments, 2);
  let matches = ss.findBestMatch(search, choices);
  return {
    closest: matches.bestMatch.target,
    index: matches.bestMatchIndex,
  };
}
