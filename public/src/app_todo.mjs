import { app_todo_main } from "./app_todo_main.mjs";
import { app_firebase } from "./app_firebase.mjs";
export async function app_todo() {
  await app_firebase(app_todo_main);
}
