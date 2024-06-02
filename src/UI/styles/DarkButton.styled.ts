import styled from "styled-components";

export const StyledDarkButton = styled.button`
    font-weight: 600;
    transition: all 300ms ease;
    padding: 1rem;
    width: 8rem;
    border-radius: 2rem;
    background: rgb(53, 53, 53);
    color: white;

    cursor: pointer;
    border: 2px solid rgb(53, 53, 53);
    
    &:hover {
        background: rgb(33, 32, 32);
        border: 2px solid rgb(255, 255, 255);
    }
`