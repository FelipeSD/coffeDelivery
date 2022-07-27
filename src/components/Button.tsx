import { Button as MuiButton, ButtonProps as MuiButtonProps, styled } from '@mui/material';

interface ButtonProps extends MuiButtonProps {
    text: string;
}

const StyledButton = styled(MuiButton)(({ theme }) => ({
    width: '100%',
    padding: '0.75rem .5rem',
    color: theme.palette.white,
    backgroundColor: theme.palette.yellow,
    "&:hover": {
        backgroundColor: theme.palette.yellowDark,
    }
}));

export default function Button({ text, ...rest }: ButtonProps) {
    return (
        <StyledButton {...rest}>
            {text}
        </StyledButton>
    )
}