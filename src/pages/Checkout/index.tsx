import { Grid, Typography as Text } from "@mui/material";
import { Router, useNavigate } from "@tanstack/react-location";
import Header from "../../components/Header";
import Address from "./components/Address";
import Bill from "./components/Bill";
import Payment from "./components/Payment";

export default function Checkout() {
    const navigate = useNavigate();

    function handleConfirm() {
        navigate({
            to: "/success",
        })
    }

    return (
        <>
            <Header />

            <Grid container my={5} columnSpacing={4}>
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

                    <Bill onConfirm={handleConfirm} />
                </Grid>
            </Grid>
        </>
    )
}