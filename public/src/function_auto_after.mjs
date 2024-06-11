import { log } from "./log.mjs";
import { function_transform_return } from "./function_transform_return.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { function_auto_transforms } from "./function_auto_transforms.mjs";
export async function function_auto_after(function_name) {
  let transforms = function_auto_transforms();
  let names = list_map_property(transforms, "name");
  let joined = list_join_comma(names);
  let { after } = await function_transform_return(joined, function_name);
  log({
    after,
  });
  return after;
}
