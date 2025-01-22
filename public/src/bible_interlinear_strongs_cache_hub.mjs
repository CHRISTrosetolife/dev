import { bible_interlinear_strongs_cache_generic } from "./bible_interlinear_strongs_cache_generic.mjs";
export async function bible_interlinear_strongs_cache_hub(language, strong) {
  return await bible_interlinear_strongs_cache_generic(
    "biblehub.com/",
    language,
    strong,
  );
}
