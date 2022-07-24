import { Box, Chip, Grid, Stack, styled, useTheme } from "@mui/material";
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

const Title = styled('h3')(({ theme }) => ({
    margin: 0,
    color: theme.customColor.baseSubtitle,
    ...theme.typography.titleS,
}));

const Description = styled('p')(({ theme }) => ({
    textAlign: 'center',
    color: theme.customColor.baseLabel,
    ...theme.typography.regularS
}));

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
                            backgroundColor: theme.customColor.yellowLight,
                            color: theme.customColor.yellowDark,
                            fontSize: '0.625rem',
                            fontWeight: '700',
                        }}
                    />
                ))}
            </Stack>

            <Title>{name}</Title>
            <Description>{description}</Description>

            <Grid container justifyContent="space-between" alignItems="center" mt={2}>
                <Grid item xs={6}>
                    <Stack direction="row"
                        spacing={1}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box component="span" sx={{ ...theme.typography.regularS }}>
                            R$
                        </Box>
                        <Box component="span" sx={{ ...theme.typography.titleM }}>
                            {price}
                        </Box>
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