import Filter from "./components/Filter";
import ProductList from "./components/ProductList";
import Container from "@mui/material/Container";

function App() {
  return (
    <Container maxWidth="md">
      <Filter />
      <ProductList />
    </Container>
  );
}

export default App;
