import { functions_names } from "./functions_names.mjs";
import { each_async } from "./each_async.mjs";
export async function function_names_each(lambda) {
  let fns = await functions_names();
  await each_async(fns, lambda);
}
