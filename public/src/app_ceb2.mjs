import { app_ceb2_migrate } from "./app_ceb2_migrate.mjs";
import { app_language_2 } from "./app_language_2.mjs";
export async function app_ceb2() {
  let language_learn = "ceb";
  let language_fluent = "en";
  let app_fn = app_ceb2;
  app_ceb2_migrate(app_fn);
  await app_language_2(app_fn, language_learn, language_fluent);
}
