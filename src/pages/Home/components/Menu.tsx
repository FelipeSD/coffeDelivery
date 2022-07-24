import { styled } from "@mui/material"

const Title = styled('h3')(({ theme }) => ({
    ...theme.typography.titleL
}));

export default function Menu() {
    return (
        <section>
            <Title>Nossos cafés</Title>
        </section>
    )
}