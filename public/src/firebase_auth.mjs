import { firebase_initialize } from "./firebase_initialize.mjs";
import { global_function } from "./global_function.mjs";
export function firebase_auth() {
  let g = global_function(firebase_initialize);
  let { auth } = g;
  return auth;
}
