import { firebase_auth } from "./firebase_auth.mjs";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
export async function firebase_login(email, password) {
  let auth = firebase_auth();
  let { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
}
