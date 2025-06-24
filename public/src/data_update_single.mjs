import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { js_visit_calls_fn_name } from "./js_visit_calls_fn_name.mjs";
import { list_sort_string_map } from "./list_sort_string_map.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { each } from "./each.mjs";
import { list_remove_if_exists } from "./list_remove_if_exists.mjs";
import { each_object } from "./each_object.mjs";
import { list_add_if_exists_not } from "./list_add_if_exists_not.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_includes } from "./list_includes.mjs";
import { string_is } from "./string_is.mjs";
import { identity } from "./identity.mjs";
import { list_add } from "./list_add.mjs";
export function data_update_single(ast, data) {
  let declaration = js_declaration_single(ast);
  let {
    async,
    id: { name },
  } = declaration;
  let functions = object_property_initialize(data, "functions", {});
  let this_function = object_property_initialize(functions, name, {});
  object_property_set(this_function, "async", async);
  let ast_literals = js_node_type(ast, "Literal");
  let mapped = list_map_property(ast_literals, "value");
  let filtered = list_filter(mapped, string_is);
  let literal_strings = list_unique(filtered);
  list_sort_string_map(literal_strings, identity);
  let ids = js_identifiers_names(ast);
  js_visit_calls_fn_name(ast, function (arg) {
    let v = object_property_get(arg, "value");
    list_add(ids, v);
  });
  let identifiers_unique = list_unique(ids);
  list_sort_string_map(identifiers_unique, identity);
  let list = [
    {
      ast_list: literal_strings,
      key: "literal_strings",
    },
    {
      ast_list: identifiers_unique,
      key: "identifiers",
    },
  ];
  each(list, function (item) {
    let key = object_property_get(item, "key");
    let ast_list = object_property_get(item, "ast_list");
    let data_key = object_property_initialize(data, key, {});
    each(ast_list, function (s) {
      let v2 = object_property_initialize(data_key, s, []);
      return v2;
    });
    each_object(data_key, function (k, k_functions) {
      if (list_includes(ast_list, k)) {
        list_add_if_exists_not(k_functions, name);
      } else {
        list_remove_if_exists(k_functions, name);
      }
    });
  });
}
