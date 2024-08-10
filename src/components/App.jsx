import Product from "./Product";

export default function App() {
  return (
    <>
      <h1>Best selling</h1> <Product name="Tacos With Lime" price={10.99} />{" "}
      <Product name="Fries and Burger" price={14.29} />{" "}
    </>
  );
}
