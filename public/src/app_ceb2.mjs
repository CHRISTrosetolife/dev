import { string_skip } from "./string_skip.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { storage_local_remove } from "./storage_local_remove.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { storage_local_exists } from "./storage_local_exists.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { each } from "./each.mjs";
import { storage_local_keys } from "./storage_local_keys.mjs";
import { app_language_2 } from "./app_language_2.mjs";
import { string_size } from "./string_size.mjs";
export async function app_ceb2() {
  let language_learn = "ceb";
  let language_fluent = "en";
  let keys = storage_local_keys();
  each(keys, (k) => {
    let prefix = " ";
    if (string_starts_with(k, prefix)) {
      let k_new = string_combine_multiple([fn_name("app_ceb2"), k]);
      let k_old = string_skip(k, string_size(prefix));
      return;
      let other = {
        name: "",
      };
      if (storage_local_exists(other, key)) {
        let migration = storage_local_get(other, key);
        storage_local_remove(other);
        storage_local_set(fn_namespace, key, migration);
      }
    }
  });
  return;
  await app_language_2(app_ceb2, language_learn, language_fluent);
}
