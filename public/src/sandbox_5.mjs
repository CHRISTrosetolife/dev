import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { storage_upload_string } from "./storage_upload_string.mjs";
export async function sandbox_5() {
  await storage_upload_string(
    string_combine_multiple([
      "// ==UserScript==\n// @name         New Userscript\n// @namespace    http://tampermonkey.net/\n// @version      2025-04-19\n// @description  try to take over the world!\n// @author       You\n// @match        http://*/*\n// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==\n// @grant        none\n// ==/UserScript==\n\n(function() {\n    'use strict';\n    alert('here')\n    // Your code here...\n})();",
    ]),
    "tampermonkey/jesus.js",
  );
}
