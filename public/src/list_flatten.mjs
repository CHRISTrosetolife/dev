import { fn_name } from "./fn_name.mjs";
import { list_is } from "./list_is.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
export function list_flatten(list) {
  "see also", fn_name("list_denest");
  let v = list_adder(function (la) {
    each(list, function (item) {
      if (list_is(item)) {
        each(item, la);
      } else {
        la(item);
      }
    });
  });
  return v;
}
