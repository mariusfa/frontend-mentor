/** @jsxImportSource @emotion/react */
import React from 'react';
import { FormData } from '../BillForm';
import {
    resultContainerCss,
    perPersonContainerCss,
    headerTextCss,
    subTextCss,
    numberCss,
    resetCss,
} from './styles';

interface Props extends FormData {
    reset: () => void;
}

const calcPerTotal = (
    amount: number,
    tip: number,
    numPeople: number
): number => {
    if (numPeople === 0) {
        return 0;
    }
    return (amount + tip) / numPeople;
};

const calcPerTip = (tip: number, numPeople: number): number => {
    if (numPeople === 0) {
        return 0;
    }
    return tip / numPeople;
};

const Result: React.FC<Props> = ({ amount, tip, numPeople, percentTip, reset }) => {
    const amountNum = Number(amount);
    const tipNum = Number(tip);
    const numPeopleNum = Number(numPeople);

    const perTotal = calcPerTotal(amountNum, tipNum, numPeopleNum).toFixed(2);
    const perTip = calcPerTip(tipNum, numPeopleNum).toFixed(2);

    const isResetActive = amount !== '' || tip !== '' || numPeople !== '' || percentTip !== null;

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
            <button css={resetCss(isResetActive)} onClick={reset}>RESET</button>
        </div>
    );
};

export default Result;
