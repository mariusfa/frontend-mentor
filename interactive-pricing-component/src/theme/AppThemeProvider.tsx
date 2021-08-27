import { ThemeProvider } from '@emotion/react';

const theme = {
    colors: {
        primary: {
            softCyan: 'hsl(174, 77%, 80%)', // full slider bar
            strongCyan: 'hsl(174, 86%, 45%)', // slider background
            lightGrayishRed: 'hsl(14, 92%, 95%)', // discount background
            lightRed: 'hsl(15, 100%, 70%)', // discount text
            paleBlue: 'hsl(226, 100%, 87%)', // CTA text
        },
        neutral: {
            white: 'hsl(0, 0%, 100%)', // pricing component background
            veryPaleBlue: 'hsl(230, 100%, 99%)', // main background
            lightGrayishBlue: 'hsl(224, 65%, 95%)', // empty slider bar
            lightGrayishBlue2: 'hsl(223, 50%, 87%)', // toogle background
            grayishBlue: 'hsl(225, 20%, 60%)', // text
            darkDesaturatedBlue: 'hsl(227, 35%, 25%)', // text & CTA background
        },
    },
    fontWeights: {
        regular: '600',
        bold: '800',
    },
    fontSize: {
        paragraph: '0.9375rem',
    },
};

const AppThemeProvider: React.FC = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
