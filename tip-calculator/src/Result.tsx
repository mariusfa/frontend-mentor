/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const resultContainerCss = css`
    background-color: hsl(183, 100%, 15%);
    border-radius: 1.25rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media (max-width: 750px) {
        padding: 2rem;
    }
`;

const perPersonContainerCss = css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
`;

const resetCss = css`
    color: hsl(183, 100%, 15%);
    font-family: inherit;
    font-size: inherit;
    font-weight: 700;
    width: 100%;
    padding: 0.5rem;
    border-radius:0.5rem;
    border: 0.2rem; solid hsl(172, 67%, 45%);
    background-color: hsl(172, 67%, 45%);

    @media (max-width: 750px) {
        font-size: 0.5em;
        padding: 0.25rem;
        margin-top: 1rem;

    }
`;

const numberCss = css`
    text-align: right;
    color: hsl(172, 67%, 45%);
    font-weight: 700;
    font-size: 2.5em;
    padding: 0;
    margin: 0;

    @media (max-width: 750px) {
        font-size: 1em;
    }
`;

const headerTextCss = css`
    font-family: inherit;
    font-size: inherit;
    color: white;
    padding-top: 0.8rem;
    margin: 0;

    @media (max-width: 750px) {
        padding-top: 0.3rem;
        font-size: 0.5em;
    }
`;

const subTextCss = css`
    font-family: inherit;
    font-size: 0.8em;
    color: hsl(184, 14%, 56%);
    padding: 0;
    margin: 0;

    @media (max-width: 750px) {
        font-size: 0.4em;
    }
`;

interface Props {
    amount: number;
    tip: number;
    numPeople: number;
}

const calcPerTotal = (
    amount: number,
    tip: number,
    numPeople: number
): number => {
    if (!amount || !numPeople) {
        return 0;
    }

    return (amount + tip) / numPeople;
};

const calcPerTip = (amount: number, tip: number, numPeople: number): number => {
    if (!amount || !numPeople) {
        return 0;
    }

    return tip / numPeople;
};

const Result: React.FC<Props> = ({ amount, tip, numPeople }) => {
    const perTotal = calcPerTotal(amount, tip, numPeople).toFixed(2);
    const perTip = calcPerTip(amount, tip, numPeople).toFixed(2);

    console.log(amount);

    return (
        <div css={resultContainerCss}>
            <div css={perPersonContainerCss}>
                <div>
                    <p css={headerTextCss}>Tip Amount</p>
                    <p css={subTextCss}>/ person</p>
                </div>
                <p css={numberCss}>${perTotal}</p>
                <div>
                    <p css={headerTextCss}>Total</p>
                    <p css={subTextCss}>/ person</p>
                </div>
                <p css={numberCss}>${perTip}</p>
            </div>
            <button css={resetCss}>RESET</button>
        </div>
    );
};

export default Result;
