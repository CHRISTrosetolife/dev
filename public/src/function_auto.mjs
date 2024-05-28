import { js_data } from "./js_data.mjs";
import { function_auto_transforms } from "./function_auto_transforms.mjs";
import { function_transform } from "./function_transform.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function function_auto(function_name) {
  let transforms = function_auto_transforms();
  let names = list_map_property(transforms, "name");
  let joined = list_join_comma(names);
  await function_transform(joined, function_name);
  await function_transform(js_data.name, function_name);
}
