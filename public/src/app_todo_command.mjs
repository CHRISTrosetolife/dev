import { storage_files } from "./storage_files.mjs";
export async function app_todo_command() {
  await storage_files();
}
