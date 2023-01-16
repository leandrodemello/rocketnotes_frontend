import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Container = styled.header`
    grid-area: header; //CABEÇALHO FIXO PARA NÃO SOFRER ROLAGEM

    height: 105px; //ALTURA DO CABEÇALHO
    width: 100%; //LARGURA DE 100% DA TELA DISPONÍVEL

    border-bottom-width: 1px; //BORDA EM BAIXO
    border-bottom-style: solid; //LINHA DA BORDA SÓLIDA
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700}; //COR DE TEMA GLOBAL

    display: flex; //DISPLAY HORIZONTAL
    justify-content: space-between; //ESPALHADO NAS ESTREMIDADES

    padding: 0 80px;

`;

export const Profile = styled(Link)`
    display: flex; //DISPLAY NA HORIZONTAL
    align-items: center;

    > img { //IMAGEM DE PERFIL
        width: 56px; //LARGURA
        height: 56px; //ALTURA
        border-radius: 50%; //FAZ ELA FICAR REDONDA
    }

    > div { //TEXTO AO LADO DA FOTO
        display: flex;
        flex-direction: column; //O TEXO FICA UM ABAIXO DO OUTRO
        margin-left: 16px; //DESGRUDAR O TEXTO DA FOTO, PARA O LADO ESQUERDO
        line-height: 24px; // PARA QUE UMA LINHA FIQUE AFASTADA DA OUTRA

        span {
            font-size: 14px; //FONTE DO TEXTO EM SPAN
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 18px; //FONTE DO TEXTO EM STRONG
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Logout = styled.button`
    border: none; //SEM BORDAS
    background: none; //SEM COR

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 36px;

    }
`;