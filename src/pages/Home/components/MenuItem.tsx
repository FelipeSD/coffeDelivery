import { Box, Chip, Grid, Stack, styled, Typography as Text, useTheme } from "@mui/material";
import CartButton from "../../../components/CartButton";
import SelectNumber from "../../../components/SelectNumber";

export interface CoffeeProps {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    tags: string[];
}

interface MenuItemProps {
    coffee: CoffeeProps;
}

const Image = styled('img')({
    margin: '-2rem auto 0 auto',
});

export default function MenuItem({
    coffee: { name, description, price, image, tags },
}: MenuItemProps) {
    const theme = useTheme();

    return (
        <Box className="card-default card-styled" sx={{
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Image src={image} alt={name} />

            <Stack spacing={1} my={1} direction="row">
                {tags.map((tag, index) => (
                    <Chip key={index}
                        label={tag}
                        size="small"
                        sx={{
                            height: '1.31rem',
                            textTransform: 'uppercase',
                            backgroundColor: theme.palette.yellowLight,
                            color: theme.palette.yellowDark,
                            fontSize: '0.625rem',
                            fontWeight: '700',
                        }}
                    />
                ))}
            </Stack>

            <Text variant="titleS" component="h3" color="baseSubtitle" my={1}>
                {name}
            </Text>
            <Text variant="regularS" component="p" color="baseLabel" textAlign="center">
                {description}
            </Text>

            <Grid container justifyContent="space-between" alignItems="center" mt={4}>
                <Grid item xs={6}>
                    <Stack direction="row" justifyContent="center" alignItems="center">
                        <Text variant="regularS" color="palette.baseLabel" pr={".2rem"}>
                            R$
                        </Text>
                        <Text variant="titleM">
                            {price}
                        </Text>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack direction="row"
                        spacing={1}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <SelectNumber />
                        <CartButton typeColor="purple" />
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}