import { log } from "./log.mjs";
import { each_object } from "./each_object.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { js_code_braces_inside } from "./js_code_braces_inside.mjs";
import { fn_name } from "./fn_name.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { file_overwrite_gitignore } from "./file_overwrite_gitignore.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_code_import_generic } from "./js_code_import_generic.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_map } from "./list_map.mjs";
import { function_declaration } from "./function_declaration.mjs";
import { object_values } from "./object_values.mjs";
import { each } from "./each.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { function_imports } from "./function_imports.mjs";
import { object_properties } from "./object_properties.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_is } from "./list_is.mjs";
export async function function_dependencies(function_name) {
  let map = await function_imports(function_name);
  let externals = list_adder_unique((la) => {
    each(object_values(map), (mapped) => {
      let { sources } = mapped;
      each(sources, la);
    });
  });
  let e = {};
  let froms = {
    ["https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.2/firebase-storage.min.js"]:
      [
        "getStorage",
        "ref",
        "uploadBytes",
        "uploadString",
        "listAll",
        "getDownloadURL",
      ],
    ["https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"]: [
      "signInWithEmailAndPassword",
      "getAuth",
      "onAuthStateChanged",
    ],
    ["https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"]: ["getAuth"],
    ["https://cdn.jsdelivr.net/npm/@breezystack/lamejs@1.2.7/+esm"]:
      "breezystacklamejs",
  };
  each_object(froms, (from, identifiers) => {
    let imported;
    if (list_is(identifiers)) {
      imported = js_code_braces_inside(list_join_comma_space(identifiers));
    } else {
      imported = identifiers;
    }
    let code = js_code_import_generic(imported, from);
    object_property_set(e, from, code);
    log({
      code,
    });
  });
  let standard = ["chalk"];
  each(standard, (s) => {
    object_property_set(e, s, js_code_import_generic(s, s));
  });
  let e_code = list_map(externals, (n) => object_property_get(e, n));
  let dependency_names = object_properties(map);
  let ds = await list_map_async(dependency_names, function_declaration);
  let us = list_map(ds, js_unparse);
  let c = list_concat(e_code, us);
  let text = list_join_newline(c);
  await file_overwrite_gitignore(
    function_name,
    fn_name("function_dependencies"),
    text,
  );
}
