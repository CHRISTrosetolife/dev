import { object_property_set } from "./object_property_set.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
export function data_update(data) {
  let declaration = js_declaration_single(ast);
  let {
    async,
    id: { name },
  } = declaration;
  let functions = object_property_initialize(data, "functions", {});
  let f = object_property_initialize(functions, name, {});
  object_property_set(f, "async", async);
}
