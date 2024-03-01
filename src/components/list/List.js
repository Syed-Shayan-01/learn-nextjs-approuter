import Link from "next/link"
import Items from "../items/Items"

const List = () => {
    return (
        <>
            <ul className="flex flex-wrap lg:space-x-12 justify-between items-center font-bold text-xl">
                <Link href={'/'} className="duration-500 max-sm:py-2 hover:border-b-yellow-700 border-b-[2px] hover:text-yellow-700"><Items itemTxt={'Home'} /></Link>
                <Link href={'/gallery'} className="duration-500 max-sm:py-2 hover:border-b-yellow-700 border-b-[2px] hover:text-yellow-700"><Items itemTxt={'Islamic Gallery'} /></Link>
                <Link href={'/videopage'} className="duration-500 max-sm:py-2 hover:border-b-yellow-700 border-b-[2px] hover:text-yellow-700"><Items itemTxt={'Islamic Videos'} /></Link>
                <Link href={'/admissionrule'} className="duration-500 max-sm:py-2 hover:border-b-yellow-700 border-b-[2px] hover:text-yellow-700"><Items itemTxt={'Admission Rules'} /></Link>
            </ul>

        </>
    )
}

export default List