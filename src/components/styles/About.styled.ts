import styled from "styled-components";

export const StyledAbout = styled.section`
    height: 100vh;
    .section-title {
        div {
            padding-bottom: 6px;
        }
        h2 {
            font-size: 3rem;
            text-align: center;
            font-weight: 600;
        }
    }
    section {
        display: flex;
        div {
            border-radius: 20px;
        }
        
    }
    .description-section {
        flex-direction: column;
        padding: 60px;
    }
    .carts {
        display: flex;
        justify-content: center;
        gap: 22px;
        margin-bottom: 54px;
        div { 
            display: flex;
            div {
                display: flex;
                flex-direction: column; 
                gap: 12px;
                border: 2px solid rgb(163, 163, 163);
                
                padding: 24px;
                min-width: 40%; 
                flex: 1;
                i {
                font-size: 26px;
                }
                p {
                    display: inline-block;
                    line-height: 1.2rem;
                }
            }
        }
    }
    .description-section {
        justify-content: center;
       
    }
    .description {
        line-height: 1.3rem;
        text-align: start;
        padding: 4px;
        
    }
   
    @media (max-width:  1196px) {
        height: auto;
        section {
            flex-direction: column;
        }
    }
    @media (max-width: 480px) {
        .carts {
            flex-direction: column;
        }
        .description-section {
            padding: 40px;
        }
    }
    @media (max-width: 390px) {

        .description-section {
            padding: 40px 20px;
        }
    }
`