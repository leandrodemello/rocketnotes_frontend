import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};//SE FOR NOVO BACK TRANPARENTE, SE NÃO, COR NORMAL.
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "nome"}; //SE FOR NOVO VAI TER BORDA DASHED=TRACEJADA, SE NÃO, NÃO TEM BORDA.

  margin-bottom: 8px;
  
  



`;