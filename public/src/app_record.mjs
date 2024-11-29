import { app_record_generic } from "./app_record_generic.mjs";
import { app_record_version_code } from "./app_record_version_code.mjs";
import { app_record_verse } from "./app_record_verse.mjs";
export async function app_record() {
  let version_code = app_record_version_code();
  let app_lambda = app_record;
  let app_verse_lambda = app_record_verse;
  await app_record_generic(version_code, app_lambda, app_verse_lambda);
}
