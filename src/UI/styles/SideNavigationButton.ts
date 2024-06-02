import styled from "styled-components";

export const StyledSideNavigationButton = styled.div`
    position: fixed;
    bottom: 43%;
    right: 30px;
    div {
        display: flex;
        flex-direction: column;
        gap: 24px;
        i {
            font-size: 36px;
            cursor: pointer;
            transition: all 100ms ease; 
            &:active {
                color: rgb(163, 163, 163);
            }
        }
    }
`