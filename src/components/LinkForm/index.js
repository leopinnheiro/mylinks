import PropTypes from 'prop-types';
import { useState } from 'react';

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

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      name,
      description,
      link,
      category,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          value={name}
          placeholder="Nome"
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={description}
          placeholder="Descrição"
          onChange={(event) => setDescription(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={link}
          placeholder="Link"
          onChange={(event) => setLink(event.target.value)}
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
        <Button type="submit">
          {buttonLabel}
        </Button>

      </ButtonContainer>
    </Form>
  );
}

LinkForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
