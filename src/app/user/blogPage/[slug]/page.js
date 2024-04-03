import Navbar from "@/components/(user)/navbar/page";
import PageName from "@/components/(user)/pageName/PageName";

const Blog = ({ params }) => {
  function createMarkup(c) {
    return { __html: c };
  }
  return (
    <>
      <Navbar />
      <PageName pageNameText={'Islamic Blogs'} />
      <div className=" mx-16 text-[1.25rem] font-[sans-serif] text-justify" dangerouslySetInnerHTML={createMarkup(
        decodeURIComponent(params.slug)
      )} />
    </>
  )
}

export default Blog