import { js_identifiers_scoped_each } from "./js_identifiers_scoped_each.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
export function js_identifiers_scoped(visitor) {
  let { stack, node } = visitor;
  let names = list_adder(function (la) {
    each(stack, function (stack_item) {
      let stack_item_names = js_identifiers_scoped_each(stack_item, visitor);
      each(list2, function (item3) {});
    });
  });
  return names;
}
