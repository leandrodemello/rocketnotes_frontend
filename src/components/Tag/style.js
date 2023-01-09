import styled from "styled-components";

export const Container = styled.span`
    font-size: 12px; //TAMANHO DA FONTE DO TEXTO
    padding: 5px 14px; //ESPAÇAMENTO
    border-radius: 5px; //BORDA
    margin-right: 6px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
`;