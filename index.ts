import readlineSync from 'readline-sync';

function info() {
    const walletName = readlineSync.question('\nGive a wallet name: ');
    console.log(walletName);
}

console.log();
