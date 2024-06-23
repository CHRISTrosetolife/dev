import { list_filter } from "./list_filter.mjs";
import { each } from "./each.mjs";
import { list_remove_if_exists } from "./list_remove_if_exists.mjs";
import { each_object } from "./each_object.mjs";
import { list_add_if_exists_not } from "./list_add_if_exists_not.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { list_includes } from "./list_includes.mjs";
import { string_is } from "./string_is.mjs";
import { identity } from "./identity.mjs";
export function data_update_single(ast, data) {
  let declaration = js_declaration_single(ast);
  let {
    async,
    id: { name },
  } = declaration;
  let functions = object_property_initialize(data, "functions", {});
  let f = object_property_initialize(functions, name, {});
  object_property_set(f, "async", async);
  let ast_literals = js_node_type(ast, "Literal");
  let mapped = list_map_property(ast_literals, "value");
  let filtered = list_filter(mapped, string_is);
  let u = list_unique(filtered);
  list_sort_string(u, identity);
  let literals = object_property_initialize(data, "literal_strings", {});
  each(literals, (s) => object_property_initialize(literals, s, []));
  each_object(literals, (s, s_functions) => {
    if (list_includes(u, s)) {
      list_add_if_exists_not(s_functions, name);
    } else {
      list_remove_if_exists(s_functions, name);
    }
  });
  let ids = js_identifiers(ast);
  let identifiers = object_property_initialize(data, "identifiers", {});
  each(ids, (id) => object_property_initialize(identifiers, id, []));
  each_object(identifiers, (id, id_functions) => {
    if (list_includes(ids, id)) {
      list_add_if_exists_not(id_functions, name);
    } else {
      list_remove_if_exists(id_functions, name);
    }
  });
}
