import { names_generate_generic } from "./names_generate_generic.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function names_last_generate() {
  let url = string_combine_multiple([
    "https://gist.githubusercontent.com/craigmartin97/e98a9e2a267c379e47be1191d9431de2/raw/c09c7356e85e39e41faa92a665b7ef0b3b840b6a/last-names.txt",
  ]);
  let filtered2 = await names_generate_generic(url, names_last_generate);
  return filtered2;
}
