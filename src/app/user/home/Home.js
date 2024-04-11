import Carouse from "@/components/(user)/carousel/Carousel"
import Navbar from "../../../components/(user)/navbar/page"
import Footer from "@/components/(user)/footer/Footer"
import Image from 'next/image'

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
                            <p className="max-w-[600px] text-justify text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Established three years ago,
                                Al-Qur'an Academy stands as a prestigious institution,
                                dedicated to training more than 400 students in religious studies.
                                Committed to comprehensive education,
                                it also imparts comprehensive secular knowledge, catering to students from nursery to matric level.
                            </p>
                        </div>
                    </div>
                    <Image
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