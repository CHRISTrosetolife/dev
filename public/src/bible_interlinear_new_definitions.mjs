import { bible_interlinear_definitions_generic } from "./bible_interlinear_definitions_generic.mjs";
import { bible_interlinear_cache_new } from "./bible_interlinear_cache_new.mjs";
export async function bible_interlinear_new_definitions() {
  let bible_interlinear_cache_fn = bible_interlinear_cache_new;
  let language = "greek";
  return await bible_interlinear_definitions_generic(
    bible_interlinear_cache_fn,
    language,
  );
}
