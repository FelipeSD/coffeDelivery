import { Box, Grid, Typography as Text } from "@mui/material";
import Header from "../../components/Header";
import Address from "./components/Address";
import Payment from "./components/Payment";

export default function Checkout() {
    return (
        <>
            <Header />

            <Grid container my={5} columnSpacing={4} >
                <Grid item sm={12} md={8}>
                    <Text variant="titleXS">
                        Complete seu pedido
                    </Text>

                    <Address />
                    <Payment />
                </Grid>
                <Grid item sm={12} md={4}>
                    <Text variant="titleXS">
                        Cafés selecionados
                    </Text>

                    <Box my={2} p={5} className="card-default card-styled">
                        
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}