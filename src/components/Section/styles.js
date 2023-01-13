import styled from "styled-components";

export const Container = styled.section`
  margin: 28px 0;

    > h2 {
      border-bottom-width: 1px;  //BORDA DE 1PX EM BAIXO
      border-bottom-style: solid; //BORDA SOLIDA
      border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

      padding-bottom: 16px; //
      margin-bottom: 20px;

      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 20px; // COR DO TEXTO
      font-weight: 400; //TAMANHO DA FONTE
     
    }
`;