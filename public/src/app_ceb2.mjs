import { app_ceb2_migrate } from "./app_ceb2_migrate.mjs";
import { app_language_2 } from "./app_language_2.mjs";
export async function app_ceb2() {
  let language_learn = "ceb";
  let language_fluent = "en";
  app_ceb2_migrate();
  await app_language_2(app_ceb2, language_learn, language_fluent);
}
