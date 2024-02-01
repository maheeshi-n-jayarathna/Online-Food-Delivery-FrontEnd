import {useState} from "react";

export default function Login(): JSX.Element {
    const [isHide, setIsHide] = useState(true);

    return (
        <div>
            <section className="mt-12">
                <h1 className="text-center text-primary text-4xl mb-4">
                    Login
                </h1>
                <form className="max-w-xs mx-auto mt-10">
                    <input type="email" name="email" placeholder="Enter your email"/>
                    <input type={isHide ? 'password' : 'text'} name="password" placeholder="Enter your password"/>
                    <div className="flex ml-2 gap-5">
                        <input type="checkbox" checked={!isHide} onChange={() => setIsHide(!isHide)}/>
                        <label>Show password</label>
                    </div>
                    <button type="button" className="bg-primary mt-5 text-white hover:bg-primary-400">Login</button>
                </form>
            </section>
        </div>
    );
}
