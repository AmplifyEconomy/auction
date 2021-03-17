import { State } from './State';
import { Check } from './Check';
import { Claim } from './Claim';

export async function handle(state, action) {
    switch (action.input.function) {
        case 'state':
            return await State(state, action);
        case 'check':
            return await Check(state, action);
        case 'claim':
            return await Claim(state, action);
        default:
            throw new ContractError(`Invalid function: "${action.input.function}"`);
    }
}