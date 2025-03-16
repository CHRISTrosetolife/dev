import { each } from "./each.mjs";
export function each_range_1_nested(max, each) {
  each_range_1(max, function (a) {
    each_range_1(max, function (b) {
      each(a, b); 
    });
  });
}
