import { Theme } from "@mui/material";

export const styles = (theme: Theme) => ({
    body: {
        padding: 0,
        margin: 0,
        backgroundColor: theme.palette.bg,
        fontFamily: 'Roboto, sans-serif',
    },
    '.card-default': {
        backgroundColor: theme.palette.baseCard,
        borderRadius: '0.375rem',
    },
    '.card-styled': {
        borderRadius: '0.375rem 2.75rem'
    }
})