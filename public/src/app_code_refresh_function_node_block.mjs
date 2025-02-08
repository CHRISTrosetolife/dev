import { object_merge } from "./object_merge.mjs";
import { app_code_refresh_function_node_section } from "./app_code_refresh_function_node_section.mjs";
import { each } from "./each.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_refresh_function_node_block(parent, body2) {
  html_span_text(parent, " {");
  each(body2, (b) => {
    app_code_refresh_function_node_section(
      object_merge(args, {
        node: b,
      }),
      true,
    );
  });
  html_span_text(parent, "}");
}
