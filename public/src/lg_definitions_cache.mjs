import { lg_definitions } from "./lg_definitions.mjs";
import { function_cache } from "./function_cache.mjs";
export async function lg_definitions_cache() {
  return await function_cache(lg_definitions, []);
}
