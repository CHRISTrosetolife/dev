import { js_keyword_return } from "./js_keyword_return.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_display_inline } from "./html_style_display_inline.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { app_code_refresh_function_node_nodes } from "./app_code_refresh_function_node_nodes.mjs";
import { app_code_section } from "./app_code_section.mjs";
import { html_span_text_wrap_brackets } from "./html_span_text_wrap_brackets.mjs";
import { html_span_text_wrap_parenthesis } from "./html_span_text_wrap_parenthesis.mjs";
import { html_span_text_list_comma_parenthesis_params } from "./html_span_text_list_comma_parenthesis_params.mjs";
import { js_keyword_async } from "./js_keyword_async.mjs";
import { false_is } from "./false_is.mjs";
import { html_style_display_block } from "./html_style_display_block.mjs";
import { html_style_display_none } from "./html_style_display_none.mjs";
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
import { map_set } from "./map_set.mjs";
export function app_code_refresh_function_node(args) {
  let { parent, node } = args;
  parent = html_div(parent);
  html_style_display_inline(parent);
  object_property_set(args, "parent", parent);
  let nodes = app_code_refresh_function_node_nodes(args);
  map_set(nodes, node, {
    parent,
  });
  if (js_node_type_is(node, "Program")) {
    let body = object_property_get(node, "body");
    let imports_container = html_div(parent);
    html_style_display_none(imports_container);
    let imports_show;
    let imports;
    let imports_hide = html_button(
      imports_container,
      "Hide imports",
      function () {
        html_style_display_none(imports);
        html_style_display_none(imports_hide);
        html_style_display_block(imports_show);
      },
    );
    html_style_display_none(imports_hide);
    imports = html_div(imports_container);
    html_style_display_none(imports);
    imports_show = html_button(imports_container, "Show imports", function () {
      html_style_display_block(imports);
      html_style_display_none(imports_show);
      html_style_display_block(imports_hide);
    });
    let only_imports = true;
    each(body, async function (b) {
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
    app_code_refresh_function_node_identifier_add_fn(parent, local, args);
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
    app_code_refresh_function_node_identifier_add_fn(parent, id, args);
    html_span_text_list_comma_parenthesis_params(parent, node, args);
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
  } else if (js_node_type_is(node, "ReturnStatement")) {
    html_span_text_gray(parent,$s, js_keyword_return());
    let argument2 = object_property_get(node, "argument");
    app_code_refresh_function_node(
      object_copy_merge(args, {
        node: argument2,
      }),
    );
    html_span_text_gray(parent, js_code_statement_end());
  } else if (js_node_type_is(node, "LogicalExpression")) {
    let left2 = object_property_get(node, "left");
    let right2 = object_property_get(node, "right");
    let operator2 = object_property_get(node, "operator");
    app_code_refresh_function_node(
      object_copy_merge(args, {
        node: left2,
      }),
    );
    html_span_text_gray(parent, string_combine_multiple([" ", operator2, " "]));
    app_code_refresh_function_node(
      object_copy_merge(args, {
        node: right2,
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
    app_code_refresh_function_node(
      object_copy_merge(args, {
        node: id2,
      }),
    );
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
    app_code_refresh_function_node_identifier_add_fn(parent, callee, args);
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
    app_code_refresh_function_node_identifier_add(parent, node, args);
  } else if (js_node_type_is(node, "ObjectExpression")) {
    let properties = object_property_get(node, "properties");
    html_span_text_gray(parent, " { ");
    let section = app_code_section(args, true);
    html_span_text_list_comma(section, properties, function (b) {
      app_code_refresh_function_node(
        object_copy_merge(args, {
          parent: section,
          node: b,
        }),
      );
    });
    html_span_text_gray(parent, " }");
  } else if (js_node_type_is(node, "ArrayExpression")) {
    html_span_text_wrap_brackets(parent, function () {
      let elements = object_property_get(node, "elements");
      html_span_text_list_comma(parent, elements, lambda);
    });
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
  } else if (js_node_type_is(node, "AssignmentExpression")) {
    let right = object_property_get(node, "right");
    let left = object_property_get(node, "left");
    app_code_refresh_function_node(
      object_copy_merge(args, {
        node: left,
      }),
    );
    html_span_text_gray(parent, " = ");
    app_code_refresh_function_node(
      object_copy_merge(args, {
        node: right,
      }),
    );
  } else if (js_node_type_is(node, "ArrowFunctionExpression")) {
    let body4 = object_property_get(node, "body");
    let generator = object_property_get(node, "generator");
    let expression2 = object_property_get(node, "expression");
    let async = object_property_get(node, "async");
    assert(false_is, [generator]);
    if (async) {
      html_code_keyword_space(parent, js_keyword_async());
    }
    html_span_text_list_comma_parenthesis_params(parent, node, args);
    html_span_text_gray(parent, " => ");
    if (js_node_type_is(body4, "ObjectExpression")) {
      html_span_text_wrap_parenthesis(parent, lambda2);
    } else {
      lambda2();
    }
    function lambda2() {
      app_code_refresh_function_node(
        object_copy_merge(args, {
          node: body4,
        }),
      );
    }
  } else if (js_node_type_is(node, "Property")) {
    let value2 = object_property_get(node, "value");
    let key = object_property_get(node, "key");
    if (
      list_all([key, value2], function (n) {
        let v = js_node_type_is(n, "Identifier");
        return v;
      })
    ) {
      if (
        equal_by(key, value2, function (n) {
          let v2 = object_property_get(n, "name");
          return v2;
        })
      ) {
        app_code_refresh_function_node(
          object_copy_merge(args, {
            node: key,
          }),
        );
      } else {
        unknown();
      }
    } else {
      if (js_node_type_is(key, "Literal")) {
        unknown();
      } else {
        html_span_text_wrap_brackets(parent, function () {
          app_code_refresh_function_node(
            object_copy_merge(args, {
              node: key,
            }),
          );
        });
      }
      html_span_text_gray(parent, ": ");
      app_code_refresh_function_node(
        object_copy_merge(args, {
          node: value2,
        }),
      );
    }
  } else {
    unknown();
  }
  function unknown() {
    log({
      node,
    });
    html_span_text_font_color(parent, js_unparse(node), "deeppink");
  }
}
