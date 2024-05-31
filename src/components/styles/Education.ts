import styled from "styled-components";
interface Props {
    top?: number; 
    opacity?: string;
}
export const StyledEducation = styled.section<Props>`
    position: absolute; 
    width: 100vw;
    height: 100vh;
    top: ${({top}) => top ? `${top}px` : 0};
    left: 0;
    display: grid;
    place-items: center;
    color: #fff;
    opacity: ${({opacity}) => opacity};
    background-color: rgb(119 114 136 / 80%);
    transition: all 500ms ease; 
    div {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 22px;
        width: 60%;
        height: 60%;

        border: 4px solid #fff;
        border-radius: 64px;
        padding: 30px;
        transition: all 500ms ease-in-out; 
        background: rgb(119 114 136);
        i {
            font-size: 74px;
        }
        h2 {
            font-size: 34px;
        }
        p { 
            color: #fff;
        }
        .bi-x {
            position: absolute;
            top: 16px;
            right: 26px;
            color: #fff;
            font-size: 62px;
            cursor: pointer;
        }
    }
`