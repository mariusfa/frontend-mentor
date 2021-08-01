/** @jsxImportSource @emotion/react */
import { Header } from './components/header';
import { PricingComponent } from './components/pricing-component';
import AppThemeProvider from './theme/AppThemeProvider';

const App = () => {
    return (
        <AppThemeProvider>
            <Header />
            <main>
                <PricingComponent />
            </main>
        </AppThemeProvider>
    );
};

export default App;
