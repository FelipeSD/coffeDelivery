import { Badge, BadgeProps, IconButton, IconButtonProps } from '@mui/material';
import { ShoppingCart } from 'phosphor-react';
import styled from '@emotion/styled';
import theme from '../styles/theme';

interface CardButtonProps extends IconButtonProps {
    typeColor: 'purple' | 'yellow';
    quantity?: number;
}

const StyledBadge = styled(Badge)<BadgeProps>({
    '& .MuiBadge-badge': {
        top: 2,
        backgroundColor: theme.customColor.yellowDark,
        color: theme.customColor.white,
    }
});

const CartButton = ({typeColor, quantity = 0, classes, ...props}: CardButtonProps) => {
    const lightColor = typeColor === 'purple' ? theme.customColor.purpleLight : theme.customColor.yellowLight;
    const darkColor = typeColor === 'purple' ? theme.customColor.purpleDark : theme.customColor.yellowDark;

    return (
        <StyledBadge badgeContent={quantity}>
            <IconButton
                {...props}
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

export default CartButton;