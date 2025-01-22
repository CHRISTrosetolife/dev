import { bible_interlinear_strongs_cache_generic } from "./bible_interlinear_strongs_cache_generic.mjs";
export async function bible_interlinear_strongs_cache(language, strong) {
  return await bible_interlinear_strongs_cache_generic(
    "openbible.com/strongs/",
    language,
    strong,
  );
}
