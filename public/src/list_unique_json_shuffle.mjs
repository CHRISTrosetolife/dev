import { list_shuffle } from "./list_shuffle.mjs";
import { list_unique_json } from "./list_unique_json.mjs";
export function list_unique_json_shuffle(factor_polynomials_choices) {
  factor_polynomials_choices = list_unique_json(factor_polynomials_choices);
  list_shuffle(factor_polynomials_choices);
  return factor_polynomials_choices;
}
