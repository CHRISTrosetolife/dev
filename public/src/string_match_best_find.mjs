import ss from "string-similarity";
export function string_match_best_find(search, choices) {
  let matches = ss.findBestMatch("healed", ["edward", "sealed", "theatre"]);
  return matches;
}
