import { app_tgl_upload_pairs } from "./app_tgl_upload_pairs.mjs";
import { function_cache } from "./function_cache.mjs";
export async function app_tgl_upload_pairs_cache(limit) {
  return await function_cache(app_tgl_upload_pairs, [limit]);
}
