import styled from "styled-components";

export const StyledProjects = styled.section`
min-height: 640px;
    .projects-list {
        display: flex;
        flex-wrap: wrap-reverse;
        gap: 12px;
    }
    article {
        flex: 1;
        
        padding: 24px;

        border: 2px solid rgb(163, 163, 163);
        border-radius: 24px;


        h3 {
            font-size: 24px;
            font-weight: 600;
            margin: 16px 0;
        }
        .actions {
            display: flex;
            justify-content: center; 
            gap: 12px; 
        }
        img {
            width: 90%;
            border-radius: 24px;
        }
    }
    
    @media (max-width: 500px) { 
        article {
            margin: 0 22px;
        }
    }
    @media (max-width: 370px) { 
        article {
            .actions {
                flex-direction: column;
                button {
                   min-width: 100%;
                }
            }
        }
    }
    
`