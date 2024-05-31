import { StyledDarkButton } from "./styles/DarkButton.styled"

interface Props {
  onClick: () => void;
  title: string;
}

export const DarkButton: React.FC<Props> =  ({ onClick, title = 'test' }) => {
  return (
    <StyledDarkButton onClick={onClick}>
      {title}
    </StyledDarkButton>
  )
}
