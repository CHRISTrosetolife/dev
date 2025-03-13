import { prayers_countries } from "./prayers_countries.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { prayers_list } from "./prayers_list.mjs";
export async function sandbox_5() {
  let v = list_join_newline(prayers_list(prayers_countries()));
  return v;
}
