import { Button, Box, Stack, styled, useTheme } from '@mui/material';
import { MapPin } from 'phosphor-react';
import Logo from '/Logo.svg';
import CartButton from './CartButton';

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
        <Box component="header" display="flex" alignItems="center" justifyContent="space-between">
            <LogoImage src={Logo} alt="logo" />

            <Stack spacing={2} direction="row" alignItems="center">
                <Location startIcon={
                    <MapPin color={theme.palette.purple} weight="fill" />
                }>
                    Porto Alegre, RS
                </Location>
                <CartButton typeColor="yellow" />
            </Stack>
        </Box>
    );
}

export default Header;