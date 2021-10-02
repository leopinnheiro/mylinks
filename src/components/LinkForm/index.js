import PropTypes from 'prop-types';

import { Form, ButtonContainer } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function LinkForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Descrição" />
      </FormGroup>

      <FormGroup
        error="Link inválido né jão."
      >
        <Input placeholder="Link" error />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="">Nenhum</option>
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
