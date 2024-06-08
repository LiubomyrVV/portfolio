import { StyledContact } from "./styles/Contact.styled"

export const Contact = () => {
   

  return (
   <StyledContact>
    <div className='section-title'>
        <p>Skontaktuj się</p>
        <h2>Kontakt</h2>
    </div>
    <article>
        <div>
            <i className="bi bi-envelope"></i>
            <a href='mailto:liubomyrpoland@gmail.com'>liubomyrpoland@gmail.com</a>
        </div>
        <div>
            <i className="bi bi-telegram"></i>
            <a>Telegram</a>
        </div>
    </article>
</StyledContact>
  )
}
