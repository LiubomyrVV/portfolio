import styled from "styled-components";

export const StyledAbout = styled.section`
    height: 596px;
    section {
        display: flex;
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
            flex-direction: column; 
            gap: 12px;
            border: 2px solid rgb(163, 163, 163);
            border-radius: 24px;
            padding: 24px;
            min-width: 40%;
            
            transition: all 300ms ease; 
            &:hover {
                border: 2px solid #fff;
                background: rgb(119 114 136);
                color: white;
                cursor: pointer;
                p {
                    color: white;
                    transition: all 300ms ease;
                }
            }
            p {
                line-height: 1.2rem;
            }
            i {
                font-size: 26px;
            }
        }
    }
    .description-section {
        justify-content: center;
       
    }
    .description {
        line-height: 1.3rem;
        text-align: start;
        
    }

`