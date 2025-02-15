import { js_identifiers_defines } from "./js_identifiers_defines.mjs";
import { js_function_types_is } from "./js_function_types_is.mjs";
import { each } from "./each.mjs";
import { list_take } from "./list_take.mjs";
import { list_index } from "./list_index.mjs";
import { list_after_or } from "./list_after_or.mjs";
import { list_after } from "./list_after.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_index_last } from "./list_index_last.mjs";
export function js_identifiers_scoped_each(visitor, stack_item) {
  let names = list_adder(function (la) {
    let { stack, node } = visitor;
    let { type: s_type } = stack_item;
    if (list_includes(["BlockStatement", "Program"], s_type)) {
      if (
        list_includes(stack, stack_item) &&
        list_index(stack, stack_item) < list_index_last(stack) - 1
      ) {
        let list = list_after(stack, stack_item);
        let item = list_after_or(stack, list, node);
        let index = list_index(list, item);
        let taken = list_take(list, index);
        each(taken, function (t) {
          each(js_identifiers_defines(t), la);
        });
      }
    } else {
      if (js_function_types_is(s_type)) {
        each(js_identifiers_defines(stack_item), la);
      }
    }
  });
  return names;
}
