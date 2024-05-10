import { web_is } from "./web_is.mjs";
export async function import_multi(libary_to_import, variable_to_eval) {
  let a;
  if (web_is()) {
    a = eval(variable_to_eval);
  } else {
    a = await import(libary_to_import);
  }
  return a;
}
