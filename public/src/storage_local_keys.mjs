import { storage_local_key_at } from "./storage_local_key_at.mjs";
import { storage_local_keys_size } from "./storage_local_keys_size.mjs";
import { each_range } from "./each_range.mjs";
import { list_adder } from "./list_adder.mjs";
export function storage_local_keys() {
  return list_adder((la) => {
    each_range(storage_local_keys_size(), (i) => {
      la(storage_local_key_at(i));
    });
  });
}
