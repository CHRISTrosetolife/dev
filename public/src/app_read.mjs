import { app_record_verse } from "./app_record_verse.mjs";
import { app_record } from "./app_record.mjs";
import { app_record_version_code } from "./app_record_version_code.mjs";
import { app_record_generic } from "./app_record_generic.mjs";
export async function app_read() {
  await app_record_generic(
    app_record_version_code(),
    app_record,
    app_record_verse,
  );
}
