import {Link} from "react-router-dom";
import {ChangeEvent, useState} from "react";

export default function Register(): JSX.Element {
    const [selectedImage, setSelectedImage] = useState<string>('');

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const result = e.target?.result;
                if (result && typeof result === 'string') {
                    setSelectedImage(result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <section className="mt-8">
                <h1 className="text-center text-primary text-4xl mb-4">
                    Register
                </h1>
                <form className="block max-w-xs mx-auto">
                    {selectedImage && (
                        <div className="flex items-center justify-center m-4">
                            <img
                                src={selectedImage}
                                alt="Selected image"
                                className="rounded-full w-64 h-64 object-cover"
                            />
                        </div>
                    )}
                    <input
                        type="text"
                        placeholder="Enter your name"
                    />
                    <input
                        type="email"
                        placeholder="Enter your email"
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <button type="button" className="bg-primary text-white hover:bg-primary-400">
                        Register
                    </button>
                    <div className="text-center my-4 text-gray-500 border-t pt-4">
                        Existing account?{' '}
                        <Link className="underline" to={'/login'}>Login here &raquo;</Link>
                    </div>
                </form>
            </section>
        </div>
    );
}
