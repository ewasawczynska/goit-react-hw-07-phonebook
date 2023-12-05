import { Button } from 'components/Button';
import { StyledContact, StyledLoading } from './Contacts.styled';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectContacts, selectFilter, selectIsLoading } from '../../redux/selectors';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name?.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
   {isLoading ? (<StyledLoading>Loading...</StyledLoading>) : (<ul>
    {filteredContacts.map(contact => (
      <StyledContact key={contact.id}>
      {contact.name}: {contact.number}
      <Button
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
        colorchange="red"
        marginchange="10px"
      >
        Delete
      </Button>
    </StyledContact>
    ))}
    </ul>)}
    </>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  )
};


