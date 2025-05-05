import { object_property_set } from "./object_property_set.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_code_function_declare } from "./js_code_function_declare.mjs";
export function js_function_expression(lambda_name, async_is, params, body) {
  let lambda_code = js_code_function_declare(lambda_name, "", "", async_is);
  let lambda = js_parse_expression(lambda_code);
  let params2 = object_property_get(lambda, "params");
  list_add_multiple(params2, params);
  object_property_set(lambda, "body", body);
  return lambda;
}
