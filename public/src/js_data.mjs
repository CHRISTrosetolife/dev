import { file_json_transform_exists } from "./file_json_transform_exists.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function js_data(ast) {
  let data_path = "data.json";
  await file_json_transform_exists(data_path, lambda);
  function lambda(data) {
    let declaration = js_declaration_single(ast);
    let {
      async,
      id: { name },
    } = declaration;
    let functions = object_property_initialize(data, "functions", {});
    let f = object_property_initialize(functions, name, {});
    object_property_set(f, "async", async);
  }
}
