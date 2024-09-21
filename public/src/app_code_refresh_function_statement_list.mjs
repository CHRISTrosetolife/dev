import { list_multiple_is } from "./list_multiple_is.mjs";
import { app_code_refresh_function_statement } from "./app_code_refresh_function_statement.mjs";
import { each } from "./each.mjs";
export function app_code_refresh_function_statement_list(
  list,
  parent,
  root,
  border,
) {
  each(list, (item) => {
    app_code_refresh_function_statement(
      parent,
      root,
      item,
      list_multiple_is(list) ? border + 1 : border,
    );
  });
}
