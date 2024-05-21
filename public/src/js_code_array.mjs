import { list_join } from "./list_join.mjs";
export function js_code_array(contents_list) {
  return `[${list_join(contents_list, ", ")}]`;
}
