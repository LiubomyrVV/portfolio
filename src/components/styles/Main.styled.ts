import styled from "styled-components";



export const StyledMain = styled.section`
display: flex;
align-items: center;

height: 100vh;

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
    width: 55%;
    p {
      
      margin: 0 auto;
      font-weight: 600;

    }
    h2 {
      font-size: 3rem;
      font-weight: 600;
      margin: 20px auto;

    }
    p:nth-child(3) {
      font-size: 1.75rem;
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
   
  @media (max-width:  1175px) {
    height: fit-content;
    padding: 120px 0;
  }

  @media (max-width: 936px) {
    padding: 80px 0;
    figure {
      display: flex;
      flex-direction: column;
      .image-container {
        margin: 40px auto;
        width: 60%;
        display: flex;
        justify-content: center;
      }
      figcaption {
        width: 80%
      }
    }
  }
  @media (max-width: 840px) {
    figure {
      .image-container {
        width: 80%;
      }
    }
  }
  @media (max-width: 600px) {
    padding: 40px 0;
    figure {
      .image-container {
        width: 90%;
      }
    }
  }
  @media (max-width: 400px) {
    figure {
      .image-container {
        width: 95%;
      }
    }
  }
  
    
`