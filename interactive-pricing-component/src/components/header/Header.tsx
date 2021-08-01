/** @jsxImportSource @emotion/react */
import { headerCss, heading1Css, textCss } from "./styles";

const Header = () => {
    return (
        <header css={headerCss}>
            <h1 css={heading1Css}>Simple, traffic-based pricing</h1>
            <p css={textCss}>Sign-up for our 30-day trial.</p>
            <p css={textCss}>No credit card required.</p>
        </header>
    );
};

export default Header;
