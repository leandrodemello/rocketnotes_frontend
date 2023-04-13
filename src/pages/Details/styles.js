import styled from 'styled-components';

export const Container = styled.div`//TODO O CONTEÚDO DA PÁGINA
    width: 100%; //OCUPE 100% DA TELA
    height: 100vh; //OCUPE 100% DA ALTURA DA TELA

    display: grid; //PARA FALAR A ONDE CADA PARTE VAI SE ENCAIXAR
    grid-template-rows: 105px auto; //VAI TER DUAS LINHAS, A PRIMEIRA E O HEADER COM 105PX E A SEGUNDA E TODO O RESTO DA PÁGINA
    grid-template-areas: "header" "content"; //SERVE PARA RENOMEAR AS AREAS

    > main { //ACESSAR A MAIN
        grid-area: content;
        overflow-y: scroll; //QUANDO O CONTEUDO NÃO COUBER NA VERTICAL APARECE UMA BARRA PARA SCROLAR "GIRAR A ROLAGEM"
        padding: 64px 0; //64 EM CIMA E ABAIXO E 0 DOS LADOS
    }
`;

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 12px;

        a {
            color: ${({  theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Content = styled.div`
    max-width: 550px; //MAXIMA LARGURA DE 500 PX
    margin: 0 auto;   //LEVA TODO CONTEUDO PARA O MEIO DA TELA

    display: flex;
    flex-direction: column;

    > button:first-child {//PRIMEIRO FILHO QUE É UM BOTÃO
        align-self: end; //ALINHAMENTO NELE MESMO, NO FIM
    }

    > h1 {
        font-size: 36px;
        font-weight: 500;
        padding-top: 60px;
    }

    > p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify; //PREENCHE OS ESPAÇOS DO TEXTO POR IGUAL
    }
`;
