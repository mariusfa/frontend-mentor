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
    resetRef: React.RefObject<HTMLButtonElement>;
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

const Result: React.FC<Props> = ({ amount, tip, numPeople, percentTip, customTip, reset, resetRef }) => {
    const amountNum = Number(amount);
    const tipNum = Number(tip);
    const numPeopleNum = Number(numPeople);

    const perTotal = calcPerTotal(amountNum, tipNum, numPeopleNum).toFixed(2);
    const perTip = calcPerTip(tipNum, numPeopleNum).toFixed(2);

    const isResetActive = amount !== '' || tip !== '' || numPeople !== '' || percentTip !== null || customTip !== '';

    return (
        <div css={resultContainerCss}>
            <div css={perPersonContainerCss}>
                <div>
                    <p css={headerTextCss}>Tip Amount</p>
                    <p css={subTextCss}>/ person</p>
                </div>
                <p css={numberCss}>${perTip}</p>
                <div>
                    <p css={headerTextCss}>Total</p>
                    <p css={subTextCss}>/ person</p>
                </div>
                <p css={numberCss}>${perTotal}</p>
            </div>
            <button css={resetCss(isResetActive)} ref={resetRef} onClick={reset}>RESET</button>
        </div>
    );
};

export default Result;
