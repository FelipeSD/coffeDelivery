import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Grid, Typography as Text } from "@mui/material";
import { useNavigate } from "@tanstack/react-location";
import { yupResolver } from '@hookform/resolvers/yup';
import { useCart } from "../../hooks/useCart";
import Header from "../../components/Header";
import Address from "./components/Address";
import Bill from "./components/Bill";
import Payment from "./components/Payment";
import * as yup from 'yup';

interface FormValues {
    zip: string;
    road: string;
    number: number;
    complemento: string;
    neighborhood: string;
    city: string;
    state: string;
}

const schema = yup.object({
    zip: yup.string().default('').required('O CEP é obrigatório'),
    road: yup.string().default('').required('A rua é obrigatória'),
    number: yup.number().default(null).required('O número é obrigatório'),
    complement: yup.string().default(''),
    neighborhood: yup.string().default('').required('O bairro é obrigatório'),
    city: yup.string().default('').required('A cidade é obrigatória'),
    state: yup.string().default('').required('O estado é obrigatório'),
    payment: yup.string().default('creditCard').required('O método de pagamento é obrigatório'),
})

export default function Checkout() {
    const navigate = useNavigate();
    const { clearCart } = useCart();

    const methods = useForm<FormValues>({
        resolver: yupResolver(schema)
    });

    const handleConfirm = methods.handleSubmit((data) => {
        clearCart();
        navigate({
            to: "/success",
        })
    })

    return (
        <>
            <Header />
            <FormProvider {...methods}>
                <Grid
                    component="form"
                    container
                    columnSpacing={4}
                    my={5}
                    onSubmit={handleConfirm}
                >
                    <Grid item xs={12} md={7}>
                        <Text variant="titleXS">
                            Complete seu pedido
                        </Text>

                        <Address />
                        <Payment />
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <Text variant="titleXS">
                            Cafés selecionados
                        </Text>

                        <Bill />
                    </Grid>
                </Grid>
            </FormProvider>
        </>
    )
}