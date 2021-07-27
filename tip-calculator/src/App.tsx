/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import logo from './logo.svg';
import Result from './components/Result/Result';
import { BillForm } from './components/BillForm';
import { FormData } from './components/BillForm';

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
        grid-template-rows: 1fr minmax(10px. auto);
    }
`;

const INIT_STATE = {
    amount: '',
    tip: '',
    numPeople: '',
    percentTip: null
};

const App = () => {
    const [formData, setFormData] = useState<FormData>(INIT_STATE);

    const reset = () => {
        setFormData(INIT_STATE);
    };

    return (
        <>
            <img css={logoCss} src={logo} alt='logo' />
            <div css={containerCss}>
                <BillForm
                    formData={formData}
                    setFormData={setFormData}
                />
                <Result
                    {...formData}
                    reset={reset}
                />
            </div>
        </>
    );
};

export default App;
