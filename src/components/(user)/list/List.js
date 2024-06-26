import Link from "next/link"
import Items from "../items/Items"

const List = () => {
    return (
            <ul className="flex flex-col md:flex-row md:flex-wrap md:space-x-12 items-start font-bold text-xl">
                <Link href={'/'} className="duration-500 max-sm:py-2 hover:text-[#f7ae24]"><Items itemTxt={'Home'} /></Link>
                <Link href={'/user/gallery'} className="duration-500 max-sm:py-2 hover:text-[#f7ae24]"><Items itemTxt={'Islamic Gallery'} /></Link>
                <Link href={'/user/blogPage'} className="duration-500 max-sm:py-2 hover:text-[#f7ae24]"><Items itemTxt={'Islamic Blogs'} /></Link>
                <Link href={'/user/admissionrule'} className="duration-500 max-sm:py-2 hover:text-[#f7ae24]"><Items itemTxt={'Admission Rules'} /></Link>
            </ul>
    )
}

export default List
