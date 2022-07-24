import styled from "@emotion/styled"
import Home from "./pages/Home"
import theme from "./styles/theme"

const Container = styled('div')({
  margin: '0 auto',
  padding: `${theme.spacing(4)}`,
  maxWidth: `${theme.breakpoints.values.lg}px`,
})

function App() {
  return (
    <Container>
      <Home />
    </Container>
  )
}

export default App
