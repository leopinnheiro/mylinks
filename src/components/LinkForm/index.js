import PropTypes from 'prop-types';
import { useState } from 'react';

import useErrors from '../../hooks/useErrors';

import { Form, ButtonContainer } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function LinkForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [category, setCategory] = useState('');

  const {
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();

  const isFormValid = name && description && link;

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }

  function handleLinkChange(event) {
    setLink(event.target.value);

    if (!event.target.value) {
      setError({ field: 'link', message: 'Link é obrigatório.' });
    } else {
      removeError('link');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup
        error={getErrorMessageByFieldName('name')}
      >
        <Input
          error={getErrorMessageByFieldName('name')}
          value={name}
          placeholder="Nome *"
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={description}
          placeholder="Descrição"
          onChange={(event) => setDescription(event.target.value)}
        />
      </FormGroup>

      <FormGroup
        error={getErrorMessageByFieldName('link')}
      >
        <Input
          error={getErrorMessageByFieldName('link')}
          value={link}
          placeholder="Link *"
          onChange={handleLinkChange}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="produtividade">Produtividade</option>
          <option value="liberar-acessos">Liberação de acessos</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>

      </ButtonContainer>
    </Form>
  );
}

LinkForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
