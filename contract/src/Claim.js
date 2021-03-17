export async function Claim(state, action) {
    const dns = state.dns;
    const input = action.input;
    const caller = action.caller;

    const domain = input.domain;

    if (dns[domain]) {
        throw new ContractError(`The domain ${domain} has already been claimed.`);
    }

    dns[domain] = caller;

    return { dns };
}