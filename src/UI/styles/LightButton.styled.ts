import styled from "styled-components";

export const StyledLightButton = styled.button`
    font-weight: 600;
    transition: all 300ms ease;
    padding: 1rem;
    width: 8rem;
    border-radius: 2rem;
    cursor: pointer;
    border: 2px solid rgb(53, 53, 53);
    &:hover {
        color: #fff;
        background: rgb(53, 53, 53);
        border: 0.1rem solid rgb(255, 255, 255);
    }
`