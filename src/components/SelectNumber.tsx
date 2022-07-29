import { IconButton, Stack, Typography as Text, useTheme } from "@mui/material";
import { Minus, Plus } from "phosphor-react";

interface SelectNumberProps {
    quantity?: number;
    onChange?: (quantity: number) => void;
}

export default function SelectNumber({ quantity = 1, onChange }: SelectNumberProps) {
    const theme = useTheme();
    
    function handleIncrement() {
        onChange && onChange(quantity + 1);
    }

    function handleDecrement() {
        onChange && onChange(quantity - 1);
    }

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
            <IconButton 
                disabled={quantity <= 1}
                size="small" 
                onClick={handleDecrement}>
                <Minus color={theme.palette.purple} />
            </IconButton>

            <Text variant="regularM" component="span">
                {quantity}
            </Text>

            <IconButton size="small" onClick={handleIncrement}>
                <Plus color={theme.palette.purple} />
            </IconButton>
        </Stack>
    )
}