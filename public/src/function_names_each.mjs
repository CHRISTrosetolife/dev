import { each_async } from "./each_async.mjs";
import { function_names } from "./function_names.mjs";
export async function function_names_each(lambda) {
  let fns = await function_names();
  await each_async(fns, lambda);
}
