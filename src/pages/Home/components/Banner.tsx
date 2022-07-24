import { Grid, Stack, styled, useTheme } from "@mui/material";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import Cafe from "../../../assets/Cafe.svg";

const Container = styled('section')({
    marginTop: '2rem',
    padding: '3rem 0',
});

const Title = styled('h1')(({ theme }) => ({
    color: theme.customColor.baseTitle,
    margin: 0,
    ...theme.typography.titleXL
}));

const Description = styled('p')(({ theme }) => ({
    ...theme.typography.regularL
}));

const Icon = styled('span')(({ color }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: color,
    padding: '.5rem'
}));

const IconText = styled('span')(({ theme }) => ({
    ...theme.typography.regularM
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
            icon: <ShoppingCart color={theme.customColor.white} />,
            color: theme.customColor.purple,
        },
        {
            text: "Embalagem mantém o café intacto",
            icon: <Package color={theme.customColor.white} />,
            color: theme.customColor.baseText
        },
        {
            text: "Entrega rápida e rastreada",
            icon: <Timer color={theme.customColor.white} />,
            color: theme.customColor.yellow,
        },
        {
            text: "O café chega fresquinho até você",
            icon: <Coffee color={theme.customColor.white} />,
            color: theme.customColor.purple
        }
    ];

    return (
        <Container>
            <Grid direction="row" container>
                <Grid item sm={6}>
                    <Title>
                        Encontre o café perfeito <br />
                        para qualquer hora do dia
                    </Title>

                    <Description>
                        Com o Coffe Delivery você recebe seu café onde estiver,
                        a qualquer hora.
                    </Description>

                    <Grid container my={5}>
                        {items.map((item, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    mb={2}
                                    alignItems="center"
                                >
                                    <Icon color={item.color}>{item.icon}</Icon>
                                    <IconText>{item.text}</IconText>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item sm={6} display="flex" justifyContent="end">
                    <Image src={Cafe} alt="Copo de café" />
                </Grid>
            </Grid>
        </Container>
    );
}