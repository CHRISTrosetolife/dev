import { list_adder } from "./list_adder.mjs";
export function list_filter_by(list, filter) {
  return list_adder((la) => {});
  return list.filter((item) => filter(item));
}
