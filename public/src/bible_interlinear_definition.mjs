import { bible_interlinear_strongs_cache } from "./bible_interlinear_strongs_cache.mjs";
import { bible_interlinear_definition_generic } from "./bible_interlinear_definition_generic.mjs";
export async function bible_interlinear_definition(language, strong) {
  let label = "Short Definition:";
  let html_lambda = bible_interlinear_strongs_cache;
  return await bible_interlinear_definition_generic(
    html_lambda,
    language,
    strong,
    [label],
  );
}
