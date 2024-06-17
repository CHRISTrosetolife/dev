import ss from "string-similarity";
export function string_match_best_find_index(search, choices) {
  let matches = ss.findBestMatch("healed", ["edward", "sealed", "theatre"]);
  return matches;
}
