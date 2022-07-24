import { createTheme } from "@mui/material/styles";

interface CustomColor {
    yellowDark: string;
    yellow: string;
    yellowLight: string;

    purpleDark: string;
    purple: string;
    purpleLight: string;

    baseTitle: string;
    baseSubtitle: string;
    baseText: string;
    baseLabel: string;
    baseHover: string;
    baseButton: string;
    baseInput: string;
    baseCard: string;
    bg: string;
    white: string;
}

interface CustomTypography {
    fontFamily: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
}

declare module '@mui/material/styles' {
    interface Theme {
        customColor: CustomColor;
    }
    interface ThemeOptions {
        customColor: CustomColor;
    }
}

declare module '@mui/material/styles/createTypography' {
    interface Typography {
        titleXL: CustomTypography;
        titleL: CustomTypography;
        titleM: CustomTypography;
        titleS: CustomTypography;
        titleXS: CustomTypography;
        regularL: CustomTypography;
        regularM: CustomTypography;
        regularS: CustomTypography;
        boldL: CustomTypography;
        boldM: CustomTypography;
    }
    
    interface TypographyOptions {
        titleXL: CustomTypography;
        titleL: CustomTypography;
        titleM: CustomTypography;
        titleS: CustomTypography;
        titleXS: CustomTypography;
        regularL: CustomTypography;
        regularM: CustomTypography;
        regularS: CustomTypography;
        boldL: CustomTypography;
        boldM: CustomTypography;
    }
}

const theme = createTheme({
    customColor: {
        yellowDark: "#C47F17",
        yellow: "#DBAC2C",
        yellowLight: "#F1E9C9",

        purpleDark: "#4B2995",
        purple: "#8047F8",
        purpleLight: "#EBE5F9",

        baseTitle: "#272221",
        baseSubtitle: "#403937",
        baseText: "#574F4D",
        baseLabel: "#8D8686",
        baseHover: "#D7D5D5",
        baseButton: "#E6E5E5",
        baseInput: "#EDEDED",
        baseCard: "#F3F2F2",
        bg: "#FAFAFA",
        white: "#FFFFFF",
    },
    typography: {
        titleXL: {
            fontSize: "3rem",
            fontWeight: "800",
            fontFamily: "'Baloo 2', cursive",
            lineHeight: "4rem",
        },
        titleL: {
            fontSize: "2rem",
            fontWeight: "800",
            fontFamily: "'Baloo 2', cursive",
            lineHeight: "2.6rem",
        },
        titleM: {
            fontSize: "1.5rem",
            fontWeight: "800",
            fontFamily: "'Baloo 2', cursive",
            lineHeight: "1.95rem",
        },
        titleS: {
            fontSize: "1.25rem",
            fontWeight: "700",
            fontFamily: "'Baloo 2', cursive",
            lineHeight: "1.625rem",
        },
        titleXS: {
            fontSize: "1.125rem",
            fontWeight: "700",
            fontFamily: "'Baloo 2', cursive",
            lineHeight: "1.46rem",
        },
        regularL: {
            fontSize: "1.25rem",
            fontWeight: "400",
            fontFamily: "'Roboto', sans-serif",
            lineHeight: "1.625rem",
        },
        regularM: {
            fontSize: "1rem",
            fontWeight: "400",
            fontFamily: "'Roboto', sans-serif",
            lineHeight: "1.3rem",
        },
        regularS: {
            fontSize: "0.875rem",
            fontWeight: "400",
            fontFamily: "'Roboto', sans-serif",
            lineHeight: "1.1rem",
        },
        boldL: {
            fontSize: "1.25rem",
            fontWeight: "700",
            fontFamily: "'Roboto', sans-serif",
            lineHeight: "1.625rem",
        },
        boldM: {
            fontSize: "1rem",
            fontWeight: "700",
            fontFamily: "'Roboto', sans-serif",
            lineHeight: "1.3rem",
        }
    },
});

export default theme;