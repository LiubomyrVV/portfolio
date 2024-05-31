import { StyledContact } from "./styles/Contact.styled"

export const Contact = () => {
  return (
    <StyledContact>
        <div className='section-title'>
          <p>Get in Touch</p>
          <h2>Contact Me</h2>
        </div>
        <article>
            <div>
                <i className="bi bi-envelope"></i>
                <a href='mailto:lvwork05@gmail.com'>lvwork05@gmail.com</a>
            </div>
            <div>
                <i className="bi bi-linkedin"></i>
                <a>linkedin</a>
            </div>
        </article>
    </StyledContact>
  )
}
