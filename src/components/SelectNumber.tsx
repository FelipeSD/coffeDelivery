import { IconButton, Stack, Typography as Text, useTheme } from "@mui/material";
import { Minus, Plus } from "phosphor-react";

interface SelectNumberProps {
    quantity?: number;
}

export default function SelectNumber({ quantity = 1 }: SelectNumberProps) {
    const theme = useTheme();

    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
                backgroundColor: theme.palette.baseButton,
                padding: "0.35rem",
                borderRadius: "0.5rem",
            }}
        >
            <IconButton size="small">
                <Minus color={theme.palette.purple} />
            </IconButton>

            <Text variant="regularM" component="span">
                {quantity}
            </Text>

            <IconButton size="small">
                <Plus color={theme.palette.purple} />
            </IconButton>
        </Stack>
    )
}