import { web_not_is } from "./web_not_is.mjs";
export async function import_node(libary_to_import) {
  let a;
  if (web_not_is()) {
    a = await import(libary_to_import);
  }
  return a;
}
