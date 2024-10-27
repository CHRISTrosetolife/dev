import { bible_interlinear_cache_old } from "./bible_interlinear_cache_old.mjs";
import { bible_interlinear_strongs_generic } from "./bible_interlinear_strongs_generic.mjs";
export async function bible_interlinear_strongs_hebrew() {
  return await bible_interlinear_strongs_generic(bible_interlinear_cache_old);
}
