import { bible_interlinear_strongs_cache } from "./bible_interlinear_strongs_cache.mjs";
import { bible_interlinear_definition_generic } from "./bible_interlinear_definition_generic.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function bible_interlinear_definition(language, strong) {
  let label = "Short Definition:";
  let html_lambda = bible_interlinear_strongs_cache;
  let ds = await bible_interlinear_definition_generic(
    html_lambda,
    language,
    strong,
    [label],
  );
  return object_property_get(ds, "definition");
}
