import { log } from "./log.mjs";
import { terminal_data_path } from "./terminal_data_path.mjs";
import { file_json_transform_exists } from "./file_json_transform_exists.mjs";
export async function terminal_data_transform(lambda) {
  return await file_json_transform_exists(
    terminal_data_path(),
    (d) => {
      lambda(d);
      log({
        lambda,
        d,
      });
    },
    [],
  );
}
