import { html_input_validated_on_input } from "./html_input_validated_on_input.mjs";
import { html_input_validated_on_input_lambda } from "./html_input_validated_on_input_lambda.mjs";
export function html_input_validated_on_input_lambda_initial(
  input_username,
  lambda,
) {
  html_input_validated_on_input_lambda(input_username, lambda);
  html_input_validated_on_input(input_username);
}
