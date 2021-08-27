/** @jsxImportSource @emotion/react */
import { containerCss, pageviewCss } from './styles';

const PricingComponent = () => {
    return (
        <form css={containerCss}>
            <div>
                <p css={pageviewCss}>100K PAGEVIEWS</p>
                <input type='range' min='1' max='5'></input>
                <div>
                    <p>$16.00</p>
                    <p>/ month</p>
                </div>
                <div>
                    <label>Monthly Billing</label>
                    <input type='checkbox'></input>
                    <label>Monthly Billing</label>
                    <p>-25%</p>
                </div>
            </div>
            <div>
                <p>Unlimited websites</p>
                <p>100% data ownership</p>
                <p>Email reports</p>
                <button>Start my trial</button>
            </div>
        </form>
    );
};

export default PricingComponent;
