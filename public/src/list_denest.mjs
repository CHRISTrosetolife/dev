import { list_denest_recursive } from "./list_denest_recursive.mjs";
import { list_adder } from "./list_adder.mjs";
export function list_denest(list) {
  list_adder((la) => {
    list_denest_recursive(list, la);
  });
}
