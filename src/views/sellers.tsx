// import {FaEye, FaPen, FaTrash} from "react-icons/fa";

export default function Sellers(): JSX.Element {
    return(
        <div>
            <section className="mx-auto text-center mt-8 ml-40">
                <form className="max-w-lg mx-auto ml-2">
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="text" name="address" placeholder="Address"/>
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="text" name="contact" placeholder="Contact"/>
                    <div className="inline-flex ml-2 space-x-1">
                        <button type="button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 ...  mt-5 text-white">ADD</button>
                        <button type="button" className="bg-gradient-to-r from-yellow-400 to-yellow-900 hover:from-yellow-900 hover:to-yellow-400 ...  mt-5 text-white">UPDATE</button>
                        <button type="button" className="bg-gradient-to-r from-red-400 to-red-900 hover:from-red-900 hover:to-red-400 ...  mt-5 text-white">DELETE</button>
                        <button type="button" className="bg-gradient-to-r from-green-400 to-green-900 hover:from-green-900 hover:to-green-400 ...  mt-5 text-white">GET </button>
                    </div>
                </form>
            </section>
            <section className="mt-8">
                <table className="table-auto">
                    <thead className={'bg-gray-100'}>
                    <tr>
                        <th className={'py-2'}>Name</th>
                        <th className={'py-2'}>Address</th>
                        <th className={'py-2'}>Email</th>
                        <th className={'py-2'}>Contact</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={'w-[20%]'}></td>
                        <td className={'w-[40%]'}></td>
                        <td className={'w-[20%]'}></td>
                        <td className={'w-[20%]'}></td>
                        {/*<button className={'bg-blue-600 text-white p-3 rounded-full mx-2'}><FaEye /></button>*/}
                        {/*<button className={'bg-green-600 text-white p-3 rounded-full mx-2'}><FaPen /></button>*/}
                        {/*<button className={'bg-red-600 text-white p-3 rounded-full mx-2'}><FaTrash /></button>*/}
                    </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}
