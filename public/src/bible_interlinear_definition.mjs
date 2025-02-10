import { bible_interlinear_definition_generic } from "./bible_interlinear_definition_generic.mjs";
import { bible_interlinear_strongs_cache_hub } from "./bible_interlinear_strongs_cache_hub.mjs";
export async function bible_interlinear_definition(language, strong) {
  let label = "Short Definition:";
  let html_lambda = bible_interlinear_strongs_cache_hub;
  return await bible_interlinear_definition_generic(
    html_lambda,
    language,
    strong,
    label,
  );
}
