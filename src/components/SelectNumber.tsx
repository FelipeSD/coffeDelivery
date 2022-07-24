import { Box, IconButton, Stack, useTheme } from "@mui/material";
import { Minus, Plus } from "phosphor-react";

export default function SelectNumber() {
    const theme = useTheme();

    return (
        <Stack
            direction="row"
            // spacing={1}
            alignItems="center"
            justifyContent="center"
            sx={{
                backgroundColor: theme.customColor.baseButton,
                padding: "0.35rem",
                borderRadius: "0.5rem",
            }}
        >
            <IconButton size="small">
                <Minus color={theme.customColor.purple} />
            </IconButton>

            <Box component="span" sx={{ ...theme.typography.regularM }}>
                1
            </Box>

            <IconButton size="small">
                <Plus color={theme.customColor.purple} />
            </IconButton>
        </Stack>
    )
}