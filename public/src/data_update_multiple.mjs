import { data_transform } from "./data_transform.mjs";
import { data_update_multiple_transform } from "./data_update_multiple_transform.mjs";
export async function data_update_multiple(fps) {
  await data_transform(async function lambda(data) {
    await data_update_multiple_transform(fps, data);
  });
}
