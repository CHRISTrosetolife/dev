import {file_js_parse} from "./file_js_parse.mjs";
import {visit} from "./visit.mjs";
import {object_values} from "./object_values.mjs";
import {js_node_is} from "./js_node_is.mjs";
import {list_is} from "./list_is.mjs";
import {null_is} from "./null_is.mjs";
import {equal} from "./equal.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {file_js_unparse} from "./file_js_unparse.mjs";
export async function file_js_identifier_rename(file_path, identifier_from, identifier_to) {
  let ast = await file_js_parse(file_path);
  visit(ast, nn => {
    if (js_node_is(nn)) {
      return object_values(nn);
    }
    if (list_is(nn)) {
      return nn;
    }
    return [];
  }, nn => !null_is(nn) && nn.type === 'Identifier', v => {
    let {node} = v;
    let name = object_property_get(node, 'name');
    if (equal(name, identifier_from)) {
      object_property_set(node, 'name', identifier_to);
    }
  });
  await file_js_unparse(file_path, ast);
}
