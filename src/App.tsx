import { ProductList } from "./components/list/list";
import { Cart } from "./components/cart/cart";
import "./styles/home.scss"

function App() {
  return (
    <>
      <main className="container">
        <ProductList />
        <Cart />
      </main>
    </>
  );
}

export default App;
