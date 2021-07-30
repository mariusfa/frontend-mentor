/** @jsxImportSource @emotion/react */
import { PricingComponent } from './components/pricing-component';
import { headerCss } from './styles';
import AppThemeProvider from './theme/ThemeProvider';

const App = () => {
    return (
        <AppThemeProvider>
            <header>
                <h1 css={headerCss}>Simple, traffic-based pricing</h1>
                <p>Sign-up for our 30-day trial.</p>
                <p>No credit card required.</p>
            </header>
            <main>
                <PricingComponent />
            </main>
        </AppThemeProvider>
    );
};

export default App;
