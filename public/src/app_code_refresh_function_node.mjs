import { html_style_display_block } from "./html_style_display_block.mjs";
import { html_style_display_none } from "./html_style_display_none.mjs";
import { todo } from "./todo.mjs";
import { equal_by } from "./equal_by.mjs";
import { list_all } from "./list_all.mjs";
import { html_span_text_gray } from "./html_span_text_gray.mjs";
import { app_code_refresh_function_node_identifier_add } from "./app_code_refresh_function_node_identifier_add.mjs";
import { app_code_refresh_function_node_identifier_add_fn } from "./app_code_refresh_function_node_identifier_add_fn.mjs";
import { object_copy_merge } from "./object_copy_merge.mjs";
import { app_code_refresh_function_node_block } from "./app_code_refresh_function_node_block.mjs";
import { string_is } from "./string_is.mjs";
import { js_keyword_await } from "./js_keyword_await.mjs";
import { html_span_text_list_comma_parenthesis } from "./html_span_text_list_comma_parenthesis.mjs";
import { html_span_text_list_comma } from "./html_span_text_list_comma.mjs";
import { app_code_refresh_function_node_section } from "./app_code_refresh_function_node_section.mjs";
import { js_keyword_function } from "./js_keyword_function.mjs";
import { js_keyword_export } from "./js_keyword_export.mjs";
import { html_code_keyword_space } from "./html_code_keyword_space.mjs";
import { log } from "./log.mjs";
import { each } from "./each.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_code_statement_end } from "./js_code_statement_end.mjs";
import { html_code_string } from "./html_code_string.mjs";
import { js_keyword_from } from "./js_keyword_from.mjs";
import { js_keyword_import } from "./js_keyword_import.mjs";
import { list_first } from "./list_first.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { folder_current_prefix } from "./folder_current_prefix.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_span_text_font_color } from "./html_span_text_font_color.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { html_div } from "./html_div.mjs";
import { html_button } from "./html_button.mjs";
export function app_code_refresh_function_node(args) {
  let { parent, node } = args;
  if (js_node_type_is(node, "Program")) {
    let body = object_property_get(node, "body");
    let imports_container = html_div(parent);
    html_style_display_none(imports_container);
    let imports = html_div(imports_container);
    html_style_display_none(imports);
    html_button(imports_container, "Show imports", () => {
      html_style_display_block(imports);
    });
    let only_imports = true;
    each(body, async (b) => {
      todo("hide the imports behind button");
      let b_parent;
      if (only_imports && js_node_type_is(b, "ImportDeclaration")) {
        b_parent = imports;
        html_style_display_block(imports_container);
      } else {
        only_imports = false;
        b_parent = parent;
      }
      app_code_refresh_function_node_section(
        object_copy_merge(args, {
          node: b,
          parent: b_parent,
        }),
        false,
      );
    });
  } else if (js_node_type_is(node, "ImportDeclaration")) {
    let source = object_property_get(node, "source");
    let type_source = object_property_get(source, "type");
    assert(equal, [type_source, "Literal"]);
    let value = object_property_get(source, "value");
    assert(string_starts_with, [value, folder_current_prefix()]);
    let specifiers = object_property_get(node, "specifiers");
    assert(list_size_1, [specifiers]);
    let s = list_first(specifiers);
    let imported = object_property_get(s, "imported");
    let name2 = object_property_get(imported, "name");
    let local = object_property_get(s, "local");
    let name = object_property_get(local, "name");
    assert(equal, [name, name2]);
    html_code_keyword_space(parent, js_keyword_import());
    html_span_text_gray(parent, "{ ");
    app_code_refresh_function_node_identifier_add_fn(parent, name, args);
    html_span_text_gray(parent, " } ");
    html_code_keyword_space(parent, js_keyword_from());
    let raw = object_property_get(source, "raw");
    html_code_string(parent, raw);
    html_span_text_gray(parent, js_code_statement_end());
  } else if (js_node_type_is(node, "ExportNamedDeclaration")) {
    html_code_keyword_space(parent, js_keyword_export());
    let declaration = object_property_get(node, "declaration");
    app_code_refresh_function_node(
      object_copy_merge(args, {
        node: declaration,
      }),
    );
  } else if (js_node_type_is(node, "FunctionDeclaration")) {
    html_code_keyword_space(parent, js_keyword_function());
    let id = object_property_get(node, "id");
    let name3 = object_property_get(id, "name");
    app_code_refresh_function_node_identifier_add_fn(parent, name3, args);
    let params = object_property_get(node, "params");
    html_span_text_list_comma_parenthesis(parent, params, lambda);
    function lambda(param) {
      app_code_refresh_function_node_identifier_add(parent, param, args);
    }
    let body3 = object_property_get(node, "body");
    app_code_refresh_function_node(
      object_copy_merge(args, {
        node: body3,
      }),
    );
  } else if (js_node_type_is(node, "BlockStatement")) {
    let body2 = object_property_get(node, "body");
    app_code_refresh_function_node_block(
      object_copy_merge(args, {
        node: body2,
      }),
    );
  } else if (js_node_type_is(node, "VariableDeclaration")) {
    let kind = object_property_get(node, "kind");
    html_code_keyword_space(parent, kind);
    let declarations = object_property_get(node, "declarations");
    html_span_text_list_comma(
      parent,
      declarations,
      function lambda(declaration) {
        app_code_refresh_function_node(
          object_copy_merge(args, {
            node: declaration,
          }),
        );
      },
    );
    html_span_text_gray(parent, js_code_statement_end());
  } else if (js_node_type_is(node, "VariableDeclarator")) {
    let id2 = object_property_get(node, "id");
    assert(js_node_type_is, [id2, "Identifier"]);
    let name4 = object_property_get(id2, "name");
    app_code_refresh_function_node_identifier_add(parent, name4, args);
    html_span_text_gray(parent, " = ");
    let init = object_property_get(node, "init");
    app_code_refresh_function_node(
      object_copy_merge(args, {
        node: init,
      }),
    );
  } else if (js_node_type_is(node, "CallExpression")) {
    let args2 = object_property_get(node, "arguments");
    let callee = object_property_get(node, "callee");
    let name5 = object_property_get(callee, "name");
    app_code_refresh_function_node_identifier_add_fn(parent, name5, args);
    html_span_text_list_comma_parenthesis(parent, args2, lambda);
    function lambda(arg) {
      app_code_refresh_function_node(
        object_copy_merge(args, {
          node: arg,
        }),
      );
    }
  } else if (js_node_type_is(node, "ExpressionStatement")) {
    let expression = object_property_get(node, "expression");
    app_code_refresh_function_node(
      object_copy_merge(args, {
        node: expression,
      }),
    );
    html_span_text_gray(parent, js_code_statement_end());
  } else if (js_node_type_is(node, "AwaitExpression")) {
    let argument = object_property_get(node, "argument");
    html_code_keyword_space(parent, js_keyword_await());
    app_code_refresh_function_node(
      object_copy_merge(args, {
        node: argument,
      }),
    );
  } else if (js_node_type_is(node, "Identifier")) {
    let name6 = object_property_get(node, "name");
    app_code_refresh_function_node_identifier_add(parent, name6, args);
  } else if (js_node_type_is(node, "ObjectExpression")) {
    let properties = object_property_get(node, "properties");
    html_span_text_gray(parent, " { ");
    html_span_text_list_comma(parent, properties, (b) => {
      app_code_refresh_function_node(
        object_copy_merge(args, {
          node: b,
        }),
      );
    });
    html_span_text_gray(parent, " }");
  } else if (js_node_type_is(node, "ArrayExpression")) {
    html_span_text_gray(parent, "[ ");
    let elements = object_property_get(node, "elements");
    html_span_text_list_comma(parent, elements, lambda);
    html_span_text_gray(parent, " ]");
    function lambda(element) {
      app_code_refresh_function_node(
        object_copy_merge(args, {
          node: element,
        }),
      );
    }
  } else if (js_node_type_is(node, "Literal")) {
    let raw2 = object_property_get(node, "raw");
    if (string_is(raw2)) {
      html_code_string(parent, raw2);
    } else {
      unknown();
    }
  } else if (js_node_type_is(node, "Property")) {
    let value2 = object_property_get(node, "value");
    let key = object_property_get(node, "key");
    if (list_all([key, value2], (n) => js_node_type_is(n, "Identifier"))) {
      if (equal_by(key, value2, (n) => object_property_get(n, "name"))) {
        app_code_refresh_function_node(
          object_copy_merge(args, {
            node: key,
          }),
        );
      } else {
        unknown();
      }
    } else {
      unknown();
    }
  } else {
    log({
      node,
    });
    unknown();
  }
  function unknown() {
    html_span_text_font_color(parent, js_unparse(node), "deeppink");
  }
}
