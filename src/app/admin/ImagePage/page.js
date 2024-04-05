'use client'
import ButtonUser from '@/components/(user)/button/page';
import Image from 'next/image'
import React, { useState } from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";

const ImageUploadPageAdmin = () => {
  const [image, setImage] = useState(null);
  const SubmitHandler = (e) => {
    e.preventDefault();
  }


  const handleImageGet = (e) => {
    const image = e.target.files[0];
    setImage(image);
  }
  return (
    <>
      <div className="flex flex-col p-10 space-y-1.5 text-center">
        <h3 className="text-[3rem] font-bold">Image Form</h3>
      </div>
      <form
        onSubmit={SubmitHandler}
        className="rounded-lg border bg-card text-card-htmlForeground shadow-sm w-full max-w-md mx-auto"
      >
        <div className="p-4 space-y-2">
          <div className="grid gap-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="name"
            >
              Category Name
            </label>
            <input
              className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="name"
              placeholder="E.g. Summer 2023"
            />
          </div>
          <div className="flex flex-col gap-2 min-h-[200px]">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border-dashed rounded-lg p-4 flex w-full items-center justify-center border-2 border-yellow-200 cursor-pointer bg-yellow-50 dark:bg-yellow-800"
              htmlFor="image"
            >
              <span className="text-sm text-yellow-500 dark:text-yellow-400">
                Drag and drop your image here or click to browse.
                <FaCloudUploadAlt className=' hover:text-yellow-600 text-black text-[3rem] m-auto' />
              </span>
              <input
                className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sr-only"
                id="image"
                type="file"
                onChange={handleImageGet}
              />
            </label>
            {image ? <Image
              src={URL.createObjectURL(image)}
              width={"400"}
              height="200"
              alt="Uploaded image"
              className="rounded-lg object-cover overflow-hidden w-full"
              style={{ "aspect-ratio": 400 / 200, "object-fit": "cover" }}
            /> : <Image
              src={'/image/madina.jpg'}
              width={"400"}
              height="200"
              alt="Uploaded image"
              className="rounded-lg object-cover overflow-hidden w-full"
              style={{ "aspect-ratio": 400 / 200, "object-fit": "cover" }}
            />}
          </div>
        </div>
        <div className='my-4 mx-4'><ButtonUser props={'Submit'} /></div>
      </form>

    </>
  )
}

export default ImageUploadPageAdmin
