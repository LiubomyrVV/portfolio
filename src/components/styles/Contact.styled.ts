import styled from "styled-components";

export const StyledContact = styled.section`
    min-height: 392px;
    article {
        display: flex;
        gap: 24px;

        border: 2px solid rgb(163, 163, 163);
        border-radius: 34px;
        width: fit-content;
        margin: 0 auto;
        padding: 28px 68px;

        div {
            i {
                font-size: 22px;
                margin-right: 10px;
            }
        }
    }
    
    @media (max-width: 1157px) {
        min-height: auto;
        margin: 92px 0;
    }
    @media (max-width: 545px) { 
        article {
            padding: 24px;
        }
        
        margin: 54px 0;
    }
    @media (max-width: 421px) {
        article {
            width: 70%;
            flex-direction: column; 
            div {
                display: flex;
                justify-content: start;
            }
        }
    }
    
`
