import clipboard from "clipboardy";
export async function clipboard_paste() {
  return await clipboard.read();
}
