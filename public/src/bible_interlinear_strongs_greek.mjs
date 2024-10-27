import { bible_interlinear_strongs_generic } from "./bible_interlinear_strongs_generic.mjs";
import { bible_interlinear_cache_new } from "./bible_interlinear_cache_new.mjs";
export async function bible_interlinear_strongs_greek() {
  return bible_interlinear_strongs_generic(bible_interlinear_cache_new);
}
