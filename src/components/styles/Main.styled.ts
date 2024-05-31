import styled from "styled-components";

export const StyledMain = styled.section`
  height: 704px;
  figure {
    display: flex;
    height: 100%;
  }

  .image-container {
    display: grid; 
    place-items: center;
    width: 45%;
    img {
        width: 70%;
        border-radius: 50%; 
    }
  }

 

  figcaption {
    align-self: center;
    text-align: center;
    width: 55%;
    p {
        font-weight: 600;
    }
    p:nth-child(3) {
        font-size: 1.75rem;
    }
    h2 {
        font-size: 3rem;
        font-weight: 600;
        margin: 20px 0;
    }
    .actions {
        display: flex;
        justify-content: center;
        gap: 22px;
        margin: 24px 0;
    }
    .socials {
        display: flex;
        justify-content: center;
        gap: 22px;
        
        i {
            font-size: 42px;
        }
    }
    
  }
  
    
`