import { global_get } from "./global_get.mjs";
export function firebase_auth() {
  let { firebase } = global_get();
  let { auth } = firebase;
}
