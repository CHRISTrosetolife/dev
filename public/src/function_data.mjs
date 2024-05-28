import { js_data } from "./js_data.mjs";
import { function_transform } from "./function_transform.mjs";
export async function function_data(function_name) {
  await function_transform(js_data.name, function_name);
}
