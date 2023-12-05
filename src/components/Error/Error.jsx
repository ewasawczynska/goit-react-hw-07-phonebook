import { StyledContainer } from "components/Container/Container.styled";
import { StyledError } from "./Error.styled";
import { useSelector } from 'react-redux';
import { selectError } from "../../redux/selectors";

export const Error = () => {
  const error = useSelector(selectError);
  return (
    <StyledContainer>
      <StyledError>Houston, we have a problem: {error}</StyledError>
    </StyledContainer>
  );
};

