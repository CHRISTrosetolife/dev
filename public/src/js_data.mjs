import { js_declaration_single } from "./js_declaration_single.mjs";
import { file_json_transform } from "./file_json_transform.mjs";
import { file_write_json } from "./file_write_json.mjs";
import { file_exists } from "./file_exists.mjs";
import { log } from "./log.mjs";
export async function js_data(ast) {
  let data_path = "data.json";
  if (!(await file_exists(data_path))) {
    await file_write_json(data_path, {});
  }
  await file_json_transform(
    () => {
      let declaration = js_declaration_single(ast);
      let {
        async,
        id: { name },
      } = declaration;
      log({
        name,
        async,
      });
    },
    data_path,
    [],
  );
}
