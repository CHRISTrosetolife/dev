export function function_dependencies_string_froms() {
  return {
    ["https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.2/firebase-storage.min.js"]:
      [
        "getStorage",
        "ref",
        "uploadBytes",
        "uploadString",
        "listAll",
        "getDownloadURL",
      ],
    ["https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"]: [
      "signInWithEmailAndPassword",
      "getAuth",
      "onAuthStateChanged",
    ],
    ["https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"]: ["getAuth"],
    ["https://jspm.dev/extendable-media-recorder"]: [
      "MediaRecorder",
      "register",
    ],
    ["https://jspm.dev/extendable-media-recorder-wav-encoder"]: ["connect"],
    ["https://cdn.jsdelivr.net/npm/@breezystack/lamejs@1.2.7/+esm"]:
      "breezystacklamejs",
  };
}
