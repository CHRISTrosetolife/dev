import { js_fn_name_rename } from "./js_fn_name_rename.mjs";
import { functions_transform } from "./functions_transform.mjs";
import { object_properties_intersect } from "./object_properties_intersect.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_identifier } from "./functions_identifier.mjs";
import { functions_string } from "./functions_string.mjs";
export async function function_rename_fn_name(fn_name_from, fn_name_to) {
  let functions_matching_strings = await functions_string(fn_name_from);
  let functions_fn_name = await functions_identifier(fn_name("fn_name"));
  let intersecteds = object_properties_intersect(
    functions_matching_strings,
    functions_fn_name,
  );
  await functions_transform(intersecteds, function lambda(ast) {
    js_fn_name_rename(ast, fn_name_from, fn_name_to);
  });
  return intersecteds;
}
