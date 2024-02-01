import RightArrow from "../assets/icons/right-arrow.tsx";
import pizzaImage from "./../assets/pizza.png";
import leftImage from "./../assets/salad-heart-shape-left.jpg";
import rightImage from "./../assets/salad-heart-shape-right.jpg";
import Seller from "./seller.tsx";

export default function Home(): JSX.Element {
    return (
        <div>
            <section className="home md:mt-4" id="home-section">
                <div className="py-8 md:py-14">
                    <h1 className="text-4xl text-gray-500 font-semibold">
                        Everything<br/>
                        is better<br/>
                        with a&nbsp;
                        <span className="text-primary">Pizza</span>
                    </h1>
                    <p className="my-6 text-gray-500 text-sm">
                        Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life
                    </p>
                    <div className="flex gap-4 text-sm">
                        <button
                            className="flex justify-center bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
                            Order now
                            <RightArrow/>
                        </button>
                        <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
                            Learn more
                            <RightArrow/>
                        </button>
                    </div>
                </div>
                <div className="relative 2xl:block xl:block lg:block md:block hidden">
                    <img src={pizzaImage} alt='pizza' className="absolute w-[100%] h-[100%] object-contain"/>
                </div>
            </section>
            <section>
                <div className="absolute left-0 right-0 w-full justify-start">
                    <div className="absolute left-0 -top-[70px] text-left -z-10">
                        <img src={rightImage} width={120} alt={'sallad'}/>
                    </div>
                    <div className="absolute -top-[70px] right-0 -z-10">
                        <img src={leftImage} width={120} alt={'sallad'}/>
                    </div>
                </div>
            </section>
            <Seller/>
        </div>
    );
}
