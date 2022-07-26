import { InputAdornment, InputBase, styled } from "@mui/material";

interface InputProps {
    placeholder: string;
    tip?: string;
}

const InputField = styled(InputBase)(({ theme }) => ({
    width: "100%",
    padding: "0.75rem",
    border: `1px solid ${theme.palette.baseButton}`,
    borderRadius: "0.75rem",
    color: theme.palette.baseText,
    backgroundColor: theme.palette.baseInput,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&.Mui-focused': {
        borderColor: theme.palette.yellowDark,
    }
}));

const Tip = styled("p")(({ theme }) => ({
    color: theme.palette.baseLabel,
    fontStyle: "italic",
    fontSize: "0.75rem",
    fontWeight: "400",
}));

export default function Input({ placeholder, tip, ...props }: InputProps) {
    return (
        <InputField
            placeholder={placeholder}
            endAdornment={
                <InputAdornment position="end">
                    <Tip>{tip}</Tip>
                </InputAdornment>
            }
            {...props}
        />
    )
}