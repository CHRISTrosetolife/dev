import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_map } from "./list_map.mjs";
import { string_split_multiple } from "./string_split_multiple.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { list_chunk } from "./list_chunk.mjs";
export function app_el_upload() {
  let alphabet_string = string_combine_multiple([
    "\nΑα\tAlpha\tΝν\tNu\nΒβ\tBeta\tΞξ\tXi\nΓγ\tGamma\tΟο\tOmicron\nΔδ\tDelta\tΠπ\tPi\nΕε\tEpsilon\tΡρ\tRho\nΖζ\tZeta\tΣσς\tSigma\nΗη\tEta\tΤτ\tTau\nΘθ\tTheta\tΥυ\tUpsilon\nΙι\tIota\tΦφ\tPhi\nΚκ\tKappa\tΧχ\tChi\nΛλ\tLambda\tΨψ\tPsi\nΜμ\tMu\tΩω\tOmega\n    ",
  ]);
  let split = string_split_multiple(alphabet_string, ["\n", "\t"]);
  let mapped = list_map(split, string_trim_whitespace);
  let filtered = list_filter(mapped, string_empty_not_is);
  let chunks = list_chunk(filtered, 2);
  list_adder((la) => {
    each(list, (item) => {});
  });
  return chunks;
}
