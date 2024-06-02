import styled from "styled-components";

export const StyledFooter = styled.footer`
    margin-bottom: 24px;
    nav {
        display: flex;
        justify-content: center;
        margin-bottom: 44px;
    }
    p {
        display: inline-block;
        line-height: 1.8;
        margin: 0 8px; 
    }
    @media (max-width: 600px) {
        nav > ul {
            
            flex-wrap: wrap;
            padding-left: 52px;
            li {
                width: 40%;
                text-align: start;
            }
        }
    }
    @media (max-width: 459px) {
        nav > ul {
            padding-left: 28px;
            gap: 12px;
            li {
                padding: 8px 0;
            }
        }
    }
    @media (max-width: 341px) {
        nav > ul {
            gap: 6px;
            padding: 0px 5%;
            
            li {
                padding: 12px 0;
            }
            
        }
    }

`