import { useEffect, useState } from "react";
import { Box, Button, Grid, Stack, styled, Typography, useTheme } from "@mui/material";
import { Trash } from "phosphor-react";
import { useCart } from "../../../hooks/useCart";
import { toNumber, toString } from "../../../Utils";
import SelectNumber from "../../../components/SelectNumber";

interface ItemProps {
    id: number;
    name: string;
    image: string;
    price: string;
    quantity: number;
}

const Image = styled('img')(({ theme }) => ({
    width: theme.spacing(8),
}));

const RemoveButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.baseButton,
    color: theme.palette.baseText,
    padding: `0 ${theme.spacing(1)}px`,
    borderRadius: '6px',
    '&:hover': {
        backgroundColor: theme.palette.baseHover,
    }
}));

export default function Item({ image, name, price, quantity, id }: ItemProps) {
    const theme = useTheme();
    const { removeFromCart, addToCart } = useCart();
    const [total, setTotal] = useState(0);
    const [newQuantity, setNewQuantity] = useState(quantity);

    function handleRemove() {
        removeFromCart(id);
    }

    function handleQuantity(qtd: number) {
        setNewQuantity(qtd);
        addToCart({ id, price, name, image, quantity: qtd });
    }

    useEffect(() => {
        setTotal(newQuantity * toNumber(price));
    }, [newQuantity, price]);

    return (
        <Grid container justifyContent="space-between">
            <Grid item xs={12} sm>
                <Stack direction="row" spacing={2}>
                    <Image src={image} />
                    <Box>
                        <Typography variant="regularM">
                            {name}
                        </Typography>

                        <Stack direction="row" spacing={1} mt={1}>
                            <SelectNumber quantity={newQuantity} onChange={handleQuantity} />

                            <RemoveButton
                                size="small"
                                startIcon={<Trash color={theme.palette.purple} />}
                                onClick={handleRemove}
                            >
                                Remover
                            </RemoveButton>
                        </Stack>
                    </Box>
                </Stack>
            </Grid>
            <Grid
                item
                sm
                textAlign="right"
                sx={{ display: { xs: "none", sm: 'block' } }}
            >
                <Typography component="span" variant="boldM" color="baseText">
                    R$ {toString(total)}
                </Typography>
            </Grid>
        </Grid>
    )
}