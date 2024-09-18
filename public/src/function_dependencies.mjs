import { function_declaration } from "./function_declaration.mjs";
import { object_values } from "./object_values.mjs";
import { each } from "./each.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { function_imports } from "./function_imports.mjs";
import { object_properties } from "./object_properties.mjs";
import { assert_message } from "./assert_message.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function function_dependencies(function_name) {
  let map = await function_imports(function_name);
  let externals = list_adder_unique((la) => {
    each(object_values(map), (mapped) => {
      let { sources } = mapped;
      each(sources, la);
    });
  });
  assert_message(
    list_empty_is,
    [externals],
    () =>
      "if this is non-empty, then refactor output to include external libraries",
  );
  let dependency_names = object_properties(map);
  await function_declaration(function_name);
  return {
    dependency_names,
    externals,
  };
}
