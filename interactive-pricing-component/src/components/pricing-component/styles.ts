import { css } from '@emotion/react';

export const containerCss = (theme: any) => css`
    background-color: ${theme.colors.neutral.white};
    margin-inline: 1rem;
    border-radius: 1rem;
    text-align: center
`;

export const pageviewCss = (theme: any) => css`
    color: ${theme.colors.neutral.grayishBlue};
    font-weight: ${theme.fontWeights.bold};
`;