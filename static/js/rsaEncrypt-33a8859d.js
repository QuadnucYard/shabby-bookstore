import{J as t}from"./jsencrypt-a25df808.js";const o=`MIGJAoGBAIvP1HL2boDnd1EszTlYYM4Y7Ixfq7OvB5b61XvGQcCWfmos+nbdCIYa
R8pNZ2Kvk6Suph9V1mD8S5SUrynRRD7zpeZiGxkX3geFYSw0OiugApdNqKki6yQm
p18uHe/hN9UCl4uzngRtHz6cVY8j6NeUOrdnPOTmwS9eRxbEi/AFAgMBAAE=`;function p(r){const e=new t;e.setPublicKey(o);const n=e.encrypt(r);if(n===!1)throw new Error("Fail to encrypt");return n}export{p as e};
