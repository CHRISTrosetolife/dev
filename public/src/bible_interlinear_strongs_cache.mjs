import { bible_interlinear_strongs_cache_generic } from "./bible_interlinear_strongs_cache_generic.mjs";
export async function bible_interlinear_strongs_cache(language, strong) {
  let url_base = "openbible.com/strongs/";
  return bible_interlinear_strongs_cache_generic(url_base, language, strong);
}
