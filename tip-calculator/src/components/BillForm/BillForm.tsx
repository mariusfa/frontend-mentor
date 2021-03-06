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
    fakeInputSubmitCss,
} from './styles';
import iconDollar from './icon-dollar.svg';
import iconPerson from './icon-person.svg';
import { FormData } from './types';
import React, { useState, useCallback, useEffect } from 'react';

interface Props {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    resetRef: React.RefObject<HTMLButtonElement>;
}

const BillForm: React.FC<Props> = ({ formData, setFormData, resetRef }) => {
    const [errorMessage, setErrorMessage] = useState('');

    const tipButtonClick = (percentTip: number) => {
        setFormData({ ...formData, percentTip, customTip: '' });
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const updateTip = useCallback(() => {
        
        const { amount, percentTip, customTip } = formData;
        if (amount !== '' && percentTip) {
            const tip = (Number(amount) * percentTip) / 100;
            setFormData({ ...formData, tip: tip.toString()});
        } else if (amount !== '' && customTip !== '') {
            const tip = (Number(amount) * Number(customTip)) / 100;
            setFormData({ ...formData, tip: tip.toString()});
        } else {
            setFormData({ ...formData, tip: ''});
        }
        // eslint-disable-next-line
    }, [formData.amount, formData.percentTip, formData.customTip, setFormData]);

    const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            percentTip: null,
            [e.target.name]: e.target.value,
        });
    };

    const isPercentButtonActive = (percentTip: number) => {
        return formData.percentTip === percentTip;
    };

    const isCustomTip = formData.percentTip === null && formData.customTip !== '';

    const isError = errorMessage !== '';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        resetRef.current?.scrollIntoView();
    }

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
        <form onSubmit={handleSubmit}>
            <div css={inputContainerCss}>
                <label css={labelCss} htmlFor='amount'>
                    Bill
                </label>
                <img css={iconCss} src={iconDollar} alt='dollar' />
                <input
                    css={inputCss}
                    id='amount'
                    name='amount'
                    type='number'
                    onChange={handleFormChange}
                    value={formData.amount}
                    placeholder='0'
                />
                <label css={labelCss} htmlFor='customTip'>
                    Select Tip %
                </label>
                <div css={tipGridCss}>
                    <button
                        type="button"
                        css={buttonCss(isPercentButtonActive(5))}
                        onClick={() => tipButtonClick(5)}
                    >
                        5%
                    </button>
                    <button
                        type="button"
                        css={buttonCss(isPercentButtonActive(10))}
                        onClick={() => tipButtonClick(10)}
                    >
                        10%
                    </button>
                    <button
                        type="button"
                        css={buttonCss(isPercentButtonActive(15))}
                        onClick={() => tipButtonClick(15)}
                    >
                        15%
                    </button>
                    <button
                        type="button"
                        css={buttonCss(isPercentButtonActive(25))}
                        onClick={() => tipButtonClick(25)}
                    >
                        25%
                    </button>
                    <button
                        type="button"
                        css={buttonCss(isPercentButtonActive(50))}
                        onClick={() => tipButtonClick(50)}
                    >
                        50%
                    </button>
                    <input
                        css={customInputCss(isCustomTip)}
                        type='number'
                        id='customTip'
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
                    id='numPeople'
                    name='numPeople'
                    type='number'
                    onChange={handleFormChange}
                    value={formData.numPeople}
                    placeholder='0'
                />
                <input type="submit" css={fakeInputSubmitCss} />
            </div>
        </form>
    );
};

export default BillForm;
