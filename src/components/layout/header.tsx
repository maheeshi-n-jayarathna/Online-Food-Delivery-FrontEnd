import {Link} from "react-router-dom";
import ShoppingCart from "../../assets/icons/shopping-cart.tsx";
import Bars2Icon from "../../assets/icons/bars-2.tsx";
import LocationIcon from "../../assets/icons/locationIcon.tsx";
import LocationContext from "../../context/location-context.tsx";
import UserContext from "../../context/user-context.tsx";
import {UserRoles} from "../../util/user-roles.ts";
import {UserType} from "../../util/user-type.ts";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../context/cart-context.tsx";

function AuthLinks({user}: { user: UserType }): JSX.Element {
    if (user.role !== UserRoles.GUEST) {
        return (
            <div className="relative md:flex items-center justify-between">
                <Link to={'/profile'} className="whitespace-nowrap">
                    Hello, {user.name}
                </Link>
            </div>
        );
    } else {
        return (
            <div className="flex items-center justify-between">
                <Link to={'/login'}
                      className="bg-primary md:bg-white text-white md:text-gray-500 rounded-full px-8 py-2 md:p-0">Login</Link>
                <Link to={'/register'} className="bg-primary rounded-full text-white px-8 py-2 hover:bg-primary-400">
                    Register
                </Link>
            </div>
        );
    }
}

type LocationButtonProps = {
    locations: string[],
    location: string,
    setLocation: any
}

function LocationButton({locations, location, setLocation}: LocationButtonProps): JSX.Element {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [searchLocation, setSearchLocation] = useState<string>('');

    const handleLocationChange = (newLocation: string) => {
        setLocation(newLocation);
        setIsDropdownOpen(false);
    };

    const filteredLocations = locations.filter(location =>
        location.toLowerCase().includes(searchLocation.toLowerCase())
    );

    return (
        <div>
            <button
                onClick={() => {
                    setIsDropdownOpen(!isDropdownOpen)
                }}
                className="text-sm rounded-full ml-2 p-2 flex items-center whitespace-nowrap"
            >
                <LocationIcon/>
                <span className="mr-2">
                    {
                        location ? location : "Select location"
                    }
                </span>
            </button>
            {isDropdownOpen && (
                <div
                    className="absolute top-full right-[80px] md:right-[50px] bg-white border border-gray-300 rounded-xl shadow-md">
                    <input
                        type="text"
                        placeholder="Search location"
                        className="p-2 border-b w-full whitespace-nowrap"
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                    />
                    <ul className="p-2 rounded-lg my-2 flex flex-col gap-2 text-center">
                        {filteredLocations.map((locationOption, index) => (
                            <li
                                className="bg-gray-300 text-gray-600 p-2 rounded-full"
                                key={index}
                                onClick={() => handleLocationChange(locationOption)}
                            >
                                {locationOption}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default function Header(): JSX.Element {


    const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
    const [locations, setLocations] = useState<string[]>([]);
    const [navLinks, setNaveLinks] = useState<string[]>([])
    const [location, setLocation] = useContext(LocationContext);
    const [user] = useContext(UserContext);
    const [carts] = useContext(CartContext);

    const guestNav = ['Menu', 'About', 'Seller'];
    const customerNav = ['Menu', 'About', 'Orders'];
    const sellerNav = ['Menu', 'About', 'Business'];
    const driverNav = ['Menu', 'About', 'Work'];
    const adminNav = ['Menu', 'Sellers', 'Customers', 'Drivers', 'Orders', 'Locations'];

    useEffect(() => {
        if (user.role === UserRoles.GUEST) {
            setNaveLinks(guestNav);
        } else if (user.role === UserRoles.CUSTOMER) {
            setNaveLinks(customerNav);
        } else if (user.role === UserRoles.SELLER) {
            setNaveLinks(sellerNav);
        } else if (user.role === UserRoles.DRIVER) {
            setNaveLinks(driverNav);
        } else if (user.role === UserRoles.ADMIN) {
            setNaveLinks(adminNav);
        }
        setLocations(["Kurunegala", "Colombo", "Panadura", "Kalutara", "Anuradhapura", "Puttalama"])
    }, []);

    return (
        <header className="fixed bg-gray-950 w-[100%] py-3 px-6 z-50">
            {/*mobile*/}
            <div className="flex items-center md:hidden justify-between">
                <Link className="text-primary font-semibold text-2xl" to={'/'}>
                    fast&nbsp;FOOD
                </Link>
                <div className="flex gap-8 items-center">
                    {(user.role === UserRoles.CUSTOMER || user.role === UserRoles.DRIVER) &&
                        <LocationButton locations={locations} location={location} setLocation={setLocation}/>
                    }
                    {(user.role === UserRoles.CUSTOMER) &&
                        <Link to={'/cart'} className="relative w-[24px]">
                            <ShoppingCart/>
                            {carts?.length > 0 && (
                                <span
                                    className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
                          {carts.length}
                        </span>
                            )}
                        </Link>}
                    <button
                        className={`p-1 border w-[34px] ${mobileNavOpen ? 'bg-primary text-white' : ''}`}
                        onClick={() => setMobileNavOpen(prev => !prev)}>
                        <Bars2Icon className=" w-[24px]"/>
                    </button>
                </div>
            </div>
            {mobileNavOpen && (
                <div
                    onClick={() => setMobileNavOpen(false)}
                    className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center">
                    <Link className="rounded-full bg-gray-300 py-2 font-bold" to={'/'}>Home</Link>
                    {
                        navLinks.map((link,index) => {
                            return (
                                <Link key={index} className="rounded-full bg-gray-300 py-2 font-bold"
                                      to={'/' + link}>{link}</Link>
                            );
                        })
                    }
                    <AuthLinks user={user}/>
                </div>
            )}

            {/*desktop*/}
            <div className="hidden md:flex items-center justify-between">
                <nav className="flex items-center gap-3 text-gray-500 font-semibold">
                    <Link className="text-primary font-semibold text-2xl whitespace-nowrap" to={'/'}>
                        FAST FOOD
                    </Link>
                    <Link to={'/'}>Home</Link>
                    {
                        navLinks.map((link,index) => {
                            return (
                                <Link key={index} to={'/' + link}>{link}</Link>
                            );
                        })
                    }
                </nav>
                <nav className="flex items-center gap-2 text-gray-500 font-semibold">
                    {(user.role === UserRoles.CUSTOMER || user.role === UserRoles.DRIVER) &&
                        <LocationButton locations={locations} location={location} setLocation={setLocation}/>
                    }
                    <AuthLinks user={user}/>
                    {(user.role === UserRoles.CUSTOMER) &&
                        <Link to={'/cart'} className="relative w-[24px]">
                            <ShoppingCart/>
                            {carts?.length > 0 && (
                                <span
                                    className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
                          {carts.length}
                        </span>
                            )}
                        </Link>}
                </nav>
            </div>
        </header>
    );
}
