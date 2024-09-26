import { js_visit_calls } from "./js_visit_calls.mjs";
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
import { fn_name } from "./fn_name.mjs";
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
  let ids = js_identifiers(ast);
  js_visit_calls(ast, fn_name("fn_name"), (args) => {});
  let list = [
    {
      ast_list: u,
      key: "literal_strings",
    },
    {
      ast_list: ids,
      key: "identifiers",
    },
  ];
  each(list, (item) => {
    let data_key = object_property_initialize(data, item.key, {});
    each(item.ast_list, (s) => object_property_initialize(data_key, s, []));
    each_object(data_key, (k, k_functions) => {
      if (list_includes(item.ast_list, k)) {
        list_add_if_exists_not(k_functions, name);
      } else {
        list_remove_if_exists(k_functions, name);
      }
    });
  });
}
