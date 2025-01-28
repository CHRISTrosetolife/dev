import { app_language_2_stats_initial } from "./app_language_2_stats_initial.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
export function app_language_2_stats_get(app_fn) {
  return storage_local_initialize(
    app_fn,
    "stats",
    app_language_2_stats_initial(),
  );
}
