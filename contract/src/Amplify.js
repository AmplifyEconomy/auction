export const AmplifyContract = `k1yecVT91Duw47s83H6gxIE0P6dopEOJA56lNeGTjNo`;

export const Price = 10; // 10 AMP tokens per DNS

export async function GetBalance(state, action) {
    const ContractState = await SmartWeave.contracts.readContractState(AmplifyContract);
    const balance = ContractState.balances[action.caller];

    return balance;
}