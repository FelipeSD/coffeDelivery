import { styled } from "@mui/material";
import Home from "./pages/Home"

const Container = styled('div')(({ theme }) => ({
  margin: '0 auto',
  padding: `${theme.spacing(4)}`,
  maxWidth: `${theme.breakpoints.values.lg}px`,
}));

function App() {
  return (
    <Container>
      <Home />
    </Container>
  )
}

export default App
