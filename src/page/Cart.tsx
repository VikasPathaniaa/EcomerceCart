import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { AppDispatch } from "../redux/store";

const Cart = () => {
  const { cartProducts, totalAmount } = useSelector(
    (state: any) => state.cartReducer
  );
  const dispatch = useDispatch<AppDispatch>();

  //* Add to cart function
  const addHandler = (item: any) => {
    dispatch(
      addToCart({
        id: item.id,
        price: item.price,
        amount: item.amount,
        totalPrice: item.price,
        image: item.image,
        category: item.category,
      })
    );
  };

  //* Remove from cart function
  const removeHanlder = (item: any) => {
    dispatch(
      removeFromCart({
        id: item.id,
        price: item.price,
        amount: item.amount,
        totalPrice: item.price,
        image: item.image,
        category: item.category,
      })
    );
  };
  return (
    <>
      <Header />
      {cartProducts.length === 0 ? (
        <div className="flex items-center h-[100vh] justify-center">
          <p>Your Cart Bag is Empty</p>
        </div>
      ) : (
        <>
          <ProductList
            data={cartProducts}
            addHandler={addHandler}
            removeHandler={removeHanlder}
            isCart={true}
          />

          <div className="flex items-center justify-center mt-11">
            <p className="shadow-2xl rounded-2xl p-14">
              {" "}
              Total Amount :{" "}
              <span className="text-gray-500 font-normal">
                {Math.floor(totalAmount)}{" "}
              </span>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
