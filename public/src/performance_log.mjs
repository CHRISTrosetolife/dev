import { each_pairs_index } from "./each_pairs_index.mjs";
import { each } from "./each.mjs";
import { performance_start_categories } from "./performance_start_categories.mjs";
import { log } from "./log.mjs";
import { each_object } from "./each_object.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function performance_log() {
  let categories = performance_start_categories();
  each_object(categories, (category, ps) => {
    let totals = [];
    each(ps, (p) => {
      each_pairs_index(p, (a, b, i) => {
        let d = b - a;
        object_property_initialize(totals, i, 0);
        la(d);
      });
    });
    log();
  });
}
