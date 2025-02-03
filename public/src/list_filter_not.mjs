import { lambda_not } from "./lambda_not.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_not(value_as_list, valid_is) {
  return list_filter(value_as_list, lambda_not(valid_is));
}
