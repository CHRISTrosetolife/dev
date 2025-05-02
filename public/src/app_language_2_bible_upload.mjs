import { app_language_2_upload_pairs } from "./app_language_2_upload_pairs.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
import { bible_interlinear_definitions_generic } from "./bible_interlinear_definitions_generic.mjs";
export async function app_language_2_bible_upload(
  bible_interlinear_cache_fn,
  from_long,
  from,
) {
  let ds = await bible_interlinear_definitions_generic(
    bible_interlinear_cache_fn,
    from_long,
  );
  let to = "en";
  let pairs = list_map(ds, (d) => [
    object_property_get(d, "word"),
    object_property_get(d, "definition"),
  ]);
  return await app_language_2_upload_pairs(pairs, from, to, "all");
}
