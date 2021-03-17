import styled from 'styled-components';
import { Button } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiNetworkChart } from 'react-icons/bi';

export const IndexCheckoutContainer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;

    div.container {
        position: relative;
        width: 100%;
        max-width: 768px;
        margin: auto;
        background: #EDF2F7;
        padding: 15px;
        border-radius: 15px 15px 0 0;

        a.tab {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: 30px;
            top: -30px;
            width: 180px;
            height: 40px;
            background: #EDF2F7;
            border-radius: 15px 15px 0 0;
            cursor: pointer;
            p {
                padding: 0 5px;
                font-size: 18px;
            }
        }

        div.item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px;

            div.metadata {
                display: flex;
                align-items: center;

                h4 {
                    font-size: 24px;
                    font-weight: bold;
                    padding: 0 5px;
                }

                p {
                    font-size: 18px;
                    padding: 0 15px;
                }
            }
        }

        div.total {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 15px 0;

            h4 {
                font-size: 24px;
                padding: 15px;
            }
        }
    }
`;

export function IndexCheckout() {
    return(
        <IndexCheckoutContainer>
            <div className="container">
                <a className="tab">
                    <AiOutlineShoppingCart size="24px"/>
                    <p>
                        Checkout
                    </p>
                </a>

                <div className="item">
                    <div className="metadata">
                        <BiNetworkChart size="24px"/>
                        <h4>amplify</h4>
                    </div>
                    <div className="metadata">
                        <p>10 AMP</p>
                        <Button colorScheme="red" size="sm">
                            Remove
                        </Button>
                    </div>
                </div>
                <div className="item">
                    <div className="metadata">
                        <BiNetworkChart size="24px"/>
                        <h4>arweave</h4>
                    </div>
                    <div className="metadata">
                        <p>10 AMP</p>
                        <Button colorScheme="red" size="sm">
                            Remove
                        </Button>
                    </div>
                </div>
                <div className="total">
                    <h4>Total: 20 AMP</h4>
                    <Button size="lg" colorScheme="green" h="60px" w="240px" fontSize="24px" m="0 15px">
                        Checkout                  
                    </Button>
                </div>
            </div>
        </IndexCheckoutContainer>
    )
}