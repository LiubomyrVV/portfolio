import { StyledDarkButton } from "./styles/DarkButton.styled"

interface Props {
  title: string;
}

export const DarkButton: React.FC<Props> =  ({  title = 'test' }) => {
  return (
    <StyledDarkButton>
      {title}
    </StyledDarkButton>
  )
}
