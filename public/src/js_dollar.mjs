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
export function js_dollar(ast) {
  js_visit_identifiers(ast, (v) => {
    let { node } = v;
    let { name } = node;
    let prefix = "$";
    if (string_starts_with(name, prefix)) {
      let { parent } = v;
      let remaining = string_prefix_without(name, prefix);
      if (remaining === "a") {
        let e = js_parse_expression(js_code_arrow_block());
        object_replace(node, e);
      }
      if (remaining === "ar") {
        let e = js_parse_expression(js_code_arrow_block_args([], "return;"));
        object_replace(node, e);
      }
      if (remaining === "e") {
        let list = js_name_unique(ast, "list");
        let name = js_name_unique(ast, "item");
        let e = js_parse_expression(
          js_code_call_args(each.name, [
            list,
            js_code_arrow_block_args([name], ""),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "ei") {
        let list = js_name_unique(ast, "list");
        let name = js_name_unique(ast, "item");
        let index = js_name_unique(ast, "index");
        let e = js_parse_expression(
          js_code_call_args(each_index.name, [
            list,
            js_code_arrow_block_args([name, index], ""),
          ]),
        );
        object_replace(node, e);
      }
      if (remaining === "x") {
        let e = js_parse_expression(js_code_call(exit.name));
        object_replace(node, e);
      }
      if (remaining === "l") {
        let e = js_parse_expression(
          js_code_call_args(log.name, [js_code_braces()]),
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
      if (remaining === "r") {
        let e = js_parse_first_function("return");
        if (parent.type === "ExpressionStatement") {
          object_replace(parent, e);
        }
      }
      let scm_prefix = "s";
      if (string_starts_with(remaining, scm_prefix)) {
        if (list_is(parent)) {
          remaining = string_prefix_without(remaining, scm_prefix);
          let count = integer_parse_try(remaining);
          let e = js_parse_expression(
            js_code_call_args(string_combine_multiple.name, [
              js_code_array_empty(),
            ]),
          );
          let es = list_first(e.arguments).elements;
          let index = list_index(parent, node);
          let next_index = index + 1;
          each_range(count, () => {
            let removed = list_remove_at(parent, next_index);
            list_add(es, removed);
          });
          object_replace(node, e);
        }
      }
      let objection_prefix = "o";
      if (string_starts_with(remaining, objection_prefix)) {
        remaining = string_prefix_without(remaining, objection_prefix);
        let count = 1;
        if (string_empty_not_is(remaining)) {
          count = integer_parse(remaining);
        }
        let e = js_parse_expression(
          string_combine_multiple(["{text:'',count:", count, "}"]),
        );
        object_replace(node, e);
      }
    }
  });
}
