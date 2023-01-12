import styled from 'styled-components';

export const Container = styled.div`
  width: 100%; //LARGURA
  height: 100vh; //ALTURA

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas : "header" "content";
`;