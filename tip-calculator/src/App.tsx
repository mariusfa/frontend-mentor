/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import logo from './logo.svg';
import iconDollar from './icon-dollar.svg';

const initState = {
    amount: 0,
    tip: 0,
    numPeople: 1,
    perTip: 0,
    perTotal: 0,
    percentTip: 0,
};

const logoCss = css`
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    margin-bottom: 4rem;
    display: block;
`;

const containerCss = css`
    background-color: hsl(0, 0%, 100%);
    border-radius: 1.25rem;
    margin: 0 auto;
    padding: 2rem;
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 1rem;
`;

const labelCss = css`
    display: block;
    color: hsl(186, 14%, 43%);
`;

const inputCss = css`
    width: 100%;
    text-align: right;
    height: 2rem;
    border: 0.2rem solid hsl(189, 41%, 97%);
    background-color: hsl(189, 41%, 97%);
    color: hsl(186, 14%, 43%);
    font-weight: 700;
    font-size: inherit;
    border-radius: 0.25rem;
    padding: 1rem;
    box-sizing: border-box;

    &:focus {
        outline: none !important;
        border: 0.2rem solid hsl(185, 41%, 84%);
    }
`;

const iconCss = css`
    position: absolute;
    padding: 0.9rem;
`;

const tipGridCss = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
`;

const buttonCss = (isActive: boolean) => css`
    padding: 0.75rem;
    border-radius: 0.25rem;
    background-color: hsl(186, 14%, 43%);
    color: hsl(0, 0%, 100%);
    border: 0.2rem solid hsl(186, 14%, 43%);
    font-size: inherit;
    font-family: inherit;
    ${isActive &&
    `
        background-color: hsl(185, 41%, 84%);
        color: hsl(186, 14%, 43%);
        border: 0.2rem solid hsl(185, 41%, 84%);
    `}
`;

const customInputCss = (isCustom: boolean) => css`
    background-color: hsl(189, 41%, 97%);
    border: 0.2rem solid hsl(189, 41%, 97%);
    text-align: center;
    font-family: inherit;
    color: hsl(186, 14%, 43%);
    font-weight: 700;
    font-size: inherit;
    min-width: 0;
    padding: 0 1rem;

    ${isCustom &&
    `
        text-align: right;
    `}

    &:focus {
        outline: none !important;
        border: 0.2rem solid hsl(185, 41%, 84%);
        border-radius: 0.25rem;
    }
`;

const App = () => {
    const [isCustom, setIsCustom] = useState(false);
    const [formData, setFormData] = useState(initState);
    const [customTipValue, setCustomTipValue] = useState('');

    const handleCustomTipValueChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (e.target.value.length > 0) {
            setCustomTipValue(e.target.value);
            setIsCustom(true);
        } else {
            setIsCustom(false);
        }
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const amount = Number(e.target.value);
        if (amount >= 0) {
            const tip = getTip(amount);
            const { perTip, perTotal } = calcPerPerson(
                amount,
                tip,
                formData.numPeople
            );
            setFormData({ ...formData, amount, tip, perTip, perTotal });
        }
    };

    const getTip = (amount: number) => {
        if (!isCustom) {
            const multiplier = formData.percentTip / 100;
            return multiplier * amount;
        }
        return formData.tip;
    };

    const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numPeople = Number(e.target.value);
        if (numPeople >= 1) {
            const { perTip, perTotal } = calcPerPerson(
                formData.amount,
                formData.tip,
                numPeople
            );
            setFormData({ ...formData, numPeople, perTip, perTotal });
        }
    };

    const calcPercentTip = (percentTip: number) => {
        const multiplier = percentTip / 100;
        const tip = formData.amount * multiplier;
        const { perTip, perTotal } = calcPerPerson(
            formData.amount,
            tip,
            formData.numPeople
        );
        setIsCustom(false);
        setCustomTipValue('');
        setFormData({ ...formData, tip, percentTip, perTip, perTotal });
    };

    const calcPerPerson = (amount: number, tip: number, numPeople: number) => {
        const perTip = tip / numPeople;
        const perTotal = (amount + tip) / numPeople;
        return { perTip, perTotal };
    };

    const isActive = (percent: number) => {
        return formData.percentTip === percent && !isCustom;
    };

    return (
        <>
            <img css={logoCss} src={logo} alt='logo' />
            <div css={containerCss}>
                <div>
                    <label css={labelCss} htmlFor='amount'>
                        Bill
                    </label>
                    <img css={iconCss} src={iconDollar} alt='logo' />
                    <input
                        css={inputCss}
                        name='amount'
                        type='number'
                        onChange={handleAmountChange}
                        value={formData.amount}
                        onFocus={(e) => e.target.select()}
                    />
                    <label css={labelCss} htmlFor='tip'>
                        Select Tip %
                    </label>
                    <div css={tipGridCss}>
                        <button
                            css={buttonCss(isActive(5))}
                            onClick={() => calcPercentTip(5)}
                        >
                            5%
                        </button>
                        <button
                            css={buttonCss(isActive(10))}
                            onClick={() => calcPercentTip(10)}
                        >
                            10%
                        </button>
                        <button
                            css={buttonCss(isActive(15))}
                            onClick={() => calcPercentTip(15)}
                        >
                            15%
                        </button>
                        <button
                            css={buttonCss(isActive(25))}
                            onClick={() => calcPercentTip(25)}
                        >
                            25%
                        </button>
                        <button
                            css={buttonCss(isActive(50))}
                            onClick={() => calcPercentTip(50)}
                        >
                            50%
                        </button>
                        <input
                            type='number'
                            css={customInputCss(isCustom)}
                            placeholder='Custom'
                            value={customTipValue}
                            onChange={handleCustomTipValueChange}
                        />
                    </div>
                    <label css={labelCss} htmlFor='numPeople'>
                        Number of people
                    </label>
                    <input
                        css={inputCss}
                        name='numPeople'
                        type='number'
                        onChange={handlePeopleChange}
                        onFocus={(e) => e.target.select()}
                        value={formData.numPeople}
                    />
                </div>
                <div>
                    <p>Tip amount</p>
                    <p>/ person</p>
                    <p>{formData.perTip}</p>
                    <p>Total</p>
                    <p>/ person</p>
                    <p>{formData.perTotal}</p>
                    <button onClick={() => setFormData(initState)}>
                        RESET
                    </button>
                </div>
            </div>
        </>
    );
};

export default App;
