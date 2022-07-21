import { Button, Stack } from '@mui/material';
import { MapPin } from 'phosphor-react';
import styled from '@emotion/styled';
import theme from '../styles/theme';
import Logo from '/Logo.svg';
import { CartButton } from './Button';

const Container = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 auto',
    padding: `${theme.spacing(4)}`,
    maxWidth: `${theme.breakpoints.values.lg}px`,
})

const Location = styled(Button)({
    textTransform: 'none',
    backgroundColor: `${theme.customColor.purpleLight}`,
    color: `${theme.customColor.purple}`,
    '&:hover': {
        backgroundColor: `${theme.customColor.purpleLight}`
    }
});

const Header = () => {
    return <Container>
        <img src={Logo} alt="logo" />

        <Stack spacing={2} direction="row" alignItems="center">
            <Location startIcon={<MapPin color={theme.customColor.purple} weight="fill" />}>
                Porto Alegre, RS
            </Location>
            <CartButton />
        </Stack>
    </Container>;
}

export default Header;