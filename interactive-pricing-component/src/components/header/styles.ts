import { css } from '@emotion/react';
import patternCircles from './pattern-circles.svg';

export const headerCss = (theme: any) => css`
    text-align: center;
    background-image: url(${patternCircles});
    background-repeat: no-repeat;
    background-position: center;
    padding-top: 3rem;
`;

export const heading1Css = (theme: any) => css`
    color: ${theme.colors.neutral.darkDesaturatedBlue};
`;

export const textCss = (theme: any) => css`
    color: ${theme.colors.neutral.grayishBlue};
`;
