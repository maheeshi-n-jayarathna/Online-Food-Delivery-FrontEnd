import MinusIcon from "../../assets/icons/minus-icon.tsx";
import PizzaImage from "../../assets/pizza.png";
import {CartItemType} from "../../util/cart-type.ts";
import {useContext, useState} from "react";
import CartContext from "../../context/cart-context.tsx";

export default function CartItem({item}: { item: CartItemType }) {
    const [qty, setQty] = useState(item.qty);
    const [cart, setCart] = useContext(CartContext);
    const handlePlus = () => {
        if (item.qtyOnStock > 0) {
            setQty(qty + 1);
            const indexInCart = cart.findIndex((cartProduct: CartItemType) => cartProduct.id === item.id);
            if (indexInCart !== -1) {
                const updatedCart = [...cart];
                updatedCart[indexInCart].qty = updatedCart[indexInCart].qty + 1;
                setCart(updatedCart);
            }
        }
    }

    const handleMinus = () => {
        setQty(qty - 1);
        const indexInCart = cart.findIndex((cartProduct: CartItemType) => cartProduct.id === item.id);
        if (indexInCart !== -1) {
            const updatedCart = [...cart];
            updatedCart[indexInCart].qty = updatedCart[indexInCart].qty - 1;
            setCart(updatedCart);
        }
    }

    const handleRemove = () => {
        setCart((prevCart: CartItemType[]) => prevCart.filter(cartProduct => cartProduct.id !== item.id));
    }


    return (
        <div className="relative  flex gap-4 items-center bg-gray-100 rounded-md p-4 mb-4 mr-4">
            <div className="absolute top-[-5px] right-[-5px]">
                <button type='button' onClick={handleRemove} className="m-0 p-0 border-0 bg-gray-200 hover:bg-gray-300">
                    <MinusIcon/>
                </button>
            </div>
            <div className="border w-64 ">
                <img src={PizzaImage} alt='pizza'/>
            </div>
            <div>
                <h4 className="text-left font-semibold text-lg my-3">{item.name}</h4>
                <p className="text-left text-gray-500 text-sm">{item.description}</p>
            </div>
            <div className="text-gray-500 w-64">
                <p className="text-md font-bold">LKR:{item.price}</p>
                <div className="flex gap-1 items-center text-sm">
                    <button disabled={qty == 1} type='button' onClick={handleMinus}
                            className="bg-gray-200 m-0 p-0 rounded disabled:opacity-30">-
                    </button>
                    <p className="px-2 border rounded">{qty}</p>
                    <button disabled={item.qtyOnStock === qty} type='button' onClick={handlePlus}
                            className="bg-gray-200 m-0 p-0 rounded disabled:opacity-30">+
                    </button>
                </div>
            </div>
        </div>
    );
}