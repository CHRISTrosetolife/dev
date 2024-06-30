import { error } from "./error.mjs";
import { global_get } from "./global_get.mjs";
export function firebase_login() {
  let firebase = global_get();
  let auth = firebase;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      let user = userCredential.user;
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
    });
}
