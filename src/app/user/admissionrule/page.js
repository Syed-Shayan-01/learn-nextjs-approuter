import PageName from "@/components/(user)/pageName/PageName"
import Navbar from "../../../components/(user)/navbar/page"

const page = () => {
    return (
        <div>
            <Navbar />
            <PageName pageNameText={'Admission Rules'} />
            <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 text-[1.2rem] text-justify">
                These admission rules will be updated in a few days, so you are connected to Al Quran Academy Facebook groups. If you are interested in enrolling, you will contact the moderator and CEO of Al-Quran Academy. Persons contact number will be found at the bottom left corner of the website.
            </div>
            <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 text-[1.2rem] text-justify">
                داخلہ کے یہ قوانین چند دنوں میں اپ ڈیٹ کر دیے جائیں گے، اس لیے آپ القرآن اکیڈمی کے فیس بک گروپس سے جڑے ہوئے ہیں۔ اگر آپ داخلہ لینے میں دلچسپی رکھتے ہیں، تو آپ القرآن اکیڈمی کے ناظم اور سی ای او سے رابطہ کریں گے۔ لوگو کا رابطہ نمبر ویب سائٹ کے نیچے بائیں کونے میں ملے گا۔
            </div>
        </div>
    )
}

export default page