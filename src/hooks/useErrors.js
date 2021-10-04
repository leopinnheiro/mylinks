import { useState } from 'react';

// Hook para realizar o controle de erros e mensagens de erros na aplicação
export default function useErrors() {
  const [errors, setErrors] = useState([]);

  // Adiciona um erro a lista caso ele não existir
  function setError({ field, message }) {
    // Verificando se o erro ja existe na lista de objetos
    const errorAlreadyExists = errors.find((error) => error.field === field);
    if (errorAlreadyExists) {
      return;
    }

    // Adicionando erro na lista
    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }

  // Remove um erro da lista
  function removeError(fieldName) {
    setErrors((prevState) => prevState.filter(
      (error) => error.field !== fieldName,
    ));
  }

  // Retorna a mensagem de erro, filtrando pelo field
  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  // Retornando objeto com as informações que devem ser externalizadas
  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
}
