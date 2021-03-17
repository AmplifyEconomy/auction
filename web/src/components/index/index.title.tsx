import styled from 'styled-components';

export const IndexTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    padding: 15px 0;

    img {
        filter: blur(1px);
        height: 164px;
        margin: 15px 0;
    }

    h1 {
        font-size: 32px;
    }
`;

export function IndexTitle() {
    return(
        <IndexTitleContainer>
            <img src="/amplify.png"/>
            <h1>Amplify DNS Auction Sale</h1>
        </IndexTitleContainer>
    )
}