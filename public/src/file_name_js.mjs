import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function file_name_js(version) {
  return string_combine_multiple([version, ".js"]);
}
