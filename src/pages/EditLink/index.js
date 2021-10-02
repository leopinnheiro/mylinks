import PageHeader from '../../components/PageHeader';
import LinkForm from '../../components/LinkForm';

export default function EditLink() {
  return (
    <>
      <PageHeader
        title="Editar Time Sheet"
      />

      <LinkForm
        buttonLabel="Salvar alterações"
      />
    </>
  );
}
