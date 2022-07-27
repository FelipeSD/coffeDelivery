import { Box, Grid, Typography as Text, useTheme } from "@mui/material";
import { MapPinLine } from "phosphor-react";
import Input from "../../../components/Input";
import Legend from "./Legend";

export default function Address() {
    const theme = useTheme();

    return (
        <Box my={2} p={5} className="card-default">
            <Legend
                title="Endereço de Entrega"
                description="Informe o endereço onde deseja receber seu pedido"
                icon={<MapPinLine color={theme.palette.yellowDark} />}
            />

            <Grid container mt={2} spacing={2} >
                <Grid item xs={12} md={4}>
                    <Input placeholder="CEP" />
                </Grid>
                <Grid item xs={12}>
                    <Input placeholder="Rua" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Input placeholder="Número" />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Input placeholder="Complemento" tip="Opcional" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Input placeholder="Bairro" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Input placeholder="Cidade" />
                </Grid>
                <Grid item xs={12} md={2}>
                    <Input placeholder="UF" />
                </Grid>
            </Grid>
        </Box>
    )
}