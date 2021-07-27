import { css } from '@emotion/react';

export const containerCss = css`
    background-color: hsl(0, 0%, 100%);
    border-radius: 1.25rem;
    margin: 0 auto;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 1rem;
    max-width: 920px;

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr minmax(10px. auto);
    }
`;

export const labelCss = css`
    display: block;
    color: hsl(186, 14%, 43%);
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 500;

    @media (max-width: 750px) {
        font-size: 0.75em;
    }
`;

export const inputCss = css`
    width: 100%;
    text-align: right;
    height: 2rem;
    border: 0.2rem solid hsl(189, 41%, 97%);
    background-color: hsl(189, 41%, 97%);
    color: hsl(183, 100%, 15%);
    font-weight: 700;
    font-family: inherit;
    font-size: inherit;
    border-radius: 0.25rem;
    padding: 1rem;
    box-sizing: border-box;
    margin-bottom: 2rem;

    &:focus {
        outline: none !important;
        border: 0.2rem solid hsl(172, 67%, 45%);
    }

    @media (max-width: 750px) {
        font-size: 0.75em;
    }
`;

export const iconCss = css`
    position: absolute;
    padding: 0.75rem;
`;

export const tipGridCss = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
    margin-bottom: 2rem;
    margin-top: 1rem;

    @media (max-width: 420px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3, 1fr);
    }
`;

export const buttonCss = (isActive: boolean) => css`
    padding: 0.75rem;
    border-radius: 0.25rem;
    background-color: hsl(183, 100%, 15%);
    color: hsl(0, 0%, 100%);
    border: 0.2rem solid hsl(183, 100%, 15%);
    font-size: inherit;
    font-family: inherit;
    font-weight: 700;
    ${isActive &&
    `
        background-color: hsl(172, 67%, 45%);
        color: hsl(183, 100%, 15%);
        border: 0.2rem solid hsl(172, 67%, 45%);
    `}

    @media (max-width: 750px) {
        font-size: 0.75em;
    }
`;

export const customInputCss = (isCustom: boolean) => css`
    background-color: hsl(189, 41%, 97%);
    min-width: 0;
    font-size: inherit;
    text-align: center;
    border: 0.2rem solid hsl(189, 41%, 97%);
    border-radius: 0.25rem;
    font-weight: 700;
    color: hsl(183, 100%, 15%);
    

    &:focus {
        outline: none;
        border: 0.2rem solid hsl(172, 67%, 45%);
    }

    @media (max-width: 750px) {
        font-size: 0.75em;
    }

    ${isCustom &&
    `
        text-align: right;
        padding-inline: 1rem;
    `}
    
`;

export const inputContainerCss = css`
    padding: 2rem;
`;

export const errorContainerCss = css`
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
`;

export const errorTextCss = css`
    color: #FF9494;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    font-size: inherit;

    @media (max-width: 750px) {
        font-size: 0.75em;
    }
`;

export const fakeInputSubmitCss = css`
    visibility: hidden; 
    position: absolute;
`;
