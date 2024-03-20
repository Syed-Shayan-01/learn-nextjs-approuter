import Carouse from "@/components/carousel/Carousel"
import Navbar from "../navbar/page"
import Footer from "@/components/footer/Footer"


const Home = () => {
    return (
        <>
            <Navbar />
            <Carouse />
            <section className="inline-flex justify-center w-full py-12 lg:py-24">
                <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Introduction of Al-Quran Academy</h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est unde repellendus vel sit quisquam qui dicta labore, facere rerum dolorum incidunt assumenda eius totam ducimus odio voluptatem tenetur earum!
                                Eveniet saepe laborum consequuntur ex eum quos quis quidem vitae, debitis aut, velit ad doloremque! Reiciendis, sint blanditiis aliquid tempora adipisci, autem molestias expedita quo minima esse, aut earum assumenda.
                            </p>
                        </div>
                    </div>
                    <img
                        alt="Image"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                        height="420"
                        src="/image/img.jpg"
                        width="700"
                    />
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home