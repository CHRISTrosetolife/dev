import { bible_interlinear_definitions_generic } from "./bible_interlinear_definitions_generic.mjs";
import { bible_interlinear_cache_new } from "./bible_interlinear_cache_new.mjs";
export async function bible_interlinear_new_definitions() {
  return await bible_interlinear_definitions_generic(
    bible_interlinear_cache_new,
    "greek",
  );
}
