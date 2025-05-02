import { app_ceb3_group_index } from "./app_ceb3_group_index.mjs";
import { app_language_2_generic } from "./app_language_2_generic.mjs";
export async function app_ceb3() {
  let language_learn = "ceb";
  let language_fluent = "en";
  await app_language_2_generic(
    app_ceb3,
    language_learn,
    language_fluent,
    app_ceb3_group_index(),
  );
}
