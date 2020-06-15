"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccount = void 0;
const symbol_sdk_1 = require("symbol-sdk");
const storage_1 = require("./storage");
const NETWORKTYPE = symbol_sdk_1.NetworkType.TEST_NET;
function createAccount() {
    const name = 'my_wallet';
    const psw = new symbol_sdk_1.Password('Milton87');
    const wallet = symbol_sdk_1.SimpleWallet.create(name, psw, NETWORKTYPE);
    const priv_key = wallet.encryptedPrivateKey;
    const secret = {
        password: psw,
        privateKey: priv_key,
        walletName: name,
    };
    storage_1.storeSecrets(secret);
}
exports.createAccount = createAccount;
