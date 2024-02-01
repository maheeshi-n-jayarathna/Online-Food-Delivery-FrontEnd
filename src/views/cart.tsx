import {useContext, useEffect, useState} from "react";
import cartContext from "../context/cart-context.tsx";
// import {CartItemType} from "../util/cart-type.ts";
import SectionHeaders from "../components/layout/section-header.tsx";
import CartItem from "../components/card/cart-item.tsx";
import {CartItemType} from "../util/cart-type.ts";
import userContext from "../context/user-context.tsx";

export default function Cart() {
    const [cart, setCart] = useContext(cartContext);
    const [user] = useContext(userContext);
    const [subTotal, setSubTotal] = useState(0);
    const [number, setNumber] = useState(user.number);
    const [address, setAddress] = useState(user.address);

    useEffect(() => {
        setSubTotal(calculateSubtotal());
    }, [cart])
    const calculateSubtotal = () => {
        return cart.reduce((total: number, item: CartItemType) => total + item.qty * item.price, 0);
    };

    const handleCheckOut = () => {

    }

    const handleClear = () => {
        reset();
    }

    const reset = () => {
        setNumber(user.number ? user.number : '');
        setAddress(user.address ? user.address : '');
        setCart([]);
    }

    return (
        <div className="text-center">
            <SectionHeaders subHeader="YOUR" mainHeader="CART"/>
            <div className="flex">
                <div className="w-2/3 ">
                    {
                        cart?.map((item: CartItemType) => {
                            return (
                                <CartItem item={item}/>
                            )
                        })
                    }
                </div>
                <div className="w-1/3 rounded-md">
                    <div className="bg-gray-100 rounded-md p-4">
                        <div className="flex justify-between items-center mb-3">
                            <h1 className="text-sm text-gray-500">Subtotal (4 items)</h1>
                            <h1 className="text-md  text-black">LKR: {subTotal}</h1>
                        </div>
                        {
                            cart?.length !== 0 &&
                            <div className="flex justify-between items-center  mb-3">
                                <h1 className="text-sm text-gray-500">Shipping Fee</h1>
                                <h1 className="text-md  text-black">LKR: 250</h1>
                            </div>
                        }
                        <div className="flex justify-between items-center  mb-3">
                            <h1 className="text-sm text-black">Total</h1>
                            <h1 className="text-lg font-semibold text-primary">LKR: {(subTotal === 0) ? 0 : subTotal + 300}</h1>
                        </div>
                        <input value={number} onChange={e => setNumber(e.target.value)}
                               className="rounded-md mb-3 p-2 w-[100%]" placeholder='Phone number'/>
                        <input value={address} onChange={e => setAddress(e.target.value)}
                               className="rounded-md mb-3 p-2 w-[100%]" placeholder="address"/>
                        <button
                            disabled={cart?.length === 0}
                            className="mb-3 bg-primary text-white hover:bg-primary-400 disabled:opacity-30"
                            onClick={handleCheckOut}
                        >
                            Check Out
                        </button>
                        <button
                            className="text-gray-400 hover:text-gray-500 hover:border-gray-500 hover:bg-gray-200"
                            onClick={handleClear}
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}