import { Grid, Stack, styled, Typography as Text, useTheme } from "@mui/material";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import Cafe from "../../../assets/Cafe.svg";

const Container = styled('section')({
    marginTop: '2rem',
    padding: '3rem 0',
});

const Icon = styled('span')(({ color }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: color,
    padding: '.5rem'
}));

const Image = styled('img')(({ theme }) => ({
    height: '25rem',

    [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
        height: '16rem'
    }
}));

export default function Banner() {
    const theme = useTheme();

    const items = [
        {
            text: "Compra simples e segura",
            icon: <ShoppingCart color={theme.palette.white} />,
            color: theme.palette.purple,
        },
        {
            text: "Embalagem mantém o café intacto",
            icon: <Package color={theme.palette.white} />,
            color: theme.palette.baseText
        },
        {
            text: "Entrega rápida e rastreada",
            icon: <Timer color={theme.palette.white} />,
            color: theme.palette.yellow,
        },
        {
            text: "O café chega fresquinho até você",
            icon: <Coffee color={theme.palette.white} />,
            color: theme.palette.purple
        }
    ];

    return (
        <Container>
            <Grid direction="row" container>
                <Grid item sm={7}>
                    <Text variant="titleXL" component="h1" color="baseTitle" mb={2}>
                        Encontre o café perfeito <br />
                        para qualquer hora do dia
                    </Text>

                    <Text variant="regularL" component="p">
                        Com o Coffe Delivery você recebe seu café onde estiver,
                        a qualquer hora.
                    </Text>

                    <Grid container my={6}>
                        {items.map((item, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    mb={2}
                                    alignItems="center"
                                >
                                    <Icon color={item.color}>{item.icon}</Icon>
                                    <Text variant="regularM">{item.text}</Text>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item sm={5} display="flex" justifyContent="end">
                    <Image src={Cafe} alt="Copo de café" />
                </Grid>
            </Grid>
        </Container>
    );
}