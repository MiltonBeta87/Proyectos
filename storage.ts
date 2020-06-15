import os from  'os';
import fs from 'fs';
import { Password } from 'symbol-sdk';


const MOSAIC_NAME = 'unicalcoins';
const PATH_HOME = `${os.homedir()}\${MOSAIC_NAME}-wallets`;
const PATH_WALLET = `${PATH_HOME}\${MOSAIC_NAME}-wallet.enry`;
//Print in:  C:\Users

export type Secrets = {
    password : Password,
    privateKey : string,
    walletName : string,
} 

export function storeSecrets( secrets : Secrets) {
    if (!fs.existsSync(PATH_HOME)) {
        fs.mkdirSync(PATH_HOME);
    }


let fullPath = PATH_WALLET;
if (fs.existsSync(fullPath)) {
    const stamp = new Date().toISOString();
    fullPath = `${PATH_HOME}\${stamp}-${MOSAIC_NAME}-secrets.enry`;
    //Print in:  C:\Users
}

fs.writeFileSync(fullPath, JSON.stringify(secrets));

console.log ('secrets stored');

}
