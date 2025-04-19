import { storage_upload_string } from "./storage_upload_string.mjs";
export async function sandbox_5() {
  await storage_upload_string(
    '// ==UserScript==\n// ==UserScript==\n\n(function(){alert("jesus");});',
    "tampermonkey/jesus.js",
  );
}
