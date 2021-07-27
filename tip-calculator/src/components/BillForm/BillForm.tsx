/** @jsxImportSource @emotion/react */
import {
    inputContainerCss,
    labelCss,
    iconCss,
    inputCss,
    tipGridCss,
    customInputCss,
    buttonCss,
    errorContainerCss,
    errorTextCss,
} from './styles';
import iconDollar from './icon-dollar.svg';
import iconPerson from './icon-person.svg';
import { FormData } from './types';
import React, { useState, useCallback, useEffect } from 'react';

interface Props {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const BillForm: React.FC<Props> = ({ formData, setFormData }) => {
    const [errorMessage, setErrorMessage] = useState('');

    const tipButtonClick = (percentTip: number) => {
        setFormData({ ...formData, percentTip });
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const updateTip = useCallback(() => {
        const { amount, percentTip } = formData;
        if (amount !== '' && percentTip) {
            const tip = (Number(amount) * percentTip) / 100;
            setFormData({ ...formData, tip: tip.toString(), customTip: ''});
        } else {
            setFormData({ ...formData, tip: '' , customTip: ''});
        }
        // eslint-disable-next-line
    }, [formData.amount, formData.percentTip, setFormData]);

    const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            percentTip: null,
            tip: e.target.value,
            [e.target.name]: e.target.value,
        });
    };

    const isPercentButtonActive = (percentTip: number) => {
        return formData.percentTip === percentTip;
    };

    const isCustomTip = formData.percentTip === null && formData.customTip !== '';

    const isError = errorMessage !== '';

    useEffect(() => {
        updateTip();
    }, [formData.percentTip, formData.amount, updateTip]);

    useEffect(() => {
        if (formData.numPeople !== '') {
            const numPeopleNum = Number(formData.numPeople);
            if (numPeopleNum === 0) {
                setErrorMessage("Can't be zero");
                return
            }
        }
        setErrorMessage('');
    }, [formData.numPeople]);

    return (
        <>
            <div css={inputContainerCss}>
                <label css={labelCss} htmlFor='amount'>
                    Bill
                </label>
                <img css={iconCss} src={iconDollar} alt='dollar' />
                <input
                    css={inputCss}
                    name='amount'
                    type='number'
                    onChange={handleFormChange}
                    value={formData.amount}
                    placeholder='0'
                />
                <label css={labelCss} htmlFor='tip'>
                    Select Tip %
                </label>
                <div css={tipGridCss}>
                    <button
                        css={buttonCss(isPercentButtonActive(5))}
                        onClick={() => tipButtonClick(5)}
                    >
                        5%
                    </button>
                    <button
                        css={buttonCss(isPercentButtonActive(10))}
                        onClick={() => tipButtonClick(10)}
                    >
                        10%
                    </button>
                    <button
                        css={buttonCss(isPercentButtonActive(15))}
                        onClick={() => tipButtonClick(15)}
                    >
                        15%
                    </button>
                    <button
                        css={buttonCss(isPercentButtonActive(25))}
                        onClick={() => tipButtonClick(25)}
                    >
                        25%
                    </button>
                    <button
                        css={buttonCss(isPercentButtonActive(50))}
                        onClick={() => tipButtonClick(50)}
                    >
                        50%
                    </button>
                    <input
                        css={customInputCss(isCustomTip)}
                        type='number'
                        name='customTip'
                        placeholder='Custom'
                        value={formData.customTip}
                        onChange={handleCustomTipChange}
                    />
                </div>

                <div css={errorContainerCss}>
                    <label css={labelCss} htmlFor='numPeople'>
                        Number of people
                    </label>
                    {isError && <p css={errorTextCss}>{errorMessage}</p>}
                </div>

                <img css={iconCss} src={iconPerson} alt='people' />
                <input
                    css={inputCss}
                    name='numPeople'
                    type='number'
                    onChange={handleFormChange}
                    value={formData.numPeople}
                    placeholder='0'
                />
            </div>
        </>
    );
};

export default BillForm;
