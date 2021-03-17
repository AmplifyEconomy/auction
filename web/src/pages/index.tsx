import { AppContainer } from '../components/shared/shared.app';
import { IndexTitle } from '../components/index/index.title';
import { IndexSearch } from '../components/index/index.search';
import { IndexCheckout } from '../components/index/index.checkout';

export default function Index() {
    return(
        <AppContainer>
            <IndexTitle/>
            <IndexSearch/>
            <IndexCheckout/>
        </AppContainer>
    )
}