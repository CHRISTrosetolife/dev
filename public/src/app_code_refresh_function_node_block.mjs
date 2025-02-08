import { html_span_text_gray } from "./html_span_text_gray.mjs";
import { object_copy_merge } from "./object_copy_merge.mjs";
import { app_code_refresh_function_node_section } from "./app_code_refresh_function_node_section.mjs";
import { each } from "./each.mjs";
export function app_code_refresh_function_node_block(args) {
  let { parent, node } = args;
  html_span_text_gray(parent, " {");
  each(node, (n) => {
    app_code_refresh_function_node_section(
      object_copy_merge(args, {
        node: n,
      }),
      true,
    );
  });
  html_span_text_gray(parent, "}");
}
