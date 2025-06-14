import { prayers_list_generic } from "./prayers_list_generic.mjs";
import { catholic_bishops_prayers_wrap } from "./catholic_bishops_prayers_wrap.mjs";
import { list_map } from "./list_map.mjs";
export function catholic_bishops_prayers(fn, names) {
  let m = list_map(names, function (n) {
    let v4 = catholic_bishops_prayers_wrap(fn, "each", n);
    return v4;
  });
  function on_last(n) {
    let v4 = catholic_bishops_prayers_wrap(fn, "last", n);
    return v4;
  }
  function on_first(n) {
    let v4 = catholic_bishops_prayers_wrap(fn, "first", n);
    return v4;
  }
  let count = 10;
  let v = prayers_list_generic(m, count, on_first, on_last);
  return v;
}
