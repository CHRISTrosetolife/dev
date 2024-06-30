import { global_get } from "./global_get.mjs";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
export async function firebase_login(email, password) {
  let { firebase } = global_get();
  let { auth } = firebase;
  let { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
}
