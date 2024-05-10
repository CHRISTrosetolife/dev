import { function_auto_transforms } from "./function_auto_transforms.mjs";
import { function_transform } from "./function_transform.mjs";
export async function function_auto(function_name) {
  let transforms = function_auto_transforms();
  for (let t of transforms) {
    await function_transform(t.name, function_name);
  }
}
