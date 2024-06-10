import { Navigation } from "./Navigation"
import { Reveal } from "./Reveal"
import { StyledFooter } from "./styles/Footer.styled"

const slideLeft = { hidden:{x:25}, visible:{x:0}}
export const Footer = () => {
  return (
    <StyledFooter>
      <Reveal {...slideLeft} transition={{delay: 0.4}}><Navigation /></Reveal>
      <Reveal {...slideLeft} transition={{delay: 0.8}}><p>Copyright © 2024 Liubomyr Vernyk. All Rights Reserved.</p></Reveal>
    </StyledFooter>
  )
}
