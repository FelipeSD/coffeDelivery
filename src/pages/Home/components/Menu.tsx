import { useState } from "react";
import { Grid, Typography as Text } from "@mui/material"
import MenuItem, { CoffeeProps } from "./MenuItem";
import { MakeGenerics, useMatch } from "@tanstack/react-location";

type LocationGenerics = MakeGenerics<{
    LoaderData: {
        coffeList: CoffeeProps[];
        coffe: CoffeeProps;
    };
}>;

export default function Menu() {
    const {data: { coffeList }} = useMatch<LocationGenerics>();
    const [coffes, setCoffes] = useState<CoffeeProps[] | undefined>(coffeList);

    return (
        <section>
            <Text component="h3" variant="titleL" mb={7}>Nossos cafés</Text>

            <Grid container spacing={5}>
                {coffes?.map((coffee: CoffeeProps) => (
                    <Grid item xs={12} sm={6} md={3} key={coffee.id}>
                        <MenuItem coffee={coffee} />
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}