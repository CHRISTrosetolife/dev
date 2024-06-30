import { global_get } from "./global_get.mjs";
export async function firebase_login() {
  let { firebase } = global_get();
  let { auth } = firebase;
  let { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
}
