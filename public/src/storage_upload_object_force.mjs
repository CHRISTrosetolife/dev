import { storage_upload_string } from "./storage_upload_string.mjs";
import { json_to } from "./json_to.mjs";
export async function storage_upload_object_force(object, destination) {
  let json = json_to(object);
  await storage_upload_string(json, destination);
}
