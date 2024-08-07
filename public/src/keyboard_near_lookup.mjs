import { object_property_initialize_list } from "./object_property_initialize_list.mjs";
import { object_property_initialize_list_add } from "./object_property_initialize_list_add.mjs";
import { list_to } from "./list_to.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_get } from "./list_get.mjs";
import { each_index } from "./each_index.mjs";
import { list_size } from "./list_size.mjs";
import { each_pairs } from "./each_pairs.mjs";
import { keyboard_keys_rows } from "./keyboard_keys_rows.mjs";
export function keyboard_near_lookup() {
  let lookup = {};
  let rows = keyboard_keys_rows();
  each_pairs(rows, (c, d) => {
    c = list_to(c);
    d = list_to(d);
    let c_size = list_size(c);
    let d_size = list_size(d);
    let difference = c_size - d_size;
    each_index(d, (d_item, d_index) => {
      let difference_1 = difference === 1;
      let c_right = list_get(c, d_index + 1);
      let c_lrs = [c_right];
      let c_left;
      if (difference_1) {
        c_left = list_get(c, d_index);
        list_add(c_lrs, c_left);
      }
      let c_right_nears = object_property_initialize_list(lookup, c_right);
      let c_lr_nears = [c_right_nears];
      if (difference_1) {
        let c_left_nears = object_property_initialize_list(lookup, c_left);
        list_add(c_lr_nears, c_left_nears);
      }
      each(c_lr_nears, (c_nears) => {
        list_add(c_nears, d_item);
      });
      let d_item_nears = object_property_initialize_list(lookup, d_item);
      each(c_lrs, (c_lr) => {
        list_add(d_item_nears, c_lr);
      });
    });
  });
  each(rows, (row) => {
    row = list_to(row);
    each_pairs(row, (r1, r2) => {
      object_property_initialize_list_add(lookup, r1, r2);
      object_property_initialize_list_add(lookup, r2, r1);
    });
    each(row, (r) => {
      object_property_initialize_list_add(lookup, r, r);
    });
  });
  return lookup;
}
