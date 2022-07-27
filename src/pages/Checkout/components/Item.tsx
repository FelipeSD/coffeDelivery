import { Box, Button, Grid, Stack, styled, Typography, useTheme } from "@mui/material";
import { Trash } from "phosphor-react";
import SelectNumber from "../../../components/SelectNumber";

interface ItemProps {
    title: string;
    image: string;
    price: string;
    quantity: number;
    onRemove: () => void;
}

const Image = styled('img')(({ theme }) => ({
    width: theme.spacing(8),
}));

const RemoveButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.baseButton,
    color: theme.palette.baseText,
    padding: `0 ${theme.spacing(1)}px`,
    borderRadius: '6px',
    '&:hover': {
        backgroundColor: theme.palette.baseHover,
    }
}));

export default function Item({ image, title, price, quantity, onRemove }: ItemProps) {
    const theme = useTheme();

    return (
        <Grid container justifyContent="space-between">
            <Grid item xs={12} sm>
                <Stack direction="row" spacing={2}>
                    <Image src={image} />
                    <Box>
                        <Typography variant="regularM">
                            {title}
                        </Typography>

                        <Stack direction="row" spacing={1} mt={1}>
                            <SelectNumber quantity={quantity} />

                            <RemoveButton
                                size="small"
                                startIcon={<Trash color={theme.palette.purple} />}
                            >
                                Remover
                            </RemoveButton>
                        </Stack>
                    </Box>
                </Stack>
            </Grid>
            <Grid
                item
                sm
                textAlign="right"
                sx={{ display: { xs: "none", sm: 'block' } }}
            >
                <Typography component="span" variant="boldM" color="baseText">
                    R$ {price}
                </Typography>
            </Grid>
        </Grid>
    )
}