import React, { useState } from 'react';

const initState = {
    amount: 0,
    tip: 0,
    numPeople: 1,
    perTip: 0,
    perTotal: 0,
    percentTip: 0
}

const App = () => {
    const [isCustom, setIsCustom] = useState(false);
    const [formData, setFormData] = useState(initState);

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const amount = Number(e.target.value)
        if (amount >= 0) {
            const tip = getTip(amount)
            const { perTip, perTotal } = calcPerPerson(amount, tip, formData.numPeople)
            setFormData({...formData, amount, tip, perTip, perTotal})
        }
    }

    const getTip = (amount: number) => {
        if (!isCustom) {
            const multiplier = formData.percentTip / 100;
            return multiplier * amount
        }
        return formData.tip
    }

    const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const tip = Number(e.target.value);
        const { perTip, perTotal } = calcPerPerson(formData.amount, tip, formData.numPeople)
        setFormData({ ...formData, tip, perTip, perTotal });
    }

    const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numPeople = Number(e.target.value)
        if (numPeople >= 1) {
            const { perTip, perTotal } = calcPerPerson(formData.amount, formData.tip, numPeople)
            setFormData({ ...formData, numPeople, perTip, perTotal});
        }
    }

    const calcPercentTip = (percentTip: number) => {
        const multiplier = percentTip / 100;
        const tip = formData.amount * multiplier
        const { perTip, perTotal } = calcPerPerson(formData.amount, tip, formData.numPeople)
        setFormData({ ...formData, tip , percentTip, perTip, perTotal});
    };

    const calcPerPerson = (amount: number, tip: number, numPeople: number) => {
        const perTip = (tip/numPeople)
        const perTotal = (amount + tip)/numPeople
        return { perTip, perTotal }
    }

    const changeCustomInput = () => {
        if (isCustom) {
            calcPercentTip(formData.percentTip);
        }
        setIsCustom(!isCustom)
    }

    return (
        <>
            <h1>Splitter</h1>
            <div>
                <div>
                    <label htmlFor='amount'>Bill</label>
                    <input
                        name='amount'
                        type='number'
                        onChange={handleAmountChange}
                        value={formData.amount}
                    />
                    <label htmlFor='tip'>Select Tip</label>
                    <div>
                        <button onClick={() => calcPercentTip(5)}>5%</button>
                        <button onClick={() => calcPercentTip(10)}>10%</button>
                        <button onClick={() => calcPercentTip(15)}>15%</button>
                        <button onClick={() => calcPercentTip(25)}>25%</button>
                        <button onClick={() => calcPercentTip(50)}>50%</button>
                        <button onClick={changeCustomInput}>Custom</button>
                    </div>
                    {isCustom && <input name='tip' type='number' onChange={handleCustomTipChange} value={formData.tip} />}
                    <label htmlFor='numPeople'>Number of people</label>
                    <input name='numPeople' type='number' onChange={handlePeopleChange} value={formData.numPeople} />
                </div>
                <div>
                    <p>Tip amount</p>
                    <p>/ person</p>
                    <p>{formData.perTip}</p>
                    <p>Total</p>
                    <p>/ person</p>
                    <p>{formData.perTotal}</p>
                    <button onClick={() => setFormData(initState)}>RESET</button>
                </div>
            </div>
        </>
    );
};

export default App;
