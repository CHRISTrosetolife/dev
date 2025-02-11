import { generate_list_fn } from "./generate_list_fn.mjs";
import { bible_interlinear_new_definitions } from "./bible_interlinear_new_definitions.mjs";
import { app_language_2_upload_pairs } from "./app_language_2_upload_pairs.mjs";
export async function app_el_upload() {
  let from = "el";
  let to = "en";
  return await bible_interlinear_new_definitions();
  await generate_list_fn(bible_interlinear_new_definitions);
  return await app_language_2_upload_pairs(pairs2, from, to);
}
