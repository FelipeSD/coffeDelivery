import { Box, Chip, Grid, Snackbar, Stack, styled, Typography as Text, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import CartButton from "../../../components/CartButton";
import SelectNumber from "../../../components/SelectNumber";
import { useCart } from "../../../hooks/useCart";

export interface CoffeeProps {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    tags: string[];
}

interface MenuItemProps {
    coffee: CoffeeProps;
}

const Image = styled('img')({
    margin: '-2rem auto 0 auto',
});

export default function MenuItem({ coffee }: MenuItemProps) {
    const { name, description, price, image, tags } = coffee;
    const { cart, addToCart } = useCart();
    const theme = useTheme();

    const [quantity, setQuantity] = useState(1);
    const [openSnack, setOpenSnack] = useState(false);

    function handleQuantity(quantity: number) {
        setQuantity(quantity);
    }

    function handleAddToCart() {
        addToCart({
            ...coffee,
            quantity,
        });

        setOpenSnack(true);

        setTimeout(() => {
            setOpenSnack(false);
        }, 3000);
    }

    useEffect(() => {
        // get quantity from cart
        const itemIndex = cart?.findIndex(item => item.id === coffee.id);
        if (itemIndex !== -1) {
            setQuantity(cart[itemIndex].quantity);
        }
    }, []);

    return (
        <Box className="card-default card-styled" sx={{
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Image src={image} alt={name} />

            <Stack spacing={1} my={1} direction="row">
                {tags.map((tag, index) => (
                    <Chip key={index}
                        label={tag}
                        size="small"
                        sx={{
                            height: '1.31rem',
                            textTransform: 'uppercase',
                            backgroundColor: theme.palette.yellowLight,
                            color: theme.palette.yellowDark,
                            fontSize: '0.625rem',
                            fontWeight: '700',
                        }}
                    />
                ))}
            </Stack>

            <Text variant="titleS" component="h3" color="baseSubtitle" my={1}>
                {name}
            </Text>
            <Text variant="regularS" component="p" color="baseLabel" textAlign="center">
                {description}
            </Text>

            <Grid container justifyContent="space-between" alignItems="center" mt={4}>
                <Grid item xs={6}>
                    <Stack direction="row" justifyContent="center" alignItems="center">
                        <Text variant="regularS" color="baseText" pr={".2rem"}>
                            R$
                        </Text>
                        <Text variant="titleM">
                            {price}
                        </Text>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack direction="row"
                        spacing={1}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <SelectNumber quantity={quantity} onChange={handleQuantity} />
                        <CartButton typeColor="purple" onClick={handleAddToCart} />
                    </Stack>
                </Grid>
            </Grid>

            <Snackbar 
                message={`Adicionado ao carrinho: ${name} (${quantity})`} 
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={openSnack}
            />
        </Box>
    )
}