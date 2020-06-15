
import { NetworkType,  SimpleWallet, Password } from 'symbol-sdk';

import {storeSecrets, Secrets  } from './storage';

const NETWORKTYPE= NetworkType.TEST_NET;

export function createAccount() {
    const name ='my_wallet';
    const psw = new Password('Milton87');
    const wallet = SimpleWallet.create(name, psw, NETWORKTYPE);
    const priv_key = wallet.encryptedPrivateKey;



    const secret: Secrets = {
        password: psw,
        privateKey: priv_key,
        walletName: name,
      
    };

    storeSecrets(secret);
    }





