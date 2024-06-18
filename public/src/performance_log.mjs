import { each_pairs_index } from "./each_pairs_index.mjs";
import { each } from "./each.mjs";
import { performance_start_categories } from "./performance_start_categories.mjs";
import { log } from "./log.mjs";
import { each_pairs } from "./each_pairs.mjs";
import { list_adder } from "./list_adder.mjs";
import { each_object } from "./each_object.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function performance_log() {
  let categories = performance_start_categories();
  each_object(categories, (category, ps) => {
    ps.differences = [];
    each(ps, (p) => {
      each_pairs_index(p, (a, b, i) => {
        object_property_initialize();
        let d = b - a;
        la(d);
      });
    });
  });
  let r = list_adder((la) => {
    each_pairs(p.times, (a, b) => {
      let d = b - a;
      la(d);
    });
  });
  log(r);
}
