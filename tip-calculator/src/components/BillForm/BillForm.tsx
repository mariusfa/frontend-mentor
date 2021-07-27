/** @jsxImportSource @emotion/react */
import {
    inputContainerCss,
    labelCss,
    iconCss,
    inputCss,
    tipGridCss,
    customInputCss,
    buttonCss,
} from './styles';
import iconDollar from './icon-dollar.svg';
import iconPerson from './icon-person.svg';
import { FormData } from './types';
import React, { useCallback, useEffect } from 'react';

interface Props {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const BillForm: React.FC<Props> = ({
    formData,
    setFormData
}) => {

    const tipButtonClick = (percentTip: number) => {
        setFormData({ ...formData, percentTip});
    }

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const updateTip = useCallback(() => {
        const { amount, percentTip } = formData;
        if (amount !== '' && percentTip) {
            const tip = Number(amount) * percentTip / 100;
            setFormData({ ...formData, tip: tip.toString()})
        } else {
            setFormData({...formData, tip: ''});
        }
        // eslint-disable-next-line
    }, [formData.amount, formData.percentTip, setFormData])

    const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, percentTip: null,[e.target.name]: e.target.value });
    }

    const isPercentButtonActive = (percentTip: number) => {
        return formData.percentTip === percentTip;
    }

    const isCustomTip = () => {
        return formData.percentTip !== null && formData.tip !== '';
    }

    const getCustomTipValue = () => {
        return formData.percentTip ? '' : formData.tip;
    }

    useEffect(() => {
        updateTip()
    }, [formData.percentTip, formData.amount, updateTip]);

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
                    <button css={buttonCss(isPercentButtonActive(5))} onClick={() => tipButtonClick(5)}>5%</button>
                    <button css={buttonCss(isPercentButtonActive(10))} onClick={() => tipButtonClick(10)}>10%</button>
                    <button css={buttonCss(isPercentButtonActive(15))} onClick={() => tipButtonClick(15)}>15%</button>
                    <button css={buttonCss(isPercentButtonActive(25))} onClick={() => tipButtonClick(25)}>25%</button>
                    <button css={buttonCss(isPercentButtonActive(50))} onClick={() => tipButtonClick(50)}>50%</button>
                    <input
                        css={customInputCss(isCustomTip())}
                        type='number'
                        name='tip'
                        placeholder='Custom'
                        value={getCustomTipValue()}
                        onChange={handleCustomTipChange}
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
                    onChange={handleFormChange}
                    value={formData.numPeople}
                    placeholder='0'
                />
            </div>
        </>
    );
};

export default BillForm;
