import { Box, Divider, Stack, Typography as Text } from "@mui/material";
import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { useCart } from "../../../hooks/useCart";
import { toNumber, toString } from "../../../Utils";
import Item from "./Item";

interface BillProps {
    onConfirm: () => void;
}

export default function Bill({ onConfirm }: BillProps) {
    const [totalBill, setTotalBill] = useState(0);
    const { cart, total } = useCart();

    const totalItems = toString(total);
    const totalDelivery = toString(total * 0.1 + 10);

    useEffect(() => {
        setTotalBill(total + toNumber(totalDelivery));
    }, [total, totalDelivery]);

    return (
        <Box my={2} p={5} className="card-default card-styled">
            <Stack direction="column" sx={{ maxHeight: '500px' }}>
                {cart.map(item => (
                    <Box key={item.id}>
                        <Item
                            id={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            image={item.image}
                            price={item.price}
                        />
                        <Divider sx={{ my: 3 }} />
                    </Box>
                ))}
            </Stack>

            <Stack direction="column" spacing="0.75rem" mb={3}>
                <Stack direction="row" justifyContent="space-between">
                    <Text variant="regularS" color="baseText">Total de itens</Text>
                    <Text variant="regularS" color="baseText">R$ {totalItems}</Text>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Text variant="regularS" color="baseText">Entrega</Text>
                    <Text variant="regularS" color="baseText">R$ {totalDelivery}</Text>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Text variant="boldM" color="baseSubtitle">Total</Text>
                    <Text variant="boldM" color="baseSubtitle">R$ {toString(totalBill)}</Text>
                </Stack>
            </Stack>

            <Button text="Confirmar pedido" onClick={onConfirm} />
        </Box>
    )
}