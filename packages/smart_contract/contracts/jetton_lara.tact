import "@stdlib/deploy";
import "./messages";
import "./jetton_lara_wallet";

struct Metadata {
    symbol: String;
    totalSupply: Int;
}

contract JettonLara with Deployable {

    symbol: String;
    totalSupply: Int as coins;

    init() {
        self.symbol = "Lara";
        self.totalSupply = ton("1000000000");
        self.mint(self.totalSupply, sender());
    }

    fun mint(amount: Int, to: Address) {
        let init: StateInit = initOf JettonLaraWallet(myAddress(), to);
        send(SendParameters {
            to: contractAddress(init),
            body: InternalAdd{amount: amount, origin: myAddress()}.toCell(),
            value: ton("0.03"),
            mode: SendIgnoreErrors,
            code: init.code,
            data: init.data
        });
    }

    get fun walletAddress(owner: Address): Address {
        let init: StateInit = initOf JettonLaraWallet(myAddress(), owner);
        return contractAddress(init);
    }

   get fun metadata(): Metadata {
       return Metadata{symbol: self.symbol, totalSupply: self.totalSupply};
   }
}
