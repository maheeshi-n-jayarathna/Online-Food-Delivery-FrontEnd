import {ProductType} from "../../util/product-type.ts";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../context/cart-context.tsx";
import {CartItemType} from "../../util/cart-type.ts";

export default function MenuCard({product}: { product: ProductType }): JSX.Element {
    const [cart, setCart] = useContext(CartContext);
    const [isValidQty, setIsValidQty] = useState(product.qtyOnStock > 0);

    useEffect(() => {
        const indexInCart = cart.findIndex((cartProduct: CartItemType) => cartProduct.id === product.id);
        const qty = indexInCart !== -1 ? cart[indexInCart].qty : 0;
        setIsValidQty(qty < product.qtyOnStock);
    }, [cart]);

    const handleOnClick = () => {
        const indexInCart = cart.findIndex((cartProduct: CartItemType) => cartProduct.id === product.id);

        if (indexInCart !== -1) {
            const updatedCart = [...cart];
            updatedCart[indexInCart].qty = updatedCart[indexInCart].qty + 1;
            setCart(updatedCart);
        } else {
            const cartItem = {
                id: product.id,
                image: product.image,
                name: product.name,
                description: product.description,
                price: product.price,
                qtyOnStock: product.qtyOnStock,
                qty: 1
            };
            setCart((prevCart: ProductType[]) => [...prevCart, cartItem]);
        }
    };

    return (
        <div className="bg-gray-200 p-2 rounded-lg text-center hover:bg-gray-100">
            <img src={product.image} alt={product.name}/>
            <h4 className="font-semibold text-lg my-3">{product.name}</h4>
            <p className="text-gray-500 text-sm">
                {product.description}
            </p>
            <button disabled={!isValidQty} type='button'
                    className="mt-4 bg-primary text-white rounded-full px-8 py-2 disabled:opacity-75"
                    onClick={handleOnClick}>Add To Cart
            </button>
            <p className="text-sm font-semibold text-red-600">{(!isValidQty) && "Out of stock"}</p>
            <p className="font-semibold text-sm text-gray-600 mt-1">LKR: {product.price}</p>
        </div>
    );
}