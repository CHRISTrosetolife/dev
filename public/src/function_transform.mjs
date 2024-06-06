import { function_transform_return } from "./function_transform_return.mjs";
import { log } from "./log.mjs";
export async function function_transform(lambda_names, function_name) {
  let r = await function_transform_return(lambda_names, function_name);
  log({
    r,
  });
  let { results } = r;
  return results;
}
