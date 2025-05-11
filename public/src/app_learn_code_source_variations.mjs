import { list_remove_last } from "./list_remove_last.mjs";
import { string_size } from "./string_size.mjs";
import { list_size } from "./list_size.mjs";
import { number_power_2 } from "./number_power_2.mjs";
import { js_unparse_indent_none } from "./js_unparse_indent_none.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_remove } from "./list_remove.mjs";
import { js_node_types } from "./js_node_types.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { less_than } from "./less_than.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { number_string_to } from "./number_string_to.mjs";
import { list_filter } from "./list_filter.mjs";
import { object_property_swap } from "./object_property_swap.mjs";
import { equal } from "./equal.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_parse } from "./js_parse.mjs";
import { list_includes } from "./list_includes.mjs";
import { range } from "./range.mjs";
import { list_get } from "./list_get.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function app_learn_code_source_variations(source) {
  let operators = ["+", "*", "===", "!=="];
  let { filtered, ast } = ast_filtered(source);
  let filtered_length = list_size(filtered);
  let s = js_unparse_indent_none(ast);
  if (equal(filtered_length, 0)) {
    return [s];
  }
  let result = [];
  let remaining = [s];
  while (list_empty_not_is(remaining)) {
    let r = list_remove_last(remaining);
    let count = number_power_2(filtered_length);
    for (let i of range(count)) {
      let { filtered, ast } = ast_filtered(r);
      let base2 = number_string_to(i, 2);
      while (less_than(string_size(base2), filtered_length)) {
        base2 = string_combine("0", base2);
      }
      let b_split = string_split_empty(base2);
      let b_split_length = list_size(b_split);
      for (let n of range(filtered_length)) {
        let swap = false;
        let filtered_n = list_get(filtered, n);
        if (less_than(n, b_split_length)) {
          let literals = js_node_type(filtered_n, "Literal");
          let literal_strings = list_filter(literals, (l) => {
            let { value } = l;
            return typeof value === "string";
          });
          let b_split_n = list_get(b_split, n);
          let no_literal_strings = list_empty_is(literal_strings);
          let { left, right } = filtered_n;
          let both = [left, right];
          let empty_strings = list_filter(
            both,
            (b) => left.type === "Literal" && b.value === "",
          );
          let left_or_right_is_empty_string = list_empty_not_is(empty_strings);
          swap =
            equal(b_split_n, "0") &&
            (no_literal_strings || left_or_right_is_empty_string);
        }
        if (swap) {
          object_property_swap(filtered_n, "left", "right");
        }
      }
      js_visit_node(ast, "BinaryExpression", (v) => {
        let { node } = v;
        let nt = js_node_types(node);
        let valid = ["BinaryExpression", "Identifier", "Literal"];
        for (let v of valid) {
          if (list_includes(nt, v)) {
            list_remove(nt, v);
          }
        }
        if (list_empty_is(nt)) {
          let { right } = node;
          let { type } = right;
          if (equal(type, "BinaryExpression")) {
            let { operator } = node;
            let { operator: operator_r } = right;
            if (equal(operator_r, operator)) {
              let { left } = node;
              let { left: left_r, right: right_r } = right;
              object_property_set(node, "left", right);
              object_property_set(right, "left", left);
              object_property_set(right, "right", left_r);
              object_property_set(node, "right", right_r);
            }
          }
        }
      });
      let alternative = js_unparse_indent_none(ast);
      if (list_includes_not(result, alternative)) {
        list_add(result, alternative);
        list_add(remaining, alternative);
      }
    }
  }
  return result;
  function ast_filtered(source) {
    let ast = js_parse(source);
    let bes = js_node_type(ast, "BinaryExpression");
    let filtered = list_filter(bes, (be) => {
      let { operator } = be;
      return list_includes(operators, operator);
    });
    return {
      filtered,
      ast,
    };
  }
}
