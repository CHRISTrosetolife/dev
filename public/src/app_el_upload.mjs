import { bible_interlinear_new_definitions_list_generate } from "./bible_interlinear_new_definitions_list_generate.mjs";
import { bible_interlinear_new_definitions } from "./bible_interlinear_new_definitions.mjs";
import { app_language_2_upload_pairs } from "./app_language_2_upload_pairs.mjs";
export async function app_el_upload() {
  let from = "el";
  let to = "en";
  return await bible_interlinear_new_definitions();
  await bible_interlinear_new_definitions_list_generate();
  return await app_language_2_upload_pairs(pairs2, from, to);
}
