
interface Product {
    id: number;
    image: string;
    category: string;
    description: string;
    price: number;
    amount: number;
    totalPrice: number;
}

interface ProductListProps {
    data: Product[];
    currentProduct?: number;
    amount?: number;
    addHandler: (item: Product) => void;
    removeHandler: (item: Product) => void;
    isCart?: boolean;
}
const ProductList = ({ data, currentProduct, amount, addHandler, removeHandler, isCart = false }: ProductListProps) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-11 mt-10'>
            {
                data?.map((item: any) => {
                    return (
                        <div className='shadow-lg p-3 rounded-lg flex justify-center flex-col items-center' key={item.id}>
                            <img src={item?.image} alt="image not found " className='w-40 h-40' />
                            <div className='w-full'>
                                <p className='capitalize'>{item?.category}</p>

                                {isCart ? (
                                    <>
                                        <p>Price : {item?.price}</p>
                                        <p>TotalPrice : {Math.floor(item?.totalPrice)}</p>
                                        <div className='flex justify-around items-center'>
                                            <button className='shadow-lg rounded-2xl px-2 py-1 text-3xl' onClick={() => addHandler(item)}>+</button>
                                            <p>{item?.amount}</p>
                                            <button className='shadow-lg rounded-2xl px-2 py-1 text-3xl' onClick={() => removeHandler(item)}>-</button>
                                        </div>
                                    </>
                                ) :
                                    (
                                        <>
                                            <p> Description : {item?.description.slice(0, 100)}</p>
                                            <p> Price : {item?.price}</p>
                                            <div className='flex justify-around items-center'>
                                                <button className='shadow-lg rounded-2xl px-2 py-1 text-3xl' onClick={() => addHandler(item)}>+</button>
                                                <p>{currentProduct == item.id ? amount : "0"}</p>
                                                <button className='shadow-lg rounded-2xl px-2 py-1 text-3xl' onClick={() => removeHandler(item)} >-</button>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProductList;
