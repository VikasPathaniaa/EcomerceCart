import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScaleLoader } from "react-spinners";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { getProducts } from "../redux/actions/product";
import { AppDispatch } from "../redux/store";

interface ProductType {
  id: number;
  image: string;
  price: number;
  category: string;
}

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [amount, setAmount] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(0);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { isLoading, products } = useSelector(
    (state: any) => state.productReducer
  );

  //* Add to cart function
  const addHandler = (item: ProductType) => {
    if (currentProduct !== item.id) {
      setCurrentProduct(item.id);
      setAmount(1);
      dispatch(
        addToCart({
          id: item.id,
          price: Math.floor(item.price),
          amount: 1,
          totalPrice: item.price,
          image: item.image,
          category: item.category,
        })
      );
    } else {
      setCurrentProduct(item.id);
      setAmount((prevAmount) => prevAmount + 1);
      dispatch(
        addToCart({
          id: item.id,
          price: Math.floor(item.price),
          amount: amount + 1,
          totalPrice: item.price,
          image: item.image,
          category: item.category,
        })
      );
    }
  };

  //* Remove from cart function
  const removeHanlder = (item: ProductType) => {
    if (amount !== 0) {
      setCurrentProduct(item.id);
      setAmount((prevAmount) => prevAmount - 1);
      dispatch(
        removeFromCart({
          id: item.id,
          price: Math.floor(item.price),
          amount: amount - 1,
          totalPrice: item.price,
          image: item.image,
          category: item.category,
        })
      );
    }
  };

  return (
    <>
      <Header />
      <div>
        {isLoading ? (
          <div className="flex items-center h-[100vh] justify-center">
            <ScaleLoader color="#36d7b7" />
          </div>
        ) : (
          <ProductList
            data={products}
            currentProduct={currentProduct}
            amount={amount}
            addHandler={addHandler}
            removeHandler={removeHanlder}
          />
        )}
      </div>
    </>
  );
};

export default Home;
