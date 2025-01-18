import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
export function list_flatten(group) {
  return list_adder((la) => {
    each(group, (atom) => {
      each(atom, la);
    });
  });
}
