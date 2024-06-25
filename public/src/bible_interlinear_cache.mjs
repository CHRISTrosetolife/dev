import { bible_interlinear } from "./bible_interlinear.mjs";
import { function_cache } from "./function_cache.mjs";
export async function bible_interlinear_cache() {
  return await function_cache(bible_interlinear, []);
}
