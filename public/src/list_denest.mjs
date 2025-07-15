import { fn_name } from "./fn_name.mjs";
import { list_denest_recursive } from "./list_denest_recursive.mjs";
import { list_adder } from "./list_adder.mjs";
export function list_denest(list) {
  "see also", fn_name("list_flatten");
  let v = list_adder(function (la) {
    list_denest_recursive(list, la);
  });
  return v;
}
