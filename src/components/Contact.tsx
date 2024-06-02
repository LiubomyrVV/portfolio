import { useEffect, useRef } from "react";
import { StyledContact } from "./styles/Contact.styled"

export const Contact = () => {
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
        const rect = ref?.current?.getBoundingClientRect();
        console.log(rect?.y)
    }, [])

  return (
   <StyledContact ref={ref}>
    <div className='section-title'>
        <p>Skontaktuj się</p>
        <h2>Kontakt</h2>
    </div>
    <article>
        <div>
            <i className="bi bi-envelope"></i>
            <a href='mailto:lvwork05@gmail.com'>lvwork05@gmail.com</a>
        </div>
        <div>
            <i className="bi bi-linkedin"></i>
            <a>LinkedIn</a>
        </div>
    </article>
</StyledContact>
  )
}
