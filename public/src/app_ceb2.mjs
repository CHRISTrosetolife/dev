import { object_property_get } from "./object_property_get.mjs";
import { list_adder } from "./list_adder.mjs";
import { each_range } from "./each_range.mjs";
import { log } from "./log.mjs";
import { app_language_2 } from "./app_language_2.mjs";
export async function app_ceb2() {
  let language_learn = "ceb";
  let language_fluent = "en";
  let keys = list_adder((la) => {
    each_range(object_property_get(object, "property_name"), (i) => {
      la(localStorage.key(i));
    });
  });
  log({
    keys,
  });
  await app_language_2(app_ceb2, language_learn, language_fluent);
}
