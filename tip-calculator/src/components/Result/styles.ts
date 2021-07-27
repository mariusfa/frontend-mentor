import { css } from '@emotion/react';

export const resultContainerCss = css`
    background-color: hsl(183, 100%, 15%);
    border-radius: 1.25rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 750px) {
        padding: 2rem;
    }
`;

export const perPersonContainerCss = css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
`;

export const resetCss = (isActive: boolean) => css`
    color: hsl(183, 100%, 15%);
    font-family: inherit;
    font-size: inherit;
    font-weight: 700;
    width: 100%;
    padding: 0.75rem;
    border-radius:0.5rem;
    border: 0.2rem; solid hsl(172, 67%, 45%);
    background-color: hsl(186, 14%, 43%);

    @media (max-width: 750px) {
        font-size: 0.75em;
        margin-top: 1rem;

    }

    ${isActive &&
    `
        background-color: hsl(172, 67%, 45%);
    `}
`;

export const numberCss = css`
    text-align: right;
    color: hsl(172, 67%, 45%);
    font-weight: 700;
    font-size: 2.5em;
    padding: 0;
    margin: 0;

    @media (max-width: 750px) {
        font-size: 1.25em;
    }
`;

export const headerTextCss = css`
    font-family: inherit;
    font-size: inherit;
    color: white;
    padding-top: 0.8rem;
    margin: 0;

    @media (max-width: 750px) {
        padding-top: 0.2rem;
        font-size: 0.75em;
    }
`;

export const subTextCss = css`
    font-family: inherit;
    font-size: 0.8em;
    color: hsl(184, 14%, 56%);
    padding: 0;
    margin: 0;

    @media (max-width: 750px) {
        font-size: 0.5em;
    }
`;
