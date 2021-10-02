import PageHeader from '../../components/PageHeader';
import LinkForm from '../../components/LinkForm';

export default function NewLink() {
  return (
    <>
      <PageHeader
        title="Novo link"
      />

      <LinkForm
        buttonLabel="Cadastrar"
      />
    </>
  );
}
