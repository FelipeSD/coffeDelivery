import { Grid, Stack, Typography as Text } from "@mui/material";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import Illustration from "../../assets/Illustration.svg";
import GradientBorder from "../../components/GradientBorder";
import Header from "../../components/Header";
import Item from "./components/Item";

export default function Success() {
  return (
    <>
      <Header />

      <Text variant="titleL" component="h1" color="yellowDark">
        Uhuu! Pedido confirmado
      </Text>
      <Text variant="regularL" component="p" color="baseSubtitle">
        Agora é só aguardar que logo o café chegará até você
      </Text>

      <Grid container columnSpacing={10} rowSpacing={2} mt={5}>
        <Grid item xs={12} sm={6}>
          <GradientBorder
            direction="column"
            spacing={4}
            p={5}
          >
            <Item icon={<MapPin />} color="purple">
              <Text component="p" variant="regularM" color="baseText">
                Entrega em <b>Rua João Daniel Martinelli, 102</b>
              </Text>
              <Text component="p" variant="regularM" color="baseText">
                Farrapos - Porto Alegre, RS
              </Text>
            </Item>

            <Item icon={<Timer />} color="yellow">
              <Text component="p" variant="regularM" color="baseText">
                Previsão de entrega
              </Text>
              <Text component="p" variant="regularM" color="baseText">
                <b>20 min - 30 min</b>
              </Text>
            </Item>

            <Item icon={<CurrencyDollar />} color="yellowDark">
              <Text component="p" variant="regularM" color="baseText">
                Pagamento na entrega
              </Text>
              <Text component="p" variant="regularM" color="baseText">
                <b>Cartão de crédito</b>
              </Text>
            </Item>
          </GradientBorder>
        </Grid>
        <Grid item xs={12} sm={5}>
          <img src={Illustration} width="100%" />
        </Grid>
      </Grid>
    </>
  );
}
