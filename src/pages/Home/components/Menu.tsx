import { Grid, Typography as Text } from "@mui/material"
import MenuItem, { CoffeeProps } from "./MenuItem";

interface MenuProps {
    coffees: CoffeeProps[] | undefined;
}

export default function Menu({ coffees }: MenuProps) {
    return (
        <section>
            <Text component="h3" variant="titleL" mb={7}>Nossos cafés</Text>

            <Grid container spacing={5}>
                {coffees?.map((coffee: CoffeeProps) => (
                    <Grid item xs={12} sm={6} md={3} key={coffee.id}>
                        <MenuItem coffee={coffee} />
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}