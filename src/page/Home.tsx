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

  
  const { cartProducts } = useSelector(
    (state: any) => state.cartReducer
  );
  

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { isLoading, products } = useSelector(
    (state: any) => state.productReducer
  );

  //* Add to cart function
  const addHandler = (item: ProductType) => {
    dispatch(
      addToCart({
        id: item.id,
        price: Math.floor(item.price),
        totalPrice: item.price,
        image: item.image,
        category: item.category,
      })
      );
   
  };

  //* Remove from cart function
  const removeHanlder = (item: ProductType) => {
    const cartItem = cartProducts.find((cartItem: any) => cartItem.id === item.id);
    if(cartItem?.amount>0){
      dispatch(
        removeFromCart({
          id: item.id,
          price: Math.floor(item.price),
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
            
            addHandler={addHandler}
            removeHandler={removeHanlder}
          />
        )}
      </div>
    </>
  );
};

export default Home;
