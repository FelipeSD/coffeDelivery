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

declare module '@mui/material/styles' {
    interface Theme {
        customColor: CustomColor;
    }

    interface ThemeOptions {
        customColor: CustomColor;
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
        fontFamily: "Roboto, sans-serif",
    },
});

export default theme;