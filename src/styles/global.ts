import { Theme } from "@mui/material";

export const styles = (theme: Theme) => ({
    body: {
        padding: 0,
        margin: 0,
        backgroundColor: theme.customColor.bg,
        fontFamily: 'Roboto, sans-serif',
    },
})