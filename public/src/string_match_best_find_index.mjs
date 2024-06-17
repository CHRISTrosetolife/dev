import ss from "string-similarity";
export function string_match_best_find_index(search, choices) {
  let matches = ss.findBestMatch(search, choices);
  return matches.bestMatchIndex;
}
