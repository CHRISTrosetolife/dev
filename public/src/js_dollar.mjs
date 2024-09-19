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
import { js_node_is } from "./js_node_is.mjs";
import { list_previous } from "./list_previous.mjs";
import { list_next } from "./list_next.mjs";
import { list_find_last } from "./list_find_last.mjs";
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
export function js_dollar(ast) {
  js_visit_identifiers(ast, (v) => {
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
        let { stack } = v;
        let predicate = list_is;
        let list = list_find_last(stack, predicate);
        let item = list_next(stack, list);
        let previous = list_previous(list, item);
        if (js_node_is(previous) && previous.type === "IfStatement") {
          let value_new = js_block_statement([]);
          object_property_set(previous, "alternate", value_new);
          list_remove(list, item);
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
        let { stack } = v;
        if (list_is(parent)) {
          let next = list_next(parent, node);
        }
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
