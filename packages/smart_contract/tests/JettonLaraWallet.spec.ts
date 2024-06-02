import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { JettonLaraWallet } from '../wrappers/JettonLaraWallet';
import '@ton/test-utils';

describe('JettonMycWallet', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let jettonLaraWallet: SandboxContract<JettonLaraWallet>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        jettonLaraWallet = blockchain.openContract(await JettonLaraWallet.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await jettonLaraWallet.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: jettonLaraWallet.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and jettonLaraWallet are ready to use
    });
});
