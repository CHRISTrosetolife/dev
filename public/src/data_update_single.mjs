import { string_count_lookup } from "./string_count_lookup.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function data_update_single(ast, data) {
  let declaration = js_declaration_single(ast);
  let {
    async,
    id: { name },
  } = declaration;
  let functions = object_property_initialize(data, "functions", {});
  let f = object_property_initialize(functions, name, {});
  object_property_set(f, "async", async);
  let literals = js_node_type(ast, "Literal");
  let mapped =list_map_property(literals,'value')
  let lookup = string_count_lookup(mapped);
  object_property_set(f, "literals", lookup);
}
