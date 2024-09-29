import { js_name_unique_multiple } from "./js_name_unique_multiple.mjs";
import { each } from "./each.mjs";
import { list_remove_multiple } from "./list_remove_multiple.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_take_but_1 } from "./list_take_but_1.mjs";
import { each_reverse } from "./each_reverse.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_return_argument_type } from "./js_return_argument_type.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { list_last } from "./list_last.mjs";
import { js_declaration_to_body } from "./js_declaration_to_body.mjs";
import { js_identifier_rename_multiple } from "./js_identifier_rename_multiple.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_message } from "./assert_message.mjs";
import { js_identifiers_intersect_difference } from "./js_identifiers_intersect_difference.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { js_declaration_to_params } from "./js_declaration_to_params.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { js_return_variablize } from "./js_return_variablize.mjs";
import { function_parse } from "./function_parse.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function js_dollar_expand(ast, call, result_id, a, parent) {
  let { next, s1, index } = a;
  if (js_node_type_is(call, "CallExpression")) {
    let { callee } = call;
    if (js_node_type_is(callee, "Identifier")) {
      let { name: name_c } = callee;
      let ast_c = await function_parse(name_c);
      js_return_variablize(ast_c);
      let d = js_declaration_single(ast_c);
      let params = js_declaration_to_params(d);
      let params_names = js_identifiers_names(params);
      let { arguments: args } = call;
      let args_names = js_identifiers_names(args);
      let identifiers = js_identifiers(ast);
      let needs_enhance = js_identifiers_intersect_difference(
        ast_c,
        identifiers,
        [name_c],
      );
      each(needs_enhance, (item) => {
        let replacement = js_name_unique_multiple([ast, ast_c], item);
        js_identifier_rename(ast_c, item, replacement);
      });
      assert_message(list_empty_is, [needs_enhance], () =>
        string_combine_multiple([
          "code needs enhancing to handle variables: ",
          needs_enhance,
        ]),
      );
      js_identifier_rename_multiple(d, params_names, args_names);
      if (null_not_is(result_id)) {
        let body = js_declaration_to_body(d);
        let l = list_last(body);
        assert(js_node_type_is, [l, "ReturnStatement"]);
        assert(equal, [js_return_argument_type(l), "Identifier"]);
        let arg_l = object_property_get(l, "argument");
        js_identifier_rename(
          ast_c,
          object_property_get(arg_l, "name"),
          object_property_get(result_id, "name"),
        );
      }
      each_reverse(list_take_but_1(body), (b) => {
        list_insert(s1, index, b);
      });
      list_remove_multiple(s1, [next, parent]);
    }
  }
}
