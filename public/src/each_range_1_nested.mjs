import { each_range_1 } from "./each_range_1.mjs";
import { each } from "./each.mjs";
export function each_range_1_nested(max, each) {
  each_range_1(max, function (a) {
    each_range_1(max, function (b) {
      each(a, b);
    });
  });
}
