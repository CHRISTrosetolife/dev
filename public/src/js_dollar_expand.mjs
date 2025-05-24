import { js_identifiers_names_duplicates } from "./js_identifiers_names_duplicates.mjs";
import { js_statement_call_is } from "./js_statement_call_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_take_but } from "./list_take_but.mjs";
import { js_name_unique_multiple } from "./js_name_unique_multiple.mjs";
import { each } from "./each.mjs";
import { list_remove_multiple } from "./list_remove_multiple.mjs";
import { list_insert } from "./list_insert.mjs";
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
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { js_declaration_to_params } from "./js_declaration_to_params.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { js_return_variablize } from "./js_return_variablize.mjs";
import { function_parse } from "./function_parse.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_concat } from "./list_concat.mjs";
export async function js_dollar_expand(ast, call, result_id, a, parent) {
  let { next, s2, index } = a;
  if (js_node_type_is(call, "CallExpression")) {
    let { callee } = call;
    if (js_node_type_is(callee, "Identifier")) {
      let { name: name_c } = callee;
      let ast_c = await function_parse(name_c);
      js_return_variablize(ast_c);
      let { arguments: args } = call;
      let args_names = js_identifiers_names(args);
      let identifiers = js_identifiers_names(ast);
      let fns = await functions_names();
      let needs_enhance = js_identifiers_intersect_difference(
        ast_c,
        identifiers,
        list_concat([name_c], fns),
      );
      each(needs_enhance, function (item) {
        let replacement = js_name_unique_multiple([ast, ast_c], item);
        js_identifier_rename(ast_c, item, replacement);
      });
      let d = js_declaration_single(ast_c);
      let params = js_declaration_to_params(d);
      let params_names = js_identifiers_names_duplicates(params);
      if (false) {
        assert_message(list_empty_is, [needs_enhance], function () {
          let v = string_combine_multiple([
            "code needs enhancing to handle variables: ",
            needs_enhance,
          ]);
          return v;
        });
      }
      js_identifier_rename_multiple(d, params_names, args_names);
      let body = js_declaration_to_body(d);
      let take_but_count = 0;
      if (null_not_is(result_id)) {
        take_but_count = 1;
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
      let taken = list_take_but(body, take_but_count);
      taken = list_filter(taken, function (t) {
        let v2 = !js_statement_call_is(t, fn_name("assert_arguments_length"));
        return v2;
      });
      each_reverse(taken, function (b) {
        list_insert(s2, index, b);
      });
      list_remove_multiple(s2, [next, parent]);
    }
  }
}
