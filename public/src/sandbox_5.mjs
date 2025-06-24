import { log } from "./log.mjs";
import * as vscode from "vscode";
export async function sandbox_5() {
  let openFiles = vscode.window.visibleTextEditors.map(function (editor) {
    let v = editor.document.fileName;
    return v;
  });
  console.log(openFiles);
}
