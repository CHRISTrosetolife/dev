export function string_match_best_find(search, choices) {
  let matches = stringSimilarity.findBestMatch("healed", [
    "edward",
    "sealed",
    "theatre",
  ]);
  return matches;
}
