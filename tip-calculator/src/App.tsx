/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import logo from './logo.svg';
import iconDollar from './icon-dollar.svg';
import iconPerson from './icon-person.svg';
import Result from './Result';

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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 1rem;
    max-width: 920px;

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;

const labelCss = css`
    display: block;
    color: hsl(186, 14%, 43%);
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
`;

const inputCss = css`
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
    margin-bottom: 2rem;
    margin-top: 1rem;

    @media (max-width: 420px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3, 1fr);
    }
`;

const buttonCss = (isActive: boolean) => css`
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
`;

const customInputCss = (isCustom: boolean) => css`
    background-color: hsl(189, 41%, 97%);
    border: 0.2rem solid hsl(189, 41%, 97%);
    text-align: center;
    font-family: inherit;
    color: hsl(183, 100%, 15%);
    font-weight: 700;
    font-size: inherit;
    padding: 0;
    min-width: 0;
    width: 100%;

    ${isCustom &&
    `
        text-align: right;
    `}

    &:focus {
        outline: none !important;
        border: 0.2rem solid hsl(172, 67%, 45%);
        border-radius: 0.25rem;
    }
`;

const inputContainerCss = css`
    padding: 2rem;
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
                <div css={inputContainerCss}>
                    <label css={labelCss} htmlFor='amount'>
                        Bill
                    </label>
                    <img css={iconCss} src={iconDollar} alt='dollar' />
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
                            css={customInputCss(isCustom)}
                            type='number'
                            placeholder='Custom'
                            size={1}
                            value={customTipValue}
                            onChange={handleCustomTipValueChange}
                        />
                    </div>
                    <label css={labelCss} htmlFor='numPeople'>
                        Number of people
                    </label>
                    <img css={iconCss} src={iconPerson} alt='people' />
                    <input
                        css={inputCss}
                        name='numPeople'
                        type='number'
                        onChange={handlePeopleChange}
                        onFocus={(e) => e.target.select()}
                        value={formData.numPeople}
                    />
                </div>

                <Result
                    amount={Number(formData.amount)}
                    tip={Number(formData.tip) || 0}
                    numPeople={Number(formData.numPeople)}
                />
            </div>
        </>
    );
};

export default App;
