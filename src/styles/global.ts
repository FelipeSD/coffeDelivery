import { Theme } from "@mui/material";

export const styles = (theme: Theme) => ({
    body: {
        padding: 0,
        margin: 0,
        backgroundColor: theme.customColor.bg,
        fontFamily: 'Roboto, sans-serif',
    },
    '.card-default': {
        backgroundColor: theme.customColor.baseCard,
        // padding: '2.5rem',
        borderRadius: '0.375rem',
    },
    '.card-styled': {
        borderRadius: '0.375rem 2.75rem'
    }
})