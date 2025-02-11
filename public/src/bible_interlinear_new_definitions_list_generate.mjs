import { bible_interlinear_new_definitions } from "./bible_interlinear_new_definitions.mjs";
import { generate_list_fn } from "./generate_list_fn.mjs";
export async function bible_interlinear_new_definitions_list_generate() {
  await generate_list_fn(bible_interlinear_new_definitions);
}
