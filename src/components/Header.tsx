import { useEffect, useState } from 'react';
import { Button, Box, Stack, styled, useTheme } from '@mui/material';
import { MapPin } from 'phosphor-react';
import { Link } from '@tanstack/react-location';
import { useCart } from '../hooks/useCart';
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
    const { cart } = useCart();

    const [position, setPosition] = useState<'static' | 'fixed'>('static');
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        if (scrollY > 500) {
            setPosition('fixed');
        } else {
            setPosition('static');
        }
    }, [scrollY]);

    return (
        <Box
            // position={position}
            component="header"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            py={4}
            sx={{
                position: position,
                zIndex: 1,
                top: 0,
                left: theme.spacing(4),
                right: theme.spacing(4),
                backgroundColor: theme.palette.bg,
                // transform effect
                transition: 'all 0.3s ease-in-out',
                transform: position
            }}
        >
            <Link to="/">
                <LogoImage src={Logo} alt="logo" />
            </Link>

            <Stack spacing={2} direction="row" alignItems="center">
                <Location startIcon={<MapPin color={theme.palette.purple} weight="fill" />}>
                    Porto Alegre, RS
                </Location>
                <Link to="/checkout">
                    <CartButton typeColor="yellow" quantity={cart?.length} />
                </Link>
            </Stack>
        </Box>
    );
}

export default Header;