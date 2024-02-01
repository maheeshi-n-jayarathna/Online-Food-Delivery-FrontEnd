import SectionHeaders from "../components/layout/section-header.tsx";
import MenuCard from "../components/card/menu-card.tsx";
import PizzaImage from './../assets/pizza.png';
import {useEffect, useState} from "react";
import {ProductType} from "../util/product-type.ts";

const productList = [
    {
        id:'P001',
        image: PizzaImage,
        name: 'Pizza - small',
        description: 'xplicabo fugiat ipsam, iure laboriosam nostrum placeat quis quos repellendus veritatis voluptatem voluptatibus.',
        price: 800,
        qtyOnStock: 0
    }, {
        id:'P002',
        image: PizzaImage,
        name: 'Pizza - medium',
        description: 'xplicabo fugiat ipsam, iure laboriosam nostrum placeat quis quos repellendus veritatis voluptatem voluptatibus.',
        price: 1200,
        qtyOnStock: 2
    },{
        id:'P003',
        image: PizzaImage,
        name: 'Pizza - Large',
        description: 'xplicabo fugiat ipsam, iure laboriosam nostrum placeat quis quos repellendus veritatis voluptatem voluptatibus.',
        price: 1600,
        qtyOnStock: 20
    },{
        id:'P003',
        image: PizzaImage,
        name: 'Pizza - Large',
        description: 'xplicabo fugiat ipsam, iure laboriosam nostrum placeat quis quos repellendus veritatis voluptatem voluptatibus.',
        price: 1600,
        qtyOnStock: 20
    },{
        id:'P003',
        image: PizzaImage,
        name: 'Pizza - Large',
        description: 'xplicabo fugiat ipsam, iure laboriosam nostrum placeat quis quos repellendus veritatis voluptatem voluptatibus.',
        price: 1600,
        qtyOnStock: 20
    },{
        id:'P003',
        image: PizzaImage,
        name: 'Pizza - Large',
        description: 'xplicabo fugiat ipsam, iure laboriosam nostrum placeat quis quos repellendus veritatis voluptatem voluptatibus.',
        price: 1600,
        qtyOnStock: 20
    },{
        id:'P003',
        image: PizzaImage,
        name: 'Pizza - Large',
        description: 'xplicabo fugiat ipsam, iure laboriosam nostrum placeat quis quos repellendus veritatis voluptatem voluptatibus.',
        price: 1600,
        qtyOnStock: 20
    }
];
export default function Menu(): JSX.Element {
    const [products, setProducts] = useState<ProductType[]>();

    useEffect(() => {
        setProducts(productList)
    }, []);

    return (
        <div className="text-center">
            <SectionHeaders subHeader="CHECK OUT OUR" mainHeader="MENU"/>
            <div className="grid mt-5 grid-cols-4 gap-4">
                {
                    products?.map(product => {
                        return (
                            <MenuCard key={product.id} product={product}/>
                        );
                    })
                }
            </div>
        </div>
    );
}