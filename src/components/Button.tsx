import styled from '@emotion/styled';
import { Badge, BadgeProps, IconButton } from '@mui/material';
import { ShoppingCart } from 'phosphor-react';
import theme from '../styles/theme';

const StyledBadge = styled(Badge)<BadgeProps>({
    '& .MuiBadge-badge': {
        top: 2,
        backgroundColor: theme.customColor.yellowDark,
        color: theme.customColor.white,
    }
});

export function CartButton() {
    return (
        <StyledBadge badgeContent={5}>
            <IconButton sx={{
                backgroundColor: theme.customColor.yellowLight,
                borderRadius: '6px',
                '&:hover': {
                    backgroundColor: theme.customColor.yellowLight,
                }
            }}>
                <ShoppingCart color={theme.customColor.yellowDark} weight="fill" />
            </IconButton>
        </StyledBadge>
    );
}

export function Button() {
    return <div />;
}

