import { storage_local_exists_not } from "./storage_local_exists_not.mjs";
import { string_skip } from "./string_skip.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { storage_local_remove } from "./storage_local_remove.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { each } from "./each.mjs";
import { storage_local_keys } from "./storage_local_keys.mjs";
import { app_language_2 } from "./app_language_2.mjs";
import { string_size } from "./string_size.mjs";
export async function app_ceb2() {
  let language_learn = "ceb";
  let language_fluent = "en";
  let app_fn = app_ceb2;
  let other = {
    name: "",
  };
  let keys = storage_local_keys();
  each(keys, (k) => {
    let prefix = " ";
    if (string_starts_with(k, prefix)) {
      let k_old = string_skip(k, string_size(prefix));
      if (storage_local_exists_not(k_old)) {
        let migration = storage_local_get(other, k_old);
        storage_local_remove(other, k_old);
        storage_local_set(app_fn, k_old, migration);
      }
    }
  });
  return;
  await app_language_2(app_fn, language_learn, language_fluent);
}
