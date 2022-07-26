import { Button, styled, useTheme } from "@mui/material";
import { cloneElement, ReactElement } from "react";

interface SelectItemProps {
    text: string;
    icon: ReactElement;
    selected?: boolean;
}

const ButtonItem = styled(Button)(({ theme }) => ({
    padding: "1rem",
    color: theme.palette.baseText,
    backgroundColor: theme.palette.baseButton,
    textTransform: "uppercase",
    "&:hover": {
        backgroundColor: theme.palette.baseHover,
    },
    "&.selected": {
        border: `1px solid ${theme.palette.purple}`,
        backgroundColor: theme.palette.purpleLight,
    }
}));

export default function SelectItem({ text, icon, selected }: SelectItemProps) {
    const theme = useTheme();
    const styledIcon = cloneElement(icon, {
        color: theme.palette.purple,
    });

    return (
        <ButtonItem
            size="small"
            className={selected ? "selected" : ""}
            startIcon={styledIcon}
        >
            {text}
        </ButtonItem>
    )
}