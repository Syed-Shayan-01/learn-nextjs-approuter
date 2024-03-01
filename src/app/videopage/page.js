import Navbar from "../navbar/page"
const page = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="p-10 text-center text-[2.5rem] font-bold">
                Video Gallery
            </div>
            <div class="flex flex-wrap items-center justify-evenly md:grid-cols-3 gap-4 p-12">
                <div>
                    <iframe class="h-auto max-w-full rounded-lg" src="https://www.youtube.com/embed/bS1MLTPWVeA?si=ij2iAa9IAzH7uSkf" alt="" />
                </div>
                <div>
                    <iframe class="h-auto max-w-full rounded-lg" src="https://www.youtube.com/embed/bS1MLTPWVeA?si=ij2iAa9IAzH7uSkf" alt="" />
                </div>
                <div>
                    <iframe class="h-auto max-w-full rounded-lg" src="https://www.youtube.com/embed/bS1MLTPWVeA?si=ij2iAa9IAzH7uSkf" alt="" />
                </div>
                <div>
                    <iframe class="h-auto max-w-full rounded-lg" src="https://www.youtube.com/embed/bS1MLTPWVeA?si=ij2iAa9IAzH7uSkf" alt="" />
                </div>
                <div>
                    <iframe class="h-auto max-w-full rounded-lg" src="https://www.youtube.com/embed/bS1MLTPWVeA?si=ij2iAa9IAzH7uSkf" alt="" />
                </div>
                <div>
                    <iframe class="h-auto max-w-full rounded-lg" src="https://www.youtube.com/embed/bS1MLTPWVeA?si=ij2iAa9IAzH7uSkf" alt="" />
                </div>
                <div>
                    <iframe class="h-auto max-w-full rounded-lg" src="https://www.youtube.com/embed/bS1MLTPWVeA?si=ij2iAa9IAzH7uSkf" alt="" />
                </div>
                <div>
                    <iframe class="h-auto max-w-full rounded-lg" src="https://www.youtube.com/embed/bS1MLTPWVeA?si=ij2iAa9IAzH7uSkf" alt="" />
                </div>

            </div>
        </>
    )
}

export default page