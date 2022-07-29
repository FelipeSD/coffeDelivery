import { styled } from "@mui/material";
import CartProvider from "./hooks/useCart";
import Routes from "./routes";

const Container = styled('main')(({ theme }) => ({
  position: 'relative',
  margin: '0 auto',
  padding: `0 ${theme.spacing(4)}`,
  maxWidth: `${theme.breakpoints.values.lg}px`,
}));

function App() {
  return (
    <CartProvider>
      <Container>
        <Routes />
      </Container>
    </CartProvider>
  )
}

export default App
