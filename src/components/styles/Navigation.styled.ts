import styled from "styled-components";

export const StyledNavigation = styled.nav`
    ul {
        display: flex;
        gap: 34px;
        padding: 8px 4px;
        cursor: pointer;
    }
    li {
        font-size: 1.4rem;
        &:hover {
            color: grey;
            text-decoration: underline;
            text-underline-offset: 1rem;
            text-decoration-color: rgb(181, 181, 181);
        }
    }
    
`