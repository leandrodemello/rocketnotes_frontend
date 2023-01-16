import styled from 'styled-components';

export const Container = styled.div`
  width: 100%; //LARGURA
  height: 100vh; //ALTURA

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas : "header" "content";

  > main {
    grid-area: content; // A AREA "content" = CABEÇALHO
    overflow-y: auto; // FICA FIXA, A ROLAGEM NÃO AFETA ELA.
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

  }
`;

export const Form = styled.form`
  max-width: 550px; //LARGURA MÁXIMA
  margin: 38px auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

    a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }


`;