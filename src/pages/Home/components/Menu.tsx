import { useEffect, useState } from "react";
import { Grid, Typography as Text } from "@mui/material"
import { api } from "../../../services/api";
import MenuItem, { CoffeeProps } from "./MenuItem";

export default function Menu() {
    const [coffes, setCoffes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        api.get('/coffee').then(response => {
            const coffeList = response.data.map((coffee: CoffeeProps) => ({
                ...coffee,
                price: coffee.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })
            }));

            setCoffes(coffeList);
            setLoading(false);
        }).catch(error => {
            console.log(error);
            setLoading(false);
        });
    }, []);

    return (
        <section>
            <Text component="h3" variant="titleL" mb={7}>Nossos cafés</Text>

            <Grid container spacing={5}>
                {coffes.map((coffee: CoffeeProps) => (
                    <Grid item xs={12} sm={6} md={3} key={coffee.id}>
                        <MenuItem coffee={coffee} />
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}