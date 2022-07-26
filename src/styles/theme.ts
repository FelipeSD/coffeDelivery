import { createTheme } from "@mui/material/styles";

interface CustomColor {
    yellowDark?: string;
    yellow?: string;
    yellowLight?: string;
    purpleDark?: string;
    purple?: string;
    purpleLight?: string;
    baseTitle?: string;
    baseSubtitle?: string;
    baseText?: string;
    baseLabel?: string;
    baseHover?: string;
    baseButton?: string;
    baseInput?: string;
    baseCard?: string;
    bg?: string;
    white?: string;
}

interface CustomTypography {
    fontFamily: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
}

interface TypographyTypes {
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

declare module '@mui/material/styles' {
    interface Theme extends CustomColor { }
    interface ThemeOptions extends CustomColor { }
}

declare module '@mui/material/styles/createPalette' {
    interface Palette extends CustomColor { }
    interface PaletteOptions extends CustomColor { }
    interface PaletteColor extends CustomColor { }
}

declare module '@mui/material/styles/createTypography' {
    interface Typography extends TypographyTypes { }
    interface TypographyOptions extends TypographyTypes { }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        titleXL: true;
        titleL: true;
        titleM: true;
        titleS: true;
        titleXS: true;
        regularL: true;
        regularM: true;
        regularS: true;
        boldL: true;
        boldM: true;
    }

    interface TypographyPropsColorOverrides {
        yellowDark?: true;
        yellow?: true;
        yellowLight?: true;
        purpleDark?: true;
        purple?: true;
        purpleLight?: true;
        baseTitle?: true;
        baseSubtitle?: true;
        baseText?: true;
        baseLabel?: true;
        baseHover?: true;
        baseButton?: true;
        baseInput?: true;
        baseCard?: true;
        bg?: true;
        white?: true;
    }
}

const theme = createTheme({
    palette: {
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
    components: {
        MuiButton: {
            variants: [
                {
                    props: { size: "small" },
                    style: {
                        fontWeight: "400",
                        fontSize: "0.75rem",
                        lineHeight: "1.2rem",
                    }
                }
            ]
        }
    }
});

export default theme;