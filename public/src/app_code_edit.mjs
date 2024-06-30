import { html_input_width_full } from "./html_input_width_full.mjs";
import { js_code_brackets } from "./js_code_brackets.mjs";
import { html_textarea } from "./html_textarea.mjs";
import { html_element_select } from "./html_element_select.mjs";
import { file_write } from "./file_write.mjs";
import { app_code_global_file_paths } from "./app_code_global_file_paths.mjs";
import { app_code_back_multiple } from "./app_code_back_multiple.mjs";
import { function_copy } from "./function_copy.mjs";
import { html_style_pre_wrap } from "./html_style_pre_wrap.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { object_values } from "./object_values.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { function_transform_args_split } from "./function_transform_args_split.mjs";
import { app_code_search_function_generic } from "./app_code_search_function_generic.mjs";
import { app_learn_code_source_to_tokens } from "./app_learn_code_source_to_tokens.mjs";
import { html_style_hide_until } from "./html_style_hide_until.mjs";
import { html_button_width_full_text_click_x_0 } from "./html_button_width_full_text_click_x_0.mjs";
import { app_code_button_back_text } from "./app_code_button_back_text.mjs";
import { app_code_back } from "./app_code_back.mjs";
import { app_code_backable } from "./app_code_backable.mjs";
import { html_button_text_click } from "./html_button_text_click.mjs";
import { function_auto } from "./function_auto.mjs";
import { html_on_input_value } from "./html_on_input_value.mjs";
import { app_code_download } from "./app_code_download.mjs";
import { functions_source_set } from "./functions_source_set.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { html_focus } from "./html_focus.mjs";
import { app_code_search_function } from "./app_code_search_function.mjs";
import { html_spellcheck_none } from "./html_spellcheck_none.mjs";
import { html_style_border_box } from "./html_style_border_box.mjs";
import { html_style_height_full } from "./html_style_height_full.mjs";
import { html_document_body_clear } from "./html_document_body_clear.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_style } from "./html_style.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_div } from "./html_div.mjs";
import { global_get } from "./global_get.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { function_run } from "./function_run.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { list_first } from "./list_first.mjs";
import { string_skip } from "./string_skip.mjs";
import { string_length } from "./string_length.mjs";
import { list_join } from "./list_join.mjs";
import { newline } from "./newline.mjs";
import { list_map } from "./list_map.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { json_to } from "./json_to.mjs";
import { html_style_monospace } from "./html_style_monospace.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { identity } from "./identity.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
import { html_value_set } from "./html_value_set.mjs";
export async function app_code_edit(file_path) {
  let function_name = function_path_to_name(file_path);
  let root = html_document_body_clear();
  let container = html_div(root);
  html_style(container, {
    display: "flex",
    "flex-direction": "column",
  });
  html_style_height_full(container);
  let container_top = html_div(container);
  html_style(container_top, {
    display: "flex",
    "flex-direction": "row",
  });
  html_button_text_click(container_top, "⚡", auto);
  html_button_width_full_text_click(container_top, "menu", lambda);
  async function auto() {
    let { files } = global_get();
    let source = object_property_get(files, file_path);
    let tokens = app_learn_code_source_to_tokens(source);
    let search_prefix = "$";
    let filtered = list_filter(tokens, (t) =>
      string_starts_with(t, search_prefix),
    );
    if (list_empty_is(filtered)) {
      await function_auto(function_name);
      await app_code_edit(file_path);
    } else {
      let first = list_first(filtered);
      let remaining = string_skip(first, string_length(search_prefix));
      app_code_search_function_generic(
        remaining,
        (file_path_choice) => {
          return async () => {
            let function_name_choice = function_path_to_name(file_path_choice);
            await function_transform_args_split(
              js_identifier_rename.name,
              function_name,
              [first, function_name_choice],
            );
            await auto();
          };
        },
        app_code_global_file_paths(),
        function_path_to_name,
      );
    }
  }
  async function lambda() {
    app_code_backable(async () => {
      let root = html_document_body_clear();
      html_button_width_full_text_click_x_0(
        root,
        app_code_button_back_text(),
        app_code_back,
      );
      html_button_width_full_text_click_x_0(root, "search", () => {
        app_code_backable(() => app_code_search_function());
      });
      let transform = html_button_width_full_text_click_x_0(
        root,
        "",
        async () => {
          app_code_backable(async () => {
            let root = html_document_body_clear();
            let sources = object_values(files);
            let mapped = list_map(sources, (s) => {
              let ast = js_parse(s);
              let d = js_declaration_single(ast);
              return js_unparse(d);
            });
            let code = `(async () => {
                    ${list_join(mapped, newline())}
                    return ${js_code_call_args(function_transform_args_split.name, [`${function_name}.name`, `${function_name}.name`, js_code_brackets()])}
                })();`;
            let result = await eval(code);
            html_button_width_full_text_click_x_0(
              root,
              app_code_button_back_text(),
              app_code_back,
            );
            html_button_width_full_text_click_x_0(
              root,
              "back to edit",
              async () => {
                let count = 2;
                await app_code_back_multiple(count);
              },
            );
            let result_div = html_div(root);
            html_style_monospace(result_div);
            html_style_pre_wrap(result_div);
            html_inner_set(result_div, json_to(result));
          });
        },
      );
      html_span_text(transform, "run ");
      let s = html_span_text(transform, function_transform_args_split.name);
      html_style_monospace(s);
      html_button_width_full_text_click_x_0(root, "add new function", () => {
        app_code_backable(() => {
          let root = html_document_body_clear();
          html_button_width_full_text_click_x_0(
            root,
            app_code_button_back_text(),
            app_code_back,
          );
          let input = html_input_width_full(root);
          html_focus(input);
          html_button_width_full_text_click_x_0(
            root,
            "add new function",
            async () => {
              let function_name = html_value_get(input);
              await function_new_generic(
                function_name,
                "",
                "",
                false,
                [],
                false,
                file_write,
              );
              let file_path = function_name_to_path(function_name);
              app_code_backable(async () => await app_code_edit(file_path));
            },
          );
        });
      });
      html_button_width_full_text_click_x_0(
        root,
        "rename identifier",
        async () => {
          app_code_backable(() =>
            app_code_search_function_generic(
              "",
              async (identifier_from) => {
                return async () => {
                  let root = html_document_body_clear();
                  html_button_width_full_text_click_x_0(
                    root,
                    app_code_button_back_text(),
                    app_code_back,
                  );
                  let input = html_input_width_full(root);
                  html_value_set(input, identifier_from);
                  html_element_select(input);
                  html_focus(input);
                  html_button_width_full_text_click_x_0(
                    root,
                    "rename identifier",
                    async () => {
                      let identifier_to = html_value_get(input);
                      await function_transform_args_split(
                        js_identifier_rename.name,
                        function_name,
                        [identifier_from, identifier_to],
                      );
                      await app_code_back_multiple(2);
                    },
                  );
                };
              },
              js_identifiers(js_parse(object_property_get(files, file_path))),
              identity,
            ),
          );
        },
      );
      html_button_width_full_text_click_x_0(root, "copy function", () => {
        app_code_backable(() => {
          let root = html_document_body_clear();
          html_button_width_full_text_click_x_0(
            root,
            app_code_button_back_text(),
            app_code_back,
          );
          let input = html_input_width_full(root);
          html_focus(input);
          html_button_width_full_text_click_x_0(
            root,
            "copy function",
            async () => {
              let function_name_copy = html_value_get(input);
              await function_copy(function_name, function_name_copy);
              let file_path_copy = function_name_to_path(function_name_copy);
              app_code_backable(
                async () => await app_code_edit(file_path_copy),
              );
            },
          );
        });
      });
      html_button_width_full_text_click_x_0(
        root,
        "upload functions",
        async () => {
          let { files } = global_get();
          await html_style_hide_until(
            root,
            async () => await function_run(functions_source_set.name, [files]),
          );
        },
      );
      html_button_width_full_text_click_x_0(
        root,
        "download functions",
        async () => {
          await html_style_hide_until(
            root,
            async () => await app_code_download(),
          );
        },
      );
    });
  }
  let { files } = global_get();
  let contents = object_property_get(files, file_path);
  let ta = html_textarea(container);
  html_on_input_value(ta, (value) => {
    object_property_set(files, file_path, value);
  });
  html_spellcheck_none(ta);
  html_style(ta, {
    display: "block",
  });
  html_style_border_box(ta);
  html_inner_set(ta, contents);
  html_style_width_full(ta);
  html_style_height_full(ta);
}
