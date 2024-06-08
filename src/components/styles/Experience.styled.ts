import styled from "styled-components";

export const StyledExperience = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;

    .carts {
       
        display: flex;
        gap: 24px;
       
       
        margin: 0 5%;
        h3 {
            width: 100%;
            margin: 24px 0;
            font-weight: 600;
            font-size: 26px;
            color: rgb(85, 85, 85);
        }
        div:not(article div) {
            display: flex;
            flex-wrap: wrap;
            
            gap: 28px;
            padding: 24px 44px 44px;
            border: 2px solid rgb(163, 163, 163);
            border-radius: 24px;
            transition: all 300ms ease; 
          
                
            article {
                min-width: 40%;
                display: flex;
                flex: 1;
                text-align: start;
                h4 {
                    font-weight: 600;
                    margin-bottom: 6px;
                }
                i {
                    display: flex;
                    align-items: start;
                    font-size: 24px;
                    margin-right: 12px; 
                }
            }
        }
    }

    @media (max-width: 1175px) { 
        height: auto;
        padding: 60px 0;
        .carts {
            div:not(article div) {
                flex-direction: column;
                flex: 1;
            }
        }
    }
    @media (max-width:  800px) { 
        .carts {
           flex-direction: column;
        }  
        h2 {
            word-break: break-all;
        }
    }
`