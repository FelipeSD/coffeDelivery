import { Button, Stack } from '@mui/material';
import { MapPin } from 'phosphor-react';
import styled from '@emotion/styled';
import theme from '../styles/theme';
import Logo from '/Logo.svg';
import CartButton from './CartButton';

const Container = styled('header')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
});

const Location = styled(Button)({
    textTransform: 'none',
    backgroundColor: `${theme.customColor.purpleLight}`,
    color: `${theme.customColor.purple}`,
    '&:hover': {
        backgroundColor: `${theme.customColor.purpleLight}`
    }
});

const LogoImage = styled('img')({
    height: '2.5rem',
});

const Header = () => {
    return (
        <Container>
            <LogoImage src={Logo} alt="logo" />

            <Stack spacing={2} direction="row" alignItems="center">
                <Location startIcon={
                    <MapPin color={theme.customColor.purple} weight="fill" />
                }>
                    Porto Alegre, RS
                </Location>
                <CartButton typeColor="yellow" />
            </Stack>
        </Container>
    );
}

export default Header;