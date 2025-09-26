import CartCards from "@/app/components/cart";
import Header from "@/app/components/header";
import SearchBar from "@/app/components/searchBar";

export default function Cart() {
    return (
        <div>
            <Header />
            <SearchBar />

            <div className="flex flex-col justify-center items-center w-full gap-4 py-4">
                <div className="w-full flex justify-between gap-4 items-center border-b-2 border-black/50 text-black px-4 bg-[#DCDCDC]">
                    <p>Cart <span>(100)</span></p>
                    <button
                        className="no-underline text-[#0699CA]"
                        >Clear All</button>
                </div>
                <CartCards />
            </div>

        </div>
    )
}