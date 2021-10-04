import styled from 'styled-components';

export default styled.select`
  width: 100%;
  border: 2px solid #fff;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  height: 52px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  appearance: none; /*Desabilita a opção do navegador de dispositivos mobile que alteram o visual */

  transition: border-color 0.2s ease-in;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
