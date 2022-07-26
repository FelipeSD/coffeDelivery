import { styled } from "@mui/material";
import Routes from "./routes";

const Container = styled('main')(({ theme }) => ({
  margin: '0 auto',
  padding: `0 ${theme.spacing(4)}`,
  maxWidth: `${theme.breakpoints.values.lg}px`,
}));

function App() {
  return (
    <Container>
      <Routes />
    </Container>
  )
}

export default App
