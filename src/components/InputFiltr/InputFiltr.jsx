import { InputFiltrStyled, LabelFiltrStyled } from './InputFiltr.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/selectors';

export const InputFiltr = () => {

  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  return (
    <LabelFiltrStyled>
      Filtr contacts by name:
      <InputFiltrStyled
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        placeholder="enter name"
      />
    </LabelFiltrStyled>
  );
}
