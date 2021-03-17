export async function Check(state, action) {
    const dns = state.dns;
    const input = action.input;

    const domain = input.domain;

    if (dns[domain]) {
        throw new ContractError(`The domain ${domain} has already been claimed.`);
    }

    return { status: 'OK' };
}