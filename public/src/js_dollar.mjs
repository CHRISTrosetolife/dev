import { list_get_end_2 } from "./list_get_end_2.mjs";
import { js_stack_find_list_visitor } from "./js_stack_find_list_visitor.mjs";
import { log } from "./log.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_last } from "./list_last.mjs";
import { list_before } from "./list_before.mjs";
import { list_find_last_index } from "./list_find_last_index.mjs";
import { list_get } from "./list_get.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_skip } from "./list_skip.mjs";
import { js_code_arrow_block_args_choose } from "./js_code_arrow_block_args_choose.mjs";
import { string_trail_dollar } from "./string_trail_dollar.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_dollar_grandparent } from "./js_dollar_grandparent.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { list_insert } from "./list_insert.mjs";
import { each } from "./each.mjs";
import { list_map } from "./list_map.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { object_property_get_code } from "./object_property_get_code.mjs";
import { object_property_get_expression } from "./object_property_get_expression.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { string_split_dollar } from "./string_split_dollar.mjs";
import { js_dollar_expand_await } from "./js_dollar_expand_await.mjs";
import { object_copy_replace } from "./object_copy_replace.mjs";
import { js_visit_identifiers_named } from "./js_visit_identifiers_named.mjs";
import { js_node_if_declaration } from "./js_node_if_declaration.mjs";
import { string_split } from "./string_split.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { list_remove_multiple } from "./list_remove_multiple.mjs";
import { js_code_brackets } from "./js_code_brackets.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_dollar_grandparent_next } from "./js_dollar_grandparent_next.mjs";
import { js_dollar_else } from "./js_dollar_else.mjs";
import { js_dollar_if_block } from "./js_dollar_if_block.mjs";
import { js_code_if_false } from "./js_code_if_false.mjs";
import { list_set } from "./list_set.mjs";
import { js_parse_first } from "./js_parse_first.mjs";
import { js_code_braces_inside } from "./js_code_braces_inside.mjs";
import { js_function_property_name } from "./js_function_property_name.mjs";
import { js_code_dot } from "./js_code_dot.mjs";
import { js_declaration_to_name } from "./js_declaration_to_name.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { list_remove } from "./list_remove.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_block_statement } from "./js_block_statement.mjs";
import { js_code_arrow_block_args_async } from "./js_code_arrow_block_args_async.mjs";
import { list_remove_first } from "./list_remove_first.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { integer_parse_try } from "./integer_parse_try.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { js_code_arrow_block_args } from "./js_code_arrow_block_args.mjs";
import { js_name_unique } from "./js_name_unique.mjs";
import { each_range } from "./each_range.mjs";
import { js_code_array_empty } from "./js_code_array_empty.mjs";
import { js_code_call } from "./js_code_call.mjs";
import { js_code_braces } from "./js_code_braces.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { js_visit_identifiers } from "./js_visit_identifiers.mjs";
import { js_parse_first_function } from "./js_parse_first_function.mjs";
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
import { object_property_get } from "./object_property_get.mjs";
import { equal } from "./equal.mjs";
import { string_empty_is } from "./string_empty_is.mjs";
import { assert } from "./assert.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { string_replace } from "./string_replace.mjs";
export function js_dollar(ast) {
  js_visit_identifiers(ast, async function (v) {
    let { node } = v;
    let { name } = node;
    let prefix = "$";
    if (string_starts_with(name, prefix)) {
      name = string_case_lower(name);
      let { parent } = v;
      let lambda_prefix = "a";
      let objection_prefix = "o";
      let question_prefix = "q";
      let scm_prefix = "s";
      let sermon_prefix = "se";
      let log_prefix_start = "l";
      let get_prefix = "g";
      let log_prefix = string_trail_dollar(log_prefix_start);
      let prefixes = [
        lambda_prefix,
        objection_prefix,
        question_prefix,
        scm_prefix,
        sermon_prefix,
        log_prefix,
        get_prefix,
      ];
      let remaining = string_prefix_without(name, prefix);
      if (remaining === "aa") {
        let e = js_parse_expression(
          js_code_call(fn_name("assert_arguments_length")),
        );
        object_replace(node, e);
      }
      if (remaining === "ar") {
        let e = js_parse_expression(js_code_arrow_block_args([], "return;"));
        object_replace(node, e);
      }
      if (remaining === "as") {
        let e = js_parse_expression(
          js_code_call_args(fn_name("assert"), [
            fn_name("never"),
            js_code_brackets(),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "e") {
        let list = js_name_unique(ast, "list");
        let item = js_name_unique(ast, "item");
        let e = js_parse_expression(
          js_code_call_args(fn_name("each"), [
            list,
            js_code_arrow_block_args([item], ""),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "2i") {
        await js_dollar_grandparent_next(v, lambda);
        async function lambda(a) {
          let { next } = a;
          if (false) {
          }
          log({
            next,
          });
        }
      }
      if (remaining === "er") {
        let count = js_name_unique(ast, "count");
        let item = js_name_unique(ast, "item");
        let e = js_parse_expression(
          js_code_call_args(fn_name("each_range"), [
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
          js_code_call_args(fn_name("each_range_reverse"), [
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
          js_code_call_args(fn_name("each_async"), [
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
          js_code_call_args(fn_name("each_index"), [
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
      if (remaining === "ep") {
        let value_new = js_parse_first(js_code_if_false());
        let { current, list, item } = js_stack_find_list_visitor(v);
        let previous = null;
        while (js_node_is(current) && current.type === "IfStatement") {
          previous = current;
          current = object_property_get(current, "alternate");
        }
        if (previous !== null) {
          object_property_get(previous, "alternate");
          object_property_set(previous, "alternate", value_new);
          list_remove(list, item);
        }
      }
      if (equal(remaining, "ag")) {
        await js_dollar_grandparent_next(v, lambda);
        async function lambda(a) {
          let { next, s2 } = a;
          await js_node_if_declaration(next, async function lambda_inner(d) {
            let { id } = d;
            if (js_node_type_is(id, "Identifier")) {
              let name_id = object_property_get(id, "name");
              let { init } = d;
              js_visit_identifiers_named(ast, name_id, function (node) {
                object_copy_replace(node, init);
              });
              list_remove_multiple(s2, [parent, next]);
            }
          });
        }
      }
      if (equal(remaining, "ex")) {
        await js_dollar_grandparent_next(v, lambda);
        async function lambda(a) {
          let { next } = a;
          if (js_node_type_is(next, "ExpressionStatement")) {
            let e = object_property_get(next, "expression");
            await js_dollar_expand_await(e, ast, null, a, parent);
          }
          await js_node_if_declaration(next, async function (d) {
            let { init, id } = d;
            await js_dollar_expand_await(init, ast, id, a, parent);
          });
        }
      }
      if (list_includes(["eo", "eoa"], remaining)) {
        let object = js_name_unique(ast, "object");
        let key = js_name_unique(ast, "key");
        let value = js_name_unique(ast, "value");
        let js_code_arrow_block_args_async_use = remaining === "eoa";
        let e = js_parse_expression(
          js_code_call_args(
            remaining === "eoa"
              ? fn_name("each_object_async")
              : fn_name("each_object"),
            [
              object,
              js_code_arrow_block_args_choose(
                js_code_arrow_block_args_async_use,
              )([key, value], ""),
            ],
          ),
        );
        object_replace(node, e);
      }
      if (remaining === "gl") {
        let e = js_parse_expression(
          js_code_call_args(fn_name("list_get"), [
            js_name_unique(ast, "list"),
            js_name_unique(ast, "index"),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "le") {
        let e = js_parse_expression(
          js_code_call_args(fn_name("log_error"), [js_code_braces()]),
        );
        object_replace(node, e);
      }
      if (remaining === "la") {
        let e = js_parse_expression(
          js_code_call_args(fn_name("list_adder"), [
            js_code_arrow_block_args([js_name_unique(ast, "la")], ""),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "laa") {
        let e = js_parse_expression(
          js_code_call_args(fn_name("list_adder_async"), [
            js_code_arrow_block_args_async([js_name_unique(ast, "la")], ""),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "lam") {
        let e = js_parse_expression(
          js_code_call_args(fn_name("list_adder_multiple"), [
            js_code_arrow_block_args([js_name_unique(ast, "la")], ""),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "lau") {
        let e = js_parse_expression(
          js_code_call_args(fn_name("list_adder_unique"), [
            js_code_arrow_block_args([js_name_unique(ast, "la")], ""),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "lr") {
        let e = js_parse_expression(
          js_code_call_args(fn_name("list_random_item"), [
            js_code_array_empty(),
          ]),
        );
        if (list_is(parent)) {
          let index = list_index(parent, node);
          let next = list_remove_at(parent, index + 1);
          list_add(list_first(e.arguments).elements, next);
          object_replace(node, e);
        }
      }
      let first_second = "fs";
      if (string_starts_with(remaining, first_second)) {
        if (parent.type === "ExpressionStatement") {
          remaining = string_prefix_without(remaining, first_second);
          let { stack } = v;
          let s2 = list_get_end(stack, 2);
          log({
            s2,
          });
          if (list_is(s2)) {
            let index = list_index(s2, parent);
            let codes = [
              js_code_statement_let_assign(
                js_name_unique(ast, "first"),
                js_code_call_args(fn_name("list_first"), [remaining]),
              ),
              js_code_statement_let_assign(
                js_name_unique(ast, "second"),
                js_code_call_args(fn_name("list_second"), [remaining]),
              ),
            ];
            list_reverse(codes);
            each(codes, function (item2) {
              list_insert(s2, index, js_parse_first(item2));
            });
            list_remove(s2, parent);
          }
        }
      }
      if (remaining === "v") {
        let { stack } = v;
        let statement_index = list_find_last_index(stack, function (n) {
          let v4 = js_node_type_is(n, "ExpressionStatement");
          return v4;
        });
        let statement = list_get(stack, statement_index);
        let statement_index_previous = statement_index - 1;
        let list = list_get(stack, statement_index_previous);
        let before = list_before(list, statement);
        if (js_node_type_is(before, "VariableDeclaration")) {
          let declarations = object_property_get(before, "declarations");
          let ms = list_map_property(declarations, "id");
          let fs = list_filter(ms, function (id2) {
            let v5 = js_node_type_is(id2, "Identifier");
            return v5;
          });
          let d = list_last(fs);
          object_replace(node, d);
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
        let s2 = list_get_end_2(stack);
        let s3 = list_get_end(stack, 3);
        if (
          list_is(parent) &&
          s2.type === "SequenceExpression" &&
          s3.type === "ExpressionStatement"
        ) {
          list_remove_first(parent);
          e.argument = s2;
          object_replace(s3, e);
        } else if (parent.type === "ExpressionStatement") {
          object_replace(parent, e);
        }
      }
      if (remaining === "i") {
        await js_dollar_grandparent_next(v, lambda);
        function lambda(a) {
          let { s2, next } = a;
          let statement = js_parse_first(js_code_if_false());
          let { consequent } = statement;
          let { body } = consequent;
          list_add(body, next);
          let index = list_index(s2, next);
          list_set(s2, index, statement);
          list_remove(s2, parent);
        }
      }
      if (remaining === "ib") {
        js_dollar_if_block(v, false);
      }
      if (remaining === "ie") {
        let condition = js_code_call_args(fn_name("equal"), [
          js_name_unique(ast, "left"),
          js_name_unique(ast, "right"),
        ]);
        js_dollar_if_block(v, condition);
      }
      if (remaining === "st") {
        let e = js_parse_expression(
          js_code_call_args(fn_name("object_property_set"), [
            js_name_unique(ast, "object"),
            '"property_name"',
            js_name_unique(ast, "value"),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "p") {
        let e = js_parse_expression(
          js_code_call_args(fn_name("object_property_exists"), [
            js_name_unique(ast, "object"),
            '"property_name"',
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "z") {
        let e = js_parse_expression(
          js_code_call_args(fn_name("object_property_initialize"), [
            js_name_unique(ast, "object"),
            '"property_name"',
            "null",
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "d") {
        let e = js_parse_expression(
          js_code_call_args(fn_name("object_property_delete"), [
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
      if (remaining === get_prefix) {
        let e = object_property_get_expression(
          ast,
          "object",
          string_delimit("property_name"),
        );
        object_replace(node, e);
      } else if (prefix_use(remaining, get_prefix, prefixes)) {
        remaining = string_prefix_without(remaining, get_prefix);
        let s = string_split_dollar(remaining);
        let fr = list_first_remaining(s);
        let variable_name = object_property_get(fr, "first");
        assert(string_empty_not_is, [variable_name]);
        let property_names = object_property_get(fr, "remaining");
        list_reverse(property_names);
        let mapped = list_map(property_names, function (property_name) {
          let c = js_code_statement_let_assign(
            js_name_unique(ast, property_name),
            object_property_get_code(
              variable_name,
              string_delimit(property_name),
            ),
          );
          let r = js_parse_first(c);
          return r;
        });
        await js_dollar_grandparent(v, function (a) {
          let { index, s2 } = a;
          each(mapped, function (m) {
            list_insert(s2, index, m);
          });
          list_remove(s2, parent);
        });
      } else {
        let log_prefix_start_is = remaining === log_prefix_start;
        if (
          log_prefix_start_is ||
          prefix_use(remaining, log_prefix, prefixes)
        ) {
          let inside;
          let arg;
          if (log_prefix_start_is) {
            inside = "";
            arg = '""';
          } else {
            remaining = string_prefix_without(remaining, log_prefix);
            inside = string_replace(remaining, "$", ",");
            arg = js_code_braces_inside(inside);
          }
          let e = js_parse_expression(js_code_call_args(fn_name("log"), [arg]));
          object_replace(node, e);
        } else if (prefix_use(remaining, lambda_prefix, prefixes)) {
          remaining = string_prefix_without(remaining, lambda_prefix);
          let async_prefix = "y";
          let async_use = false;
          if (string_starts_with(remaining, async_prefix)) {
            remaining = string_prefix_without(remaining, async_prefix);
            async_use = true;
          }
          if (
            string_starts_with(remaining, "$") ||
            string_empty_is(remaining)
          ) {
            let e = js_parse_expression(
              js_code_arrow_block_args_choose(async_use)(
                list_skip(string_split(remaining, "$"), 1),
                "",
              ),
            );
            object_replace(node, e);
          }
        } else if (prefix_use(remaining, scm_prefix, prefixes)) {
          if (list_is(parent)) {
            let e = js_parse_expression(
              js_code_call_args(fn_name("string_combine_multiple"), [
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
            each_range(count, function () {
              let removed = list_remove_at(parent, next_index);
              list_add(es, removed);
            });
            object_replace(node, e);
          }
        } else if (prefix_use(remaining, sermon_prefix, prefixes)) {
          let count = remaining_count_get(remaining, sermon_prefix);
          let e = js_parse_expression(
            string_combine_multiple(["{sermon:'',count:", count, "}"]),
          );
          object_replace(node, e);
        } else if (remaining === "x") {
          let e = js_parse_expression(js_code_call(fn_name("exit")));
          object_replace(node, e);
        }
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
    let v2 =
      p1 &&
      list_all(prefixes, function (p) {
        let v3 =
          !string_starts_with(remaining, p) || string_starts_with(prefix, p);
        return v3;
      });
    return v2;
  }
}
