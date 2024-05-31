import styled from "styled-components";

export const StyledExperience = styled.section`
    height: 704px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
            &:hover {
                border: 2px solid #fff;
                background: rgb(119 114 136);
                color: white;
                cursor: pointer;
                
                h3 {
                    transition: all 300ms ease;
                    color: white;
                }
                p {
                    color: white;
                    transition: all 300ms ease;
                }
            }
             
        article {
            min-width: 40%;
            display: flex;
            flex: 1;
            text-align: start;
            h4 {
                font-weight: 600;
            }
            i {
                font-size: 24px;
                margin-right: 12px; 
            }
        }
    }
`