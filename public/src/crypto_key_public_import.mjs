export async function crypto_key_public_import(pem) {
  let pemHeader = "-----BEGIN PUBLIC KEY-----";
  let pemFooter = "-----END PUBLIC KEY-----";
  let pemContents = pem
    .replace(pemHeader, "")
    .replace(pemFooter, "")
    .replace(/\s/g, "");
  let binaryDerString = atob(pemContents);
  let binaryDer = new Uint8Array(binaryDerString.length);
  for (let i = 0; i < binaryDerString.length; i++) {
    binaryDer[i] = binaryDerString.charCodeAt(i);
  }
  let v = await window.crypto.subtle.importKey(
    "spki",
    binaryDer.buffer,
    {
      name: "RSA-OAEP",
      hash: "SHA-256",
    },
    true,
    ["encrypt"],
  );
  return v;
}
