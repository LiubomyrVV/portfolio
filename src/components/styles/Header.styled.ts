import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex; 
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
    h1 {
        font-size: 2rem;
        cursor: pointer;
    }

    ul {
        display: flex;
        gap: 34px;
        padding: 8px 4px;
        cursor: pointer;
        padding-left: 20px;
    }
    
    li {
        font-size: 1.4rem;
    }
    @media (max-width: 936px) {
        justify-content: start;
        
    }
`