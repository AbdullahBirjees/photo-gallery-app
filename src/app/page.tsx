"use client";

import { CldImage } from "next-cloudinary";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState(""); //li03nptkdi2t1kxy0qrj (img code if i use to show it by default)

  // const handleUpload = (result: UploadResult) =>{
  //   setImageId(result.info.public_id);
  // }

  // onUpload={(result: CldUploadWidgetResults ) =>  {
  //   const uploadedResult = result;
  //   if (typeof uploadedResult.info === 'string') {
  //     // Handle the case where info is a string (if needed)
  //   } else if (typeof uploadedResult.info === 'object' && uploadedResult.info !== null) {
  //     const infoObject = uploadedResult.info as { public_id: string };
  //     if (infoObject.public_id) {
  //       setImageId(infoObject.public_id);
  //     }
  //   }
  //   // if(typeof result?.info=== "object"){
  //   //   setImageId(result?.info?.public_id);
      
  //   // }
  // }}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result: UploadResult|any) => {
          setImageId(result.info.public_id);
        }}
        uploadPreset="uojdzhsl"
      />

      {/* <CldUploadButton
        onUpload = {handleUpload}
        uploadPreset="uojdzhsl"
      /> */}
      {imageId && (
        <CldImage
          width="960"
          height="600"
          
          src={imageId}
          // sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
