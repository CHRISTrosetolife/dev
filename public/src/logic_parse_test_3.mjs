import { equal_json } from "./equal_json.mjs";
import { assert_boolean } from "./assert_boolean.mjs";
import { logic_parse } from "./logic_parse.mjs";
export function logic_parse_test_3() {
  let result = logic_parse("a(b(c()))");
  assert_boolean(
    equal_json(result, {
      type: "call",
      callee: {
        type: "identifier",
        name: "a",
      },
      args: [
        {
          type: "call",
          callee: {
            type: "identifier",
            name: "b",
          },
          args: [
            {
              type: "call",
              callee: {
                type: "identifier",
                name: "c",
              },
              args: [],
            },
          ],
        },
      ],
    }),
  );
}
