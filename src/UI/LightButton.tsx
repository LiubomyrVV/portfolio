import { StyledLightButton } from "./styles/LightButton.styled"

export const LightButton = ({ title = 'test' }) => {
  return (
    <StyledLightButton>
      {title}
    </StyledLightButton>
  )
}
