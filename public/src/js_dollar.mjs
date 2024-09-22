import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { js_return_argument_type } from "./js_return_argument_type.mjs";
import { list_last } from "./list_last.mjs";
import { js_return_variablize } from "./js_return_variablize.mjs";
import { each_reverse } from "./each_reverse.mjs";
import { list_insert } from "./list_insert.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
import { js_declaration_to_body } from "./js_declaration_to_body.mjs";
import { js_identifier_rename_multiple } from "./js_identifier_rename_multiple.mjs";
import { js_code_brackets } from "./js_code_brackets.mjs";
import { never } from "./never.mjs";
import { assert } from "./assert.mjs";
import { js_identifiers_intersect_difference } from "./js_identifiers_intersect_difference.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { js_declaration_to_params } from "./js_declaration_to_params.mjs";
import { function_parse } from "./function_parse.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_dollar_grandparent_next } from "./js_dollar_grandparent_next.mjs";
import { js_dollar_else } from "./js_dollar_else.mjs";
import { js_dollar_if_block } from "./js_dollar_if_block.mjs";
import { js_code_if_false } from "./js_code_if_false.mjs";
import { object_property_delete } from "./object_property_delete.mjs";
import { list_set } from "./list_set.mjs";
import { js_parse_first } from "./js_parse_first.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_code_braces_inside } from "./js_code_braces_inside.mjs";
import { js_function_property_name } from "./js_function_property_name.mjs";
import { js_code_dot } from "./js_code_dot.mjs";
import { js_declaration_to_name } from "./js_declaration_to_name.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { log_error } from "./log_error.mjs";
import { list_remove } from "./list_remove.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_block_statement } from "./js_block_statement.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { js_code_arrow_block_args_async } from "./js_code_arrow_block_args_async.mjs";
import { each_async } from "./each_async.mjs";
import { list_remove_first } from "./list_remove_first.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { integer_parse_try } from "./integer_parse_try.mjs";
import { each_index } from "./each_index.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { js_code_arrow_block } from "./js_code_arrow_block.mjs";
import { js_code_arrow_block_args } from "./js_code_arrow_block_args.mjs";
import { js_name_unique } from "./js_name_unique.mjs";
import { each } from "./each.mjs";
import { each_range } from "./each_range.mjs";
import { js_code_array_empty } from "./js_code_array_empty.mjs";
import { exit } from "./exit.mjs";
import { js_code_call } from "./js_code_call.mjs";
import { js_code_braces } from "./js_code_braces.mjs";
import { log } from "./log.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { js_visit_identifiers } from "./js_visit_identifiers.mjs";
import { js_parse_first_function } from "./js_parse_first_function.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { list_is } from "./list_is.mjs";
import { list_index } from "./list_index.mjs";
import { list_add } from "./list_add.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
import { list_first } from "./list_first.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { integer_parse } from "./integer_parse.mjs";
import { number_is } from "./number_is.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { list_all } from "./list_all.mjs";
import { list_adder } from "./list_adder.mjs";
import { each_object } from "./each_object.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { each_range_reverse } from "./each_range_reverse.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { equal } from "./equal.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_single } from "./list_single.mjs";
import { assert_message } from "./assert_message.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_get } from "./list_get.mjs";
export function js_dollar(ast) {
  js_visit_identifiers(ast, async (v) => {
    let { node } = v;
    let { name } = node;
    let prefix = "$";
    if (string_starts_with(name, prefix)) {
      let { parent } = v;
      let objection_prefix = "o";
      let question_prefix = "q";
      let scm_prefix = "s";
      let sermon_prefix = "se";
      let log_prefix_start = "l";
      let log_prefix = string_combine_multiple([log_prefix_start, "_"]);
      let prefixes = [
        objection_prefix,
        question_prefix,
        scm_prefix,
        sermon_prefix,
        log_prefix,
      ];
      let remaining = string_prefix_without(name, prefix);
      if (remaining === "a") {
        let e = js_parse_expression(js_code_arrow_block());
        object_replace(node, e);
      }
      if (remaining === "aa") {
        let e = js_parse_expression(js_code_call(assert_arguments_length.name));
        object_replace(node, e);
      }
      if (remaining === "ar") {
        let e = js_parse_expression(js_code_arrow_block_args([], "return;"));
        object_replace(node, e);
      }
      if (remaining === "as") {
        let e = js_parse_expression(
          js_code_call_args(assert.name, [never.name, js_code_brackets()]),
        );
        object_replace(node, e);
      }
      if (remaining === "e") {
        let list = js_name_unique(ast, "list");
        let item = js_name_unique(ast, "item");
        let e = js_parse_expression(
          js_code_call_args(each.name, [
            list,
            js_code_arrow_block_args([item], ""),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "er") {
        let count = js_name_unique(ast, "count");
        let item = js_name_unique(ast, "item");
        let e = js_parse_expression(
          js_code_call_args(each_range.name, [
            count,
            js_code_arrow_block_args([item], ""),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "err") {
        let count = js_name_unique(ast, "count");
        let item = js_name_unique(ast, "item");
        let e = js_parse_expression(
          js_code_call_args(each_range_reverse.name, [
            count,
            js_code_arrow_block_args([item], ""),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "ea") {
        let list = js_name_unique(ast, "list");
        let item = js_name_unique(ast, "item");
        let e = js_parse_expression(
          js_code_call_args(each_async.name, [
            list,
            js_code_arrow_block_args_async([item], ""),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "ei") {
        let list = js_name_unique(ast, "list");
        let item = js_name_unique(ast, "item");
        let index = js_name_unique(ast, "index");
        let e = js_parse_expression(
          js_code_call_args(each_index.name, [
            list,
            js_code_arrow_block_args([item, index], ""),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "el") {
        let value_new = js_block_statement([]);
        js_dollar_else(v, value_new);
      }
      if (remaining === "eli") {
        let value_new = js_parse_first(js_code_if_false());
        js_dollar_else(v, value_new);
      }
      if (equal(remaining, "ex")) {
        await js_dollar_grandparent_next(v, lambda);
        async function lambda(a) {
          let { next, s1, index } = a;
          if (js_node_type_is(next, "VariableDeclaration")) {
            let { declarations } = next;
            if (list_size_1(declarations)) {
              let d = list_single(declarations);
              let { init } = d;
              log({
                d,
              });
              exit();
              if (js_node_type_is(init, "CallExpression")) {
                let { callee } = init;
                if (js_node_type_is(callee, "Identifier")) {
                  let { name: name_c } = callee;
                  let ast_c = await function_parse(name_c);
                  js_return_variablize(ast_c);
                  let d = js_declaration_single(ast_c);
                  let params = js_declaration_to_params(d);
                  let params_names = js_identifiers_names(params);
                  let { arguments: args } = init;
                  let args_names = js_identifiers_names(args);
                  let identifiers = js_identifiers(ast);
                  let needs_enhance = js_identifiers_intersect_difference(
                    ast_c,
                    identifiers,
                    [name_c],
                  );
                  assert_message(list_empty_is, [needs_enhance], () =>
                    string_combine_multiple([
                      "code needs enhancing to handle variables: ",
                      needs_enhance,
                    ]),
                  );
                  js_identifier_rename_multiple(d, params_names, args_names);
                  let body = js_declaration_to_body(d);
                  let l = list_last(body);
                  assert(js_node_type_is, [l, "ReturnStatement"]);
                  assert(js_return_argument_type, [l, "Identifier"]);
                  let node_l = object_property_get(l, "node");
                  let arg_l = object_property_get(node_l, "argument");
                  js_identifier_rename(
                    ast_c,
                    object_property_get(arg_l, "name"),
                  );
                  each_reverse(body, (b) => {
                    list_insert(s1, index, b);
                  });
                  list_remove(s1, parent);
                  log({
                    params_names,
                    args_names,
                    needs_enhance,
                  });
                }
              }
            }
          }
        }
      }
      if (remaining === "eo") {
        let object = js_name_unique(ast, "object");
        let key = js_name_unique(ast, "key");
        let value = js_name_unique(ast, "value");
        let e = js_parse_expression(
          js_code_call_args(each_object.name, [
            object,
            js_code_arrow_block_args([key, value], ""),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "g") {
        let e = js_parse_expression(
          js_code_call_args(object_property_get.name, [
            js_name_unique(ast, "object"),
            '"property_name"',
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "gl") {
        let e = js_parse_expression(
          js_code_call_args(list_get.name, [
            js_name_unique(ast, "list"),
            js_name_unique(ast, "index"),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "le") {
        let e = js_parse_expression(
          js_code_call_args(log_error.name, [js_code_braces()]),
        );
        object_replace(node, e);
      }
      if (remaining === "la") {
        let e = js_parse_expression(
          js_code_call_args(list_adder.name, [
            js_code_arrow_block_args(["la"], ""),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "laa") {
        let e = js_parse_expression(
          js_code_call_args(list_adder_async.name, [
            js_code_arrow_block_args_async(["la"], ""),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "lau") {
        let e = js_parse_expression(
          js_code_call_args(list_adder_unique.name, [
            js_code_arrow_block_args(["la"], ""),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "lr") {
        let e = js_parse_expression(
          js_code_call_args(list_random_item.name, [js_code_array_empty()]),
        );
        if (list_is(parent)) {
          let index = list_index(parent, node);
          let next = list_remove_at(parent, index + 1);
          list_add(list_first(e.arguments).elements, next);
          object_replace(node, e);
        }
      }
      if (prefix_use(remaining, objection_prefix, prefixes)) {
        let count = remaining_count_get(remaining, objection_prefix);
        let e = js_parse_expression(
          string_combine_multiple(["{text:'',count:", count, "}"]),
        );
        object_replace(node, e);
      }
      if (prefix_use(remaining, question_prefix, prefixes)) {
        let count = remaining_count_get(remaining, question_prefix);
        let e = js_parse_expression(
          string_combine_multiple(["{text:'',count:", count, "}"]),
        );
        object_replace(node, e);
      }
      if (remaining === "r") {
        let { stack } = v;
        let e = js_parse_first_function("return");
        let s1 = list_get_end_1(stack);
        let s2 = list_get_end(stack, 2);
        if (
          list_is(parent) &&
          s1.type === "SequenceExpression" &&
          s2.type === "ExpressionStatement"
        ) {
          list_remove_first(parent);
          e.argument = s1;
          object_replace(s2, e);
        } else if (parent.type === "ExpressionStatement") {
          object_replace(parent, e);
        }
      }
      if (remaining === "i") {
        await js_dollar_grandparent_next(v, lambda);
        function lambda(a) {
          let { s1, next } = a;
          let statement = js_parse_first(js_code_if_false());
          let { consequent } = statement;
          let { body } = consequent;
          list_add(body, next);
          let index = list_index(s1, next);
          list_set(s1, index, statement);
          list_remove(s1, parent);
        }
      }
      if (remaining === "ib") {
        js_dollar_if_block(v, false);
      }
      if (remaining === "ie") {
        let condition = js_code_call_args(equal.name, [
          js_name_unique(ast, "left"),
          js_name_unique(ast, "right"),
        ]);
        js_dollar_if_block(v, condition);
      }
      if (remaining === "st") {
        let e = js_parse_expression(
          js_code_call_args(object_property_set.name, [
            js_name_unique(ast, "object"),
            '"property_name"',
            js_name_unique(ast, "value"),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "p") {
        let e = js_parse_expression(
          js_code_call_args(object_property_exists.name, [
            js_name_unique(ast, "object"),
            '"property_name"',
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "d") {
        let e = js_parse_expression(
          js_code_call_args(object_property_delete.name, [
            js_name_unique(ast, "object"),
            '"property_name"',
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "t") {
        let d = js_declaration_single(ast);
        let this_name = js_declaration_to_name(d);
        let code = js_code_dot(this_name, js_function_property_name());
        let e = js_parse_expression(code);
        object_replace(node, e);
      }
      let log_prefix_start_is = remaining === log_prefix_start;
      if (log_prefix_start_is || prefix_use(remaining, log_prefix, prefixes)) {
        let inside;
        if (log_prefix_start_is) {
          inside = "";
        } else {
          remaining = string_prefix_without(remaining, log_prefix);
          inside = remaining;
        }
        let e = js_parse_expression(
          js_code_call_args(log.name, [js_code_braces_inside(inside)]),
        );
        object_replace(node, e);
      }
      if (prefix_use(remaining, scm_prefix, prefixes)) {
        if (list_is(parent)) {
          let e = js_parse_expression(
            js_code_call_args(string_combine_multiple.name, [
              js_code_array_empty(),
            ]),
          );
          let es = list_first(e.arguments).elements;
          let index = list_index(parent, node);
          let next_index = index + 1;
          remaining = string_prefix_without(remaining, scm_prefix);
          let count = integer_parse_try(remaining);
          if (!number_is(count)) {
            count = list_index_last(parent) - index;
          }
          each_range(count, () => {
            let removed = list_remove_at(parent, next_index);
            list_add(es, removed);
          });
          object_replace(node, e);
        }
      }
      if (prefix_use(remaining, sermon_prefix, prefixes)) {
        let count = remaining_count_get(remaining, sermon_prefix);
        let e = js_parse_expression(
          string_combine_multiple(["{sermon:'',count:", count, "}"]),
        );
        object_replace(node, e);
      }
      if (remaining === "x") {
        let e = js_parse_expression(js_code_call(exit.name));
        object_replace(node, e);
      }
    }
  });
  function remaining_count_get(remaining, question_prefix) {
    remaining = string_prefix_without(remaining, question_prefix);
    let count = 1;
    if (string_empty_not_is(remaining)) {
      count = integer_parse(remaining);
    }
    return count;
  }
  function prefix_use(remaining, prefix, prefixes) {
    let p1 = string_starts_with(remaining, prefix);
    return (
      p1 &&
      list_all(
        prefixes,
        (p) =>
          !string_starts_with(remaining, p) || string_starts_with(prefix, p),
      )
    );
  }
}
