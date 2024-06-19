import { global_get } from "./global_get.mjs";
export function log(message) {
  let g = global_get();
  console.log(message);
}
