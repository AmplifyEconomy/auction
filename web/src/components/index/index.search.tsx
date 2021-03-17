import styled from 'styled-components';
import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react"
import { AiFillCheckCircle } from 'react-icons/ai';

export const IndexSearchContainer = styled.div`
    width: 100%;
    max-width: 768px;
    margin: auto;
    padding: 15px 0;

    p.disclaimer {
        font-size: 18px;
        text-align: center;
        padding: 0 0 15px 0;
    }

    div.availability {
        background: #EDF2F7;
        margin: 45px 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 8px;

        div.wrap {
            display: flex;
            align-items: center;
        }

        div.text {
            padding: 20px 0;

            h3 {
                font-weight: 600;
                font-size: 24px;
                padding: 0 0 5px 0;

                span {
                    font-weight: 400;
                    padding: 0 10px;
                    font-size: 18px;
                }
            }

            p {
                font-size: 18px;
            }
        }
    }
`;

export function IndexSearch() {
    return(
        <IndexSearchContainer>
            <p className="disclaimer">
                Amplify Domains are not restrained to normal TLDs and you can claim any alphanumeric url with periods, dashes
                and underscores.
            </p>
            <InputGroup size="lg" h="64px">
                <Input
                    h="100%"
                    variant="filled"
                    placeholder="URL you want to claim"
                    fontSize="24px"
                />
                <InputRightElement h="100%" w="240px">
                    <Button h="calc(100% - 15px)" w="calc(100% - 20px)" colorScheme="purple" fontSize="24px">
                        Check                    
                    </Button>                
                </InputRightElement>
            </InputGroup>

            <div className="availability">
                <div className="wrap">
                    <AiFillCheckCircle size="64px" color="#58C44A" style={{ margin: '15px' }}/>
                    <div className="text">
                        <h3>
                            "amplify"
                            <span>is available</span>
                        </h3>
                        <p>Claim it for 10 AMP tokens</p>
                    </div>
                </div>
                <Button size="lg" colorScheme="green" h="80px" w="240px" fontSize="32px" m="0 15px">
                    Add to Cart                    
                </Button>
            </div>
        </IndexSearchContainer>
    )
}