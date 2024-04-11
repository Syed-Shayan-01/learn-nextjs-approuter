
const ButtonUser = ({ props }) => {
    return (
        <> <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10  bg-[#f7ae24] text-white px-6 py-2 rounded-full">
            {props}
        </button></>
    )
}

export default ButtonUser