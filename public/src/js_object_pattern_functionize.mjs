import { js_code_declare_assign_0 } from "./js_code_declare_assign_0.mjs";
import { js_imports_add_specified } from "./js_imports_add_specified.mjs";
import { list_remove } from "./list_remove.mjs";
import { js_variable_declaration_init } from "./js_variable_declaration_init.mjs";
import { js_name_unique_v_parsed } from "./js_name_unique_v_parsed.mjs";
import { js_identifier_to_expression } from "./js_identifier_to_expression.mjs";
import { js_node_type_visitor } from "./js_node_type_visitor.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { js_call } from "./js_call.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { each_reverse } from "./each_reverse.mjs";
import { js_init_index_insert } from "./js_init_index_insert.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function js_object_pattern_functionize(ast) {
  let vs = js_node_type_visitor(ast, "ObjectPattern");
  for (let v of vs) {
    let { stack } = v;
    let grandparent = list_get_end(stack, 1);
    let variable_declaration = list_get_end(stack, 2);
    let variable_declaration_parent = list_get_end(stack, 3);
    let { parent } = v;
    let { node } = v;
    let { properties } = node;
    let index_insert = js_init_index_insert(v, 2);
    let { parsed, variable_name } = js_name_unique_v_parsed(ast);
    each_reverse(properties, (p) => {
      let { key, value } = p;
      let { name: value_name } = value;
      let parsed = js_code_declare_assign_0(value_name);
      let key_string = js_identifier_to_expression(key);
      let variable_name_identifier = js_parse_expression(variable_name);
      let call = js_call(object_property_get.name, [
        variable_name_identifier,
        key_string,
      ]);
      js_variable_declaration_init(parsed, call);
      list_insert(variable_declaration_parent, index_insert, parsed);
    });
    let { init } = parent;
    js_variable_declaration_init(parsed, init);
    list_insert(variable_declaration_parent, index_insert, parsed);
    list_remove(variable_declaration_parent, variable_declaration);
  }
  js_imports_add_specified(ast, [object_property_get.name]);
}
