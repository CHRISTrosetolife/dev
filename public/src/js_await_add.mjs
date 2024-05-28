import { list_before } from "./list_before.mjs";
import { log } from "./log.mjs";
import { each_reverse } from "./each_reverse.mjs";
import { assert } from "./assert.mjs";
import { each_object } from "./each_object.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { data_path } from "./data_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { counter } from "./counter.mjs";
import { equal_1 } from "./equal_1.mjs";
import { equal } from "./equal.mjs";
import { error } from "./error.mjs";
export async function js_await_add(ast) {
  let data = await file_read_json(data_path());
  js_visit_node(ast, "CallExpression", (v) => {
    let { node } = v;
    let { callee } = node;
    if (callee.type === "Identifier") {
      let { name } = callee;
      let { functions } = data;
      if (object_property_exists(functions, name)) {
        let f = object_property_get(functions, name);
        let { async } = f;
        if (async) {
          let { parent } = v;
          let { type: parent_type } = parent;
          if (parent_type !== "AwaitExpression") {
            let parsed = js_parse_expression("await 0");
            parsed.argument = node;
            let count = counter((c) => {
              each_object(parent, (key, value) => {
                if (value === node) {
                  object_property_set(parent, key, parsed);
                  c();
                }
              });
            });
            assert(equal_1, [count]);
            let { stack } = v;
            each_reverse(stack, (s) => {
              let { type } = s;
              if (equal(type, "BlockStatement")) {
                let after = list_before(stack, s);
                let { type: after_type } = after;
                log({
                  after,
                });
                error();
              }
            });
          }
        }
      }
    }
  });
}
