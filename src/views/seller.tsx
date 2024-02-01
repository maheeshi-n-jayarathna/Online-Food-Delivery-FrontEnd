import SectionHeaders from "../components/layout/section-header.tsx";

export default function Seller(): JSX.Element {
    return(
        <div>
            <section className="text-center my-16">
                <SectionHeaders
                    subHeader={'check out'}
                    mainHeader={'Our Best Sellers'}/>
                <div className="grid sm:grid-cols-3 gap-4">
                    {/*{bestSellers?.length > 0 && bestSellers.map(item => (*/}
                    {/*    <MenuItem key={item._id} {...item} />*/}
                    {/*))}*/}
                </div>
            </section>
        </div>
    )
}
