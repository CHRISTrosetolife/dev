import { list_remove_if_exists } from "./list_remove_if_exists.mjs";
import { each_object } from "./each_object.mjs";
import { list_add_if_exists_not } from "./list_add_if_exists_not.mjs";
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
import { list_includes } from "./list_includes.mjs";
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
  let ids = js_identifiers(ast);
  let identifiers = object_property_initialize(data, "identifiers", {});
  each_object(identifiers, (id, id_functions) => {
    if (list_includes(ids, id)) {
      list_add_if_exists_not(id_functions, name);
    } else {
      list_remove_if_exists(id_functions, name);
    }
  });
  each(ids, (id) => {
    let id_functions = object_property_initialize(identifiers, id, []);
    list_add_if_exists_not(id_functions, name);
    object_property_set(identifiers, name, ids);
  });
}
