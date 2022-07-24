import styled from "@emotion/styled";
import theme from "../../../styles/theme";

const Title = styled('h3')({
    ...theme.typography.titleL
});

export default function Menu() {
    return (
        <section>
            <Title>Nossos cafés</Title>
        </section>
    )
}