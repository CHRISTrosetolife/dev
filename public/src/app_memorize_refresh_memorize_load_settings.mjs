import { app_memorize_refresh_settings } from "./app_memorize_refresh_settings.mjs";
import { app_memorize_refresh_memorize_load } from "./app_memorize_refresh_memorize_load.mjs";
export async function app_memorize_refresh_memorize_load_settings(context) {
  await app_memorize_refresh_memorize_load(context);
  await app_memorize_refresh_settings(context);
}
