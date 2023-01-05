import styled from 'styled-components';

export const Container = styled.div`//TODO O CONTEÚDO DA PÁGINA
    width: 100%; //OCUPE 100% DA TELA
    height: 100vh; //OCUPE 100% DA ALTURA DA TELA

    display: grid; //PARA FALAR A ONDE CADA PARTE VAI SE ENCAIXAR
    grid-template-rows: 105px auto; //VAI TER DUAS LINHAS, A PRIMEIRA E O HEADER COM 105PX E A SEGUNDA E TODO O RESTO DA PÁGINA
    grid-template-areas: "header" "content"; //SERVE PARA RENOMEAR AS AREAS
`;