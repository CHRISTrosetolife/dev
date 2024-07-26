import { log } from "./log.mjs";
import { each } from "./each.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { list_add } from "./list_add.mjs";
import { list_get } from "./list_get.mjs";
import { each_index } from "./each_index.mjs";
import { list_size } from "./list_size.mjs";
import { each_pairs } from "./each_pairs.mjs";
import { keyboard_keys_rows } from "./keyboard_keys_rows.mjs";
export function keyboard_near_lookup() {
  let lookup = {};
  let r = keyboard_keys_rows();
  each_pairs(r, (c, d) => {
    log({});
    let c_size = list_size(c);
    let d_size = list_size(d);
    let difference = c_size - d_size;
    each_index(d, (d_item, d_index) => {
      let difference_1 = difference === 1;
      let c_right = list_get(c, d_index + 1);
      let c_lrs = [c_right];
      if (difference_1) {
        let c_left = list_get(c, d_index);
        list_add(c_lrs, c_left);
      }
      let c_right_nears = object_property_initialize(lookup, c_right, []);
      let c_lr_nears = [c_right_nears];
      if (difference_1) {
        let c_left_nears = object_property_initialize(lookup, c_left, []);
        list_add(c_lr_nears, c_left_nears);
      }
      each(c_lr_nears, (c_nears) => {
        list_add(c_nears, d_item);
      });
      let d_item_nears = object_property_initialize(lookup, c_right, []);
      each(c_lrs, (c_lr) => {
        list_add(d_item_nears, c_lr);
      });
    });
  });
  return lookup;
}
