import { Badge, BadgeProps, IconButton, IconButtonProps, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles'
import { ShoppingCart } from 'phosphor-react';

interface CardButtonProps extends IconButtonProps {
    typeColor: 'purple' | 'yellow';
    quantity?: number;
}

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        top: 2,
        backgroundColor: theme.palette.yellowDark,
        color: theme.palette.white,
    }
}));

export default function CartButton({ typeColor, quantity = 0, classes, ...rest }: CardButtonProps) {
    const theme = useTheme();

    const lightColor = typeColor === 'purple' ? theme.palette.purpleDark : theme.palette.yellowLight;
    const darkColor = typeColor === 'purple' ? theme.palette.white : theme.palette.yellowDark;

    return (
        <StyledBadge badgeContent={quantity}>
            <IconButton {...rest}
                sx={{
                    backgroundColor: lightColor,
                    borderRadius: '6px',
                    '&:hover': {
                        backgroundColor: lightColor,
                    }
                }}>
                <ShoppingCart color={darkColor} weight="fill" />
            </IconButton>
        </StyledBadge>
    );
}