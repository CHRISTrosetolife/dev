import { each_or } from "./each_or.mjs";
import { list_all } from "./list_all.mjs";
export function list_all_or(list, conditions) {
  return list_all(list, (l) => {
    return each_or(l, conditions);
  });
}
