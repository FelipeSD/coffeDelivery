import { Box, Grid, Typography as Text, useTheme } from "@mui/material";
import { MapPinLine } from "phosphor-react";
import { Controller, useFormContext } from "react-hook-form";
import Input from "../../../components/Input";
import Legend from "./Legend";

interface InputAddressProps {
    placeholder: string;
    name: string;
}

const InputAddress = ({ placeholder, name }: InputAddressProps) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, onBlur, name, ref } }) => (
                <Input
                    placeholder={placeholder}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    inputRef={ref}
                />
            )}
        />
    );
}

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
                    <InputAddress
                        name="zip"
                        placeholder="CEP"
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputAddress
                        name="road"
                        placeholder="Rua"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <InputAddress
                        name="number"
                        placeholder="Número"
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <InputAddress
                        name="complement"
                        placeholder="Complemento"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <InputAddress
                        name="neighborhood"
                        placeholder="Bairro"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputAddress
                        name="city"
                        placeholder="Cidade"
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <InputAddress
                        name="state"
                        placeholder="Estado"
                    />
                </Grid>
            </Grid>
        </Box>
    )
}