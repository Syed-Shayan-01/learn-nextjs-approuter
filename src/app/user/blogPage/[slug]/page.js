'use client'
import Navbar from "@/components/(user)/navbar/page";
import PageName from "@/components/(user)/pageName/PageName";

const Blog = ({ params }) => {

  // Get the first word from the slug
  function getFirstWordFromSlug(data) {
    const decodedText = decodeURIComponent(data);
    const firstWord = decodedText.split(',')[0];
    return firstWord;
  }
  // Get the content after the first word
  function getContentAfterFirstWord(data) {
    const decodedText = decodeURIComponent(data);
    // Split the decoded text by ',' and get the content after the first word
    const contentAfterFirstWord = decodedText.split(',').slice(1).join(',');
    return contentAfterFirstWord;
  }

  // Create markup for dangerouslySetInnerHTML
  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <>
      <Navbar />
      <div className="mx-4 md:mx-8 lg:mx-24 py-8 md:py-12 lg:py-20">
        <span>
          <div className="my-5 font-bold text-[2.4rem] md:text-[3.5rem] lg:text-[4rem] font-[sans-serif]" dangerouslySetInnerHTML={createMarkup(
            getFirstWordFromSlug(params.slug)
          )} />
        </span>

        <div className="text-[1.25rem] font-[sans-serif] text-justify" dangerouslySetInnerHTML={createMarkup(
          getContentAfterFirstWord(params.slug)
        )} />
      </div>
    </>
  );
}

export default Blog;
