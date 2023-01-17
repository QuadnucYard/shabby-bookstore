import JSEncrypt from "jsencrypt";

const publicKey = `MIGJAoGBAIvP1HL2boDnd1EszTlYYM4Y7Ixfq7OvB5b61XvGQcCWfmos+nbdCIYa
R8pNZ2Kvk6Suph9V1mD8S5SUrynRRD7zpeZiGxkX3geFYSw0OiugApdNqKki6yQm
p18uHe/hN9UCl4uzngRtHz6cVY8j6NeUOrdnPOTmwS9eRxbEi/AFAgMBAAE=`;

// 加密
export function encrypt(txt: string): string {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(publicKey);
  const result = encryptor.encrypt(txt);
  if (result === false) throw new Error("Fail to encrypt");
  return result;
}
