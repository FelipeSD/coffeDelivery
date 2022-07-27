import { Box, Divider, Stack, Typography as Text } from "@mui/material";
import Button from "../../../components/Button";
import Item from "./Item";

interface BillProps {
    onConfirm: () => void;
}

export default function Bill({ onConfirm }: BillProps) {
    return (
        <Box my={2} p={5} className="card-default card-styled">
            <Stack direction="column" sx={{ maxHeight: '500px' }}>
                <Item
                    title="Expresso Cremoso"
                    quantity={2}
                    image="./src/assets/images/ExpressoCremoso.svg"
                    price={(19.2).toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                    onRemove={() => { }}
                />
                <Divider sx={{ my: 3 }} />
                <Item
                    title="Expresso Cremoso"
                    quantity={2}
                    image="./src/assets/images/ExpressoCremoso.svg"
                    price={(19.2).toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                    onRemove={() => { }}
                />
                <Divider sx={{ my: 3 }} />
            </Stack>

            <Stack direction="column" spacing="0.75rem" mb={3}>
                <Stack direction="row" justifyContent="space-between">
                    <Text variant="regularS" color="baseText">Total de itens</Text>
                    <Text variant="regularS" color="baseText">R$ 29,70</Text>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Text variant="regularS" color="baseText">Entrega</Text>
                    <Text variant="regularS" color="baseText">R$ 3,50</Text>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Text variant="boldM" color="baseSubtitle">Total</Text>
                    <Text variant="boldM" color="baseSubtitle">R$ 33,20</Text>
                </Stack>
            </Stack>

            <Button text="Confirmar pedido" onClick={onConfirm} />
        </Box>
    )
}