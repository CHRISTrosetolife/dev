import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_el_alphabet_string() {
  "https://en.wikipedia.org/wiki/Archaic_Greek_alphabets";
  let alphabet_string = string_combine_multiple([
    "\nΑα\tAlpha\tΝν\tNu\nΒβ\tBeta\tΞξ\tXi\nΓγ\tGamma\tΟο\tOmicron\nΔδ\tDelta\tΠπ\tPi\nΕε\tEpsilon\tΡρ\tRho\nΖζ\tZeta\tΣσς\tSigma\nΗη\tEta\tΤτ\tTau\nΘθ\tTheta\tΥυ\tUpsilon\nΙι\tIota\tΦφ\tPhi\nΚκ\tKappa\tΧχ\tChi\nΛλ\tLambda\tΨψ\tPsi\nΜμ\tMu\tΩω\tOmega\n    ",
  ]);
  return alphabet_string;
}
