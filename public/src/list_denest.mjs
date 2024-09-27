import { list_adder } from "./list_adder.mjs";
import { each } from "./each.mjs";
export function list_denest(list) {
  list_adder((la) => {
    each(list, (item) => la);
  });
}
