import { sermons } from "./sermons.mjs";
import { generate_list_fn } from "./generate_list_fn.mjs";
export async function sermons_list_generate() {
  await generate_list_fn(sermons, sermons_list_generate);
}
