"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function info() {
    const walletName = readline_sync_1.default.question('\nGive a wallet name: ');
    console.log(walletName);
}
console.log();
