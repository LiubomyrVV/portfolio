import styled from "styled-components";

export const StyledContact = styled.section`
    min-height: 392px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    div {
        width: 100%;
    }
    h2 {
        font-size: 3rem;
        text-align: center;
        font-weight: 600;
        margin-top: 16px;
    }
    p {
        padding: 4px 0;
    }
    article {
        display: flex;
        gap: 24px;

        border: 2px solid rgb(163, 163, 163);
        border-radius: 34px;
        width: fit-content;
        margin: 0 auto;
        padding: 28px 68px;

        div {
            display: flex;
            align-items: center;
            i {
                font-size: 22px;
                margin-right: 10px;
            }
            a {
                display: inline-block;
                text-decoration: none;
                padding: 4px 0;
            }
            
        }
    }
    
    @media (max-width: 1175px) { 
        min-height: auto;
        padding: 20px 0;

    }
    @media (max-width: 545px) { 
        article {
            padding: 24px;
        }
        
        margin: 54px 0;
    }
    @media (max-width: 472px) {
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
