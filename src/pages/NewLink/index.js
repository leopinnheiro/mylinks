import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

export default function NewLink() {
  return (
    <>
      <PageHeader title="Novo link" />
      <Input placeholder="Nome" />
      <Select>
        <option value="123">Produtividade</option>
        <option value="123">Acessos</option>
      </Select>
      <Button type="button">
        Salvar alterações
      </Button>
      <Button type="button" disabled>
        Salvar alterações
      </Button>
    </>
  );
}
