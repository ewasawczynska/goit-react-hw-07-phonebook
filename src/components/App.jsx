import {
  ContactForm,
  Contacts,
  Container,
  Error,
  InputFiltr,
  Section,
} from 'components';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { selectError } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
    {error ? (
      <Error />
    ) : (
      <Container>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <InputFiltr />
        <Contacts />
      </Section>
    </Container>
    )}
  </>
  );
}


