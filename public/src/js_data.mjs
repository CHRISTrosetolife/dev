import { js_declaration_single } from "./js_declaration_single.mjs";
import { file_json_transform } from "./file_json_transform.mjs";
import { file_write_json } from "./file_write_json.mjs";
import { file_exists } from "./file_exists.mjs";
import { log } from "./log.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function js_data(ast) {
  let data_path = "data.json";
  if (!(await file_exists(data_path))) {
    await file_write_json(data_path, {});
  }
  await file_json_transform(
    (data) => {
      let declaration = js_declaration_single(ast);
      let {
        async,
        id: { name },
      } = declaration;
      let functions = object_property_initialize(data, "functions", {});
      let f = object_property_initialize(functions, name, {});
      object_property_set(f, "async", async);
    },
    data_path,
    [],
  );
}
