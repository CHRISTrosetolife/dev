import { catholic_bishops_prayers_wrap } from "./catholic_bishops_prayers_wrap.mjs";
import { prayers_list_generic_10 } from "./prayers_list_generic_10.mjs";
import { list_map } from "./list_map.mjs";
import { identity } from "./identity.mjs";
export function catholic_bishops_prayers(fn, names) {
  let m = list_map(names, function (n) {
    let v4 = catholic_bishops_prayers_wrap(fn, "each", n);
    return v4;
  });
  let on_first = identity;
  function on_last(n) {
    let v4 = catholic_bishops_prayers_wrap(fn, "last", n);
    return v4;
  }
  let v = prayers_list_generic_10(m, on_first, on_last);
  return v;
}
