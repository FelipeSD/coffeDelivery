import { Button, Box, Stack, styled, useTheme } from '@mui/material';
import { MapPin } from 'phosphor-react';
import Logo from '/Logo.svg';
import CartButton from './CartButton';
import { Link } from '@tanstack/react-location';

const Location = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    backgroundColor: `${theme.palette.purpleLight}`,
    color: `${theme.palette.purple}`,
    '&:hover': {
        backgroundColor: `${theme.palette.purpleLight}`
    }
}));

const LogoImage = styled('img')({
    height: '2.5rem',
});

const Header = () => {
    const theme = useTheme();

    return (
        <Box component="header" display="flex" alignItems="center" justifyContent="space-between" py={4}>
            <Link to="/">
                <LogoImage src={Logo} alt="logo" />
            </Link>

            <Stack spacing={2} direction="row" alignItems="center">
                <Location startIcon={<MapPin color={theme.palette.purple} weight="fill" />}>
                    Porto Alegre, RS
                </Location>
                <Link to="/checkout">
                    <CartButton typeColor="yellow" />
                </Link>
            </Stack>
        </Box>
    );
}

export default Header;