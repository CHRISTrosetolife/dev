import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { assert } from "./assert.mjs";
import { bible_interlinear_strongs_cache } from "./bible_interlinear_strongs_cache.mjs";
import { bible_interlinear_definition_generic } from "./bible_interlinear_definition_generic.mjs";
export async function bible_interlinear_definition(language, strong) {
  assert(string_empty_not_is, [strong]);
  let label = "Short Definition:";
  let html_lambda = bible_interlinear_strongs_cache;
  let d = await bible_interlinear_definition_generic(
    html_lambda,
    language,
    strong,
    [label],
  );
  return d;
}
