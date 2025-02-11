import { bible_interlinear_cache_new } from "./bible_interlinear_cache_new.mjs";
import { bible_interlinear_definitions_generic } from "./bible_interlinear_definitions_generic.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_language_2_upload_pairs } from "./app_language_2_upload_pairs.mjs";
import { list_map } from "./list_map.mjs";
export async function app_el_upload() {
  let from = "el";
  let to = "en";
  let ds = await bible_interlinear_definitions_generic(
    bible_interlinear_cache_new,
    "greek",
  );
  let pairs = list_map(ds, (d) => [
    object_property_get(d, "word"),
    object_property_get(d, "definition"),
  ]);
  return await app_language_2_upload_pairs(pairs, from, to);
}
