import { each } from "./each.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
import { string_delimit_if } from "./string_delimit_if.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
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
  let mapped = list_map_property(literals, "value");
  let u = list_unique(mapped);
  list_sort_string(u, string_delimit_if);
  object_property_set(f, "literals", u);
  let identifiers = object_property_initialize(data, "identifiers", {});
  let ids = js_identifiers(ast);
  each(ids, (ids) => {});
}
