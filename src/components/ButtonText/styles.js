import styled from "styled-components";

export const Container =styled.button`
  background: none;
  color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100}; //ISACTIVE DA UMA CONDIÇÃO PARA MUDAR DE COR, CASO O ESTEJA ATIVO

  border: none;
  font-size: 16px;
`;