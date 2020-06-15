"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeSecrets = void 0;
const os_1 = __importDefault(require("os"));
const fs_1 = __importDefault(require("fs"));
const MOSAIC_NAME = 'unicalcoins';
const PATH_HOME = `${os_1.default.homedir()}\${MOSAIC_NAME}-wallets`;
const PATH_WALLET = `${PATH_HOME}\${MOSAIC_NAME}-wallet.enry`;
function storeSecrets(secrets) {
    if (!fs_1.default.existsSync(PATH_HOME)) {
        fs_1.default.mkdirSync(PATH_HOME);
    }
    let fullPath = PATH_WALLET;
    if (fs_1.default.existsSync(fullPath)) {
        const stamp = new Date().toISOString();
        fullPath = `${PATH_HOME}\${stamp}-${MOSAIC_NAME}-secrets.enry`;
        //Print in:  C:\Users
    }
    fs_1.default.writeFileSync(fullPath, JSON.stringify(secrets));
    console.log('secrets stored');
}
exports.storeSecrets = storeSecrets;
