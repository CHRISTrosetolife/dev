import { global_get } from "./global_get.mjs";
import { object_merge } from "./object_merge.mjs";import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { global_get } from "./global_get.mjs";
export function firebase_initialize() {
  let firebaseConfig = {
    apiKey: "AIzaSyBzIDxtdV44GoO3NH_a6KSw7iJ9Oa-trQU",
    authDomain: "letjesusbeexalted.firebaseapp.com",
    projectId: "letjesusbeexalted",
    storageBucket: "letjesusbeexalted.appspot.com",
    messagingSenderId: "1088010912651",
    appId: "1:1088010912651:web:99fe9a26960793a702658e",
  };
  let app = initializeApp(firebaseConfig);
  let auth = getAuth(app);
  object_merge(global_get(), {
    firebase: {
      app,
      auth,
    },
  });
}
