import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Cart from "./page/Cart";

const App = () => {
  return <> 
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/cart" element={<Cart/>} />
  </Routes>
  </>;
};

export default App;
