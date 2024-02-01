import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/home.tsx";
import Menu from "./views/menu.tsx";
import About from "./views/about.tsx";
import Customers from "./views/customers.tsx";
import Sellers from "./views/sellers.tsx";
import Login from "./views/login.tsx";
import Register from "./views/register.tsx";
import RootLayout from "./components/layout/layout.tsx";
import Seller from "./views/seller.tsx";
import {useState} from "react";
import LocationContext from "./context/location-context.tsx";
import UserContext from "./context/user-context.tsx";
import {UserRoles} from "./util/user-roles.ts";
import {UserType} from "./util/user-type.ts";
import CartContext from "./context/cart-context.tsx";
import Cart from "./views/cart.tsx";
import {CartItemType} from "./util/cart-type.ts";

function App(): JSX.Element {
    const [location, setLocation] = useState<string>('');
    const [user, setUser] = useState<UserType>({role: UserRoles.GUEST});
    const [cart, setCart] = useState<CartItemType[]>([]);

    return (
        <div>
            <BrowserRouter>
                <UserContext.Provider value={[user, setUser]}>
                    <LocationContext.Provider value={[location, setLocation]}>
                        <CartContext.Provider value={[cart, setCart]}>
                            <RootLayout>
                                <Routes>
                                    <Route path={"/"} element={<Home/>}/>
                                    <Route path={"/menu"} element={<Menu/>}/>
                                    <Route path={"/about"} element={<About/>}/>
                                    <Route path={"/sellers"} element={<Sellers/>}/>
                                    <Route path={"/customers"} element={<Customers/>}/>
                                    <Route path={"/seller"} element={<Seller/>}/>
                                    <Route path={"/login"} element={<Login/>}/>
                                    <Route path={"/register"} element={<Register/>}/>
                                    <Route path={"/cart"} element={<Cart/>}/>
                                </Routes>
                            </RootLayout>
                        </CartContext.Provider>
                    </LocationContext.Provider>
                </UserContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
